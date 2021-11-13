import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  test : Date = new Date();
    focus;
    focus1;
    constructor(private _router:Router) { }

    ngOnInit() {}
    navigate(){
       
        this._router.navigateByUrl('/home');
    }

}
