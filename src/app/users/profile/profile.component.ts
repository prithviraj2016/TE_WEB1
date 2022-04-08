import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/account/account-service/account.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../assets/css/profile.css']
})
export class ProfileComponent implements OnInit {
show:boolean = false;
userId:any;
userDetails:any;
title = 'appBootstrap';
closeResult: string = '';
userprofileupdateForm:FormGroup=new FormGroup({});

  constructor(private activatedRoute:ActivatedRoute,
    private _Service:AccountService,
    private formBuilder:FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data['id']);
      this.userId=data['id'];
    });
    if(this.userId!==''){
     
      console.log(this.userId)
      this._Service.userProfile(this.userId).subscribe( data=>{
       
console.log(data);
        //this.empDetails=data;
  //  await   Object.assign(this.empDetails, data);
   this.userDetails= data;
      console.log(this.userDetails);
    this.userprofileupdateForm=this.formBuilder.group({


      'username': new FormControl(this.userDetails.username),
      'name': new FormControl(this.userDetails.name),
      'email': new FormControl(this.userDetails.email),
      
        })
      });
// console.log(FormControl);
      
    }
  }
  
updateUserProfile(){
 this._Service.updateProfile(this.userId, this.userprofileupdateForm.value).subscribe(data=>{
 
  console.log(data);
   alert("User Profile Updated Successfully");
 }, err=>{
   alert('User Profile Not Updated');
 });
}
  
  toggle() {
    this.show = !this.show;

}
open(content:any) {

  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    this.closeResult = `Closed with: ${result}`;

  }, (reason) => {

    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

  });

} 
private getDismissReason(reason: any): string {

  if (reason === ModalDismissReasons.ESC) {

    return 'by pressing ESC';

  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

    return 'by clicking on a backdrop';

  } else {

    return  `with: ${reason}`;

  }

}
}
