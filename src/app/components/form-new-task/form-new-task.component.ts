import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.scss'],
})
export class FormNewTaskComponent  implements OnInit {

  task = {
    id: Math.floor(Math.random()*100),
    title: '',
    subtitle: '',
    description: '',
    image: ''
  }

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss(this.task)
  }

}
