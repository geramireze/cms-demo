import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { FormGroup } from '@angular/forms';
import { FormLogin } from '@commons/constants/login';
import { DynamicFormComponent } from '@shared/components/forms/dynamic-form/dynamic-form.component';
import { CreateFormService } from '@commons/helperts/create-form/create-form.service';

@Component({
  selector: 'app-participa',
  standalone: true,
  imports: [LayoutComponent, DynamicFormComponent],
  templateUrl: './participa.component.html',
  styleUrl: './participa.component.scss'
})
export class ParticipaComponent implements OnInit {

  public loginForm!: FormGroup;
  public formLogin = [...FormLogin];

  constructor(private form: CreateFormService) {

  }

  login(): void {
    console.log("ajuste link")
  }

  ngOnInit(): void {
    this.loginForm = this.form.createFormGroup(this.loginForm, this.formLogin);
  }

}
