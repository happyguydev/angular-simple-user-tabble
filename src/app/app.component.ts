import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  users: User[] = [];

  onSubmit() {
    const fN = this.profileForm.value.firstName;
    const lN = this.profileForm.value.lastName;
    const exist = this.users.some(
      (el) => el.firstName === fN && el.lastName === lN
    );
    if (exist) {
      alert('This user already exist!');
      return;
    }
    this.users.push({
      firstName: fN,
      lastName: lN,
    });
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
    });
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
