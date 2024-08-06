import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  registrateForm : FormGroup;

  constructor( private formBuilder : FormBuilder, private router : Router, private serviceRegistro : RegistroService){
    this.registrateForm =  this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clave :['', [Validators.required]],
    });
  }


  ngOnInit(): void {
    if(this.registrateForm.invalid){
      this.registrateForm.markAllAsTouched();
    }
  }
  registrarse(): void {
    if(this.registrateForm.valid){
      this.serviceRegistro.registrarse(this.registrateForm.value);
    }
    this.router.navigate(['auth/login']);
  }
  login(): void {
    this.router.navigate(['auth/login']);
  }
}
