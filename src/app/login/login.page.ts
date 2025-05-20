import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class LoginPage {
  email: string = '';
  senha: string = '';
  emailValid: boolean = false;
  senhaValid: boolean = false;

  validateForm() {
    this.emailValid = this.validateEmail(this.email);
    this.senhaValid = this.senha.length > 3;
  }

  validateEmail(email: string): boolean {
    return email.includes('@');
  }

  isFormValid(): boolean {
    return this.emailValid && this.senhaValid;
  }
}
