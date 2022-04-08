import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  showMe:boolean=false;

  newEventForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, 
    private _router: Router, 
    private http:HttpClient) { }

  ngOnInit(): void {
    this.newEventForm=this.formBuilder.group({
      'eventname':new FormControl('', [Validators.required]),
      'description':new FormControl('', [Validators.required]),
      'customurl':new FormControl('', [Validators.required]),
      'location':new FormControl('',[Validators.required] ),
      'sdate':new FormControl('',[Validators.required]),
      'edate':new FormControl('',[Validators.required]),
      'image':new FormControl('', [Validators.required])
    });
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.newEventForm.controls[controlName].hasError(errorName);
    }
    toogleTag(){
      this.showMe=!this.showMe;
  
  
      
    }
    createEvent(){
      console.log(this.newEventForm.value);
    }

  } 


