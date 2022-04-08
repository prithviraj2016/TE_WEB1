import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/shared/services/contactus.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  [x: string]: any;
  
  contactForm:any;
  submitted=false;

  constructor(private frmbuilder: FormBuilder, 
    private router:Router, 
    private service: ContactusService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.contactForm =this.frmbuilder.group({
      'fname':new FormControl('', [Validators.required]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'contact':new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      'message':new FormControl('',[Validators.required,Validators.minLength(10)])

    

    })
   }
  
   get f(){return this.contactForm.controls;}
  
  
  submit(){
  
    debugger
      if(this.contactForm.value.fname=="" || this.contactForm.value.fname==undefined ){
     swal.fire("Please enter full name. ");
     return;
      }
      if( this.contactForm.value.email==="" ||  this.contactForm.value.email==undefined){
        swal.fire("Please enter email");
        return;
      };
      console.log(this.contactForm.value.contact)
  
      if( this.contactForm.value.contact.length!= 10 ){
        swal.fire("Please enter atleast 10 numbers in contact no..");
        return;
      };
      if( this.contactForm.value.contact.message==="" ||  this.contactForm.value.email==undefined){
        swal.fire("Please enter atleast 10 characters in message.");
        return;
      };
  
      this.service.create(this.contactForm.value).subscribe((res)=>{
     if(res)
        swal.fire(res+"")
      });
  
  };
    localError() {
      throw Error("The app component has thrown an error!");
    };
    failingRequest() {
      this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
    };

    successfulRequest() {
      this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
    };
  }




