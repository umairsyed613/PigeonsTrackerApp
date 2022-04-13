import { Injectable } from '@angular/core';
import { Tournament, TournamentItem } from '../models/Tournament';

import { map, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

const Tournament_Collection = 'Tournaments';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tournmanetsCollection: AngularFirestoreCollection<Tournament>;
  cachedTournmanets: Observable<Tournament[]>;

  lastInResponse: any;

  private itemsSubject: BehaviorSubject<TournamentItem[] | undefined> = new BehaviorSubject(undefined);

  private lastPageReached: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private fireBaseSrv: AngularFirestore) {
    this.tournmanetsCollection = fireBaseSrv.collection<Tournament>(Tournament_Collection);
    //this.cachedTournmanets= this.tournmanetsCollection.valueChanges();
  }

  createTournament(tournament: Tournament) {
    this.tournmanetsCollection.add({ ...tournament }).then(t => console.log(t));
  }

  watchItems(): Observable<TournamentItem[]> {
    return this.itemsSubject.asObservable();
  }

  watchLastPageReached(): Observable<boolean> {
    return this.lastPageReached.asObservable();
  }

  async initLoadTournaments() {
    console.log('Initiating Tournaments...');
    const size = 5;
    return new Promise<void>((resolve, reject) => {
      try {
        this.fireBaseSrv.collection(Tournament_Collection, ref => ref.orderBy('CreatedAt', 'desc').limit(size)).snapshotChanges().pipe(
          tap(data => this.lastInResponse = data.length >= size ? data[data.length - 1].payload.doc : undefined),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Tournament;
            const id = a.payload.doc.id;
            const ref = a.payload.doc.ref;
            const fromCache = a.payload.doc.metadata.fromCache;
            return { id, ref, data, fromCache };
          }))
        ).subscribe(async (items: TournamentItem[]) => {
          await this.addItems(items);

          resolve();
        })
      } catch (e) {
        reject(e);
      };
    });
  }


  private addItems(items: TournamentItem[]): Promise<void> {
    //console.log(items);
    return new Promise<void>((resolve) => {
      if (!items || items.length <= 0) {
        this.lastPageReached.next(true);
        this.lastInResponse = undefined;

        resolve();
        return;
      }
      this.itemsSubject.asObservable().pipe(take(1))
        .subscribe((currentItems: TournamentItem[]) => {
          //items = items.filter(f => f.fromCache === false);[...currentItems, ...items]
          this.itemsSubject.next(currentItems !== undefined ? currentItems.concat(items.filter(x => currentItems.every(y => y.id !== x.id))) : [...items]);

          resolve();
        });
    });
  }

  loadNextPageTournamanet() {
    if (this.lastInResponse) {
      const size = 5;
      return new Promise<void>((resolve, reject) => {
        try {
          this.fireBaseSrv.collection(Tournament_Collection, ref => ref.orderBy('CreatedAt', 'desc').limit(size).startAfter(this.lastInResponse)).snapshotChanges().pipe(
            tap(data => {
              this.lastInResponse = data.length >= size ? data[data.length - 1].payload.doc : undefined;

              if (!this.lastInResponse) {
                this.lastPageReached.next(true);
              }
            }),
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Tournament;
              const id = a.payload.doc.id;
              const ref = a.payload.doc.ref;
              const fromCache = a.payload.doc.metadata.fromCache;
              return { id, ref, data, fromCache };
            }))
          ).subscribe(async (items: TournamentItem[]) => {
            await this.addItems(items);

            resolve();
          })
        } catch (e) {
          reject(e);
        };
      });
    }
  }

  getDocumentbyId(docId){
    return this.fireBaseSrv.collection(Tournament_Collection).doc(docId).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as Tournament;
        const id = a.payload.id;
        const ref = a.payload.ref;
        const fromCache = a.payload.metadata.fromCache;
        return <TournamentItem>{ id, ref, data, fromCache };
      })
    );
  }

}
