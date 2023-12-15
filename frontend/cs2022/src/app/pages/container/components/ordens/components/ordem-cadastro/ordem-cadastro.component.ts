import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-cadastro',
  templateUrl: './ordem-cadastro.component.html',
  styleUrls: ['./ordem-cadastro.component.scss']
})
export class OrdemCadastroComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit() {
  }

}
