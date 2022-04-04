import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Tournament } from 'src/app/models/Tournament';

@Component({
  selector: 'app-upsert-tournament',
  templateUrl: './upsert-tournament.component.html',
  styleUrls: ['./upsert-tournament.component.scss'],
})
export class UpsertTournamentComponent implements OnInit {

  @Input() public key: string;

  shouldUpdateParent= false;

  ionicForm: FormGroup;
  isSubmitted = false;
  sucessMessage: string;

  tournament: Tournament;

  constructor(private modalCtr: ModalController, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.shouldUpdateParent = false;

    if (this.key === '') {
      console.log('Add new request');
      this.ionicForm = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.minLength(2)]],
        City: ['', [Validators.required]]
      });
    }
    else {
      console.log('update request');
    }
  }

  async close() {
    const closeModal = ["Modal Closed", this.shouldUpdateParent];
    await this.modalCtr.dismiss(closeModal);
  }

  UpsertTournament(){

  }

  get errorControl() {
    // console.log(this.ionicForm.controls);
    return this.ionicForm.controls;
  }

}
