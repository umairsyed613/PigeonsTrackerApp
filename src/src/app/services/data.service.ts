import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tournament } from '../models/Tournament';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

const Tournament_Collection = 'Tournaments';
const User_Collection = 'Users';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tournmanetsCollection: AngularFirestoreCollection<Tournament>;
  cachedTournmanets: Observable<Tournament[]>;

  //constructor(public httpCLient: HttpClient) { }
  constructor(private fireBaseSrv: AngularFirestore) {
    this.tournmanetsCollection = fireBaseSrv.collection<Tournament>(Tournament_Collection);
    //this.cachedTournmanets= this.tournmanetsCollection.valueChanges();
  }

  createTournament(tournament: Tournament){
   this.tournmanetsCollection.add({ ...tournament }).then(t => console.log(t));
  }

  getTournaments(){
    // return this.tournmanetsCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Tournament;
    //     data.DocId = a.payload.doc.id;
    //     return { ...data };
    //   }))
    // );

    return this.fireBaseSrv.collection(Tournament_Collection, ref => ref.orderBy('CreatedAt', 'desc').limit(10)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tournament;
        data.DocId = a.payload.doc.id;
        return { ...data };
      }))
    );
  }

  getPagedTournaments(size){
    const query = ref => ref.orderBy('CreatedAt', 'desc').limit(size);
    return this.fireBaseSrv.collection(Tournament_Collection, query).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tournament;
        data.DocId = a.payload.doc.id;
        return { ...data };
      }))
    );
  }
  // createTournament(tournament: Tournament) {
  //   this.httpCLient.post(`${environment.api_url}/${Tournament_Collection}/`, JSON.stringify(tournament), { headers: this.headers }).subscribe(r => console.log(r));
  // }

  // getData(pageSize: number, pageState) {

  //   let uri = `${environment.api_url}/${Tournament_Collection}?page-size=${pageSize}`;
  //   if (pageState != undefined || pageState != null) {
  //     uri += `&page-state=${pageState}`;
  //   }
  //   return this.httpCLient.get(uri, { headers: this.headers });
  // }

  // deleteTournamentDocument(docId) {
  //   let uri = `${environment.api_url}/${Tournament_Collection}/${docId}`;
  //   this.httpCLient.delete(uri, { headers: this.headers }).subscribe(res => console.log(res));
  // }

  // deleteTournamentCollection() {
  //   let uri = `${environment.api_url}/${Tournament_Collection}`;
  //   this.httpCLient.delete(uri, { headers: this.headers }).subscribe(res => console.log(res));
  // }

  // /// User Management /////

  // createUser(user: User) {
  //   this.httpCLient.post(`${environment.api_url}/${User_Collection}/`, JSON.stringify(user), { headers: this.headers }).subscribe(r => console.log(r));
  // }

  // getUser(email: string) {
  //   let uri = `${environment.api_url}/${User_Collection}?raw=true&where=\{"Email":\{"$eq":"${email}"\}\}`;
  //   return this.httpCLient.get(uri, { headers: this.headers });
  // }

  // getAllUser() {
  //   let uri = `${environment.api_url}/${User_Collection}?raw=true`;
  //   return this.httpCLient.get(uri, { headers: this.headers })
  // }
  /////End User Management /////

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
