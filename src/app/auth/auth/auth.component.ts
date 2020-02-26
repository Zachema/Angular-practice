import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form:FormGroup = new FormGroup({
    userName:new FormControl(''),
    userEmail:new FormControl('')
  })

  constructor(private ls:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    //TODO replace key value with namespace
    this.ls.set('name',this.form.value['userName'])
    this.ls.set('email',this.form.value['userEmail'])
    this.router.navigateByUrl('main');
  }
}
