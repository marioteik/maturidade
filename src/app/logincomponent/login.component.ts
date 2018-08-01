import { Component, OnInit } from '@angular/core';

import {
  NgModel,
  FormGroup,
  FormControl,
  Validator,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  // moduleId: module.id.toString(),
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  userInvalidMsg = 'Usuário inválido';
  passInvalidMsg = 'Password incorreto';

  hintPassVisible = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onFieldHandler(field: FormControl): boolean {
    if (field.valid && field.touched) {
      this.hintPassVisible = false;
      return false;
    } else if (field.invalid && field.touched) {
      this.hintPassVisible = true;
      return true;
    }
  }
  onFocusFieldHandler(): void {
    this.hintPassVisible = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],
      userPass: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ]
    });

    const url_1 = 'https://login.microsoftonline.com/cf36141c-ddd7-45a7-b073-111f66d0b30c/saml2?sso_reload=true';
    const url_2 = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';
    const url_3 = 'https://login.microsoftonline.com/login.srf';
  }

  onSubmitFormHandler(event: Event): void {
    console.log(<HTMLFormElement>event.target[0]['value']);
    console.log(<HTMLFormElement>event.target[1]['value']);
  }

}
