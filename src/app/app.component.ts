import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  formValue = '';
  isBtnDisabled = false;

  checkForm() {
    if (this.formValue === 'submitted') {
      this.isBtnDisabled = true;
    }
  }
  
}
