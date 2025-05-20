import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormNewTaskComponent } from '../components/form-new-task/form-new-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private modalController: ModalController
  ) { }

  tasks: Array<any> = [
    {
      id: 1,
      title: "Entregar o trabalho",
      subtitle: "até o dia 22/05",
      description: "uma descrição completa...",
      image: "https://faculdadeimes.org.br/wp-content/uploads/2023/06/TCC.png"
    },
    {
      id: 2,
      title: "Realizar a prova",
      subtitle: "no dia 23/05",
      description: "uma descrição completa...",
      image: ""
    },
    {
      id: 3,
      title: "Combinar com os colegas",
      subtitle: "até o dia 25/05",
      description: "uma descrição completa...",
      image: ""
    }
  ]

  async addNewTask() {
    const modal = await this.modalController.create({
      component: FormNewTaskComponent
    })
    await modal.present()
    const newTask = await modal.onDidDismiss()
    if (newTask.data.title != '' &&
      newTask.data.subtitle != '') {
      this.tasks.push(newTask.data)
    }

  }


  deleteTask(id: number) {
    let index = this.tasks.findIndex(t => t.id == id)
    this.tasks.splice(index, 1);
  }

  async editTask(task: any) {
    const modal = await this.modalController.create({
      component: FormNewTaskComponent,
      componentProps: {
        param: task
      }
    })
    await modal.present()
    const editTask = await modal.onDidDismiss()

  }

}

