import { FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';
import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
// import { BsModalService } from 'ngx-foundation/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AccountService } from '../account-service/account.service';
// import { BsModalService } from 'ngx-foundation/modal/bs-modal.service';



//import swal from "sweetalert2"


declare var $: any;
@Component({
    templateUrl : 'sign-in.component.html',
    styleUrls : [ '../../../assets/css/style.css', '../../../assets/css/home.css'],
    encapsulation : ViewEncapsulation.None

})
export class SignInComponent implements OnInit {
  // modalRef: BsModalRef;
  signinForm: any;
  forgetPasswordForm: any;
  rememberMe=false;
  submitted = false;
  submittedF=false;
  massage = null;
  username=null;
  password=null;


    constructor(
        private formbulider: FormBuilder,
      //  private modalService: BsModalService,
        private _service:AccountService,
        private _router:Router,
        private ngxUiLoaderService: NgxUiLoaderService
        ) { }
        ngOnInit() {
         // this.loadScripts();
            this.signinForm = this.formbulider.group({
                'UserName':new FormControl ('', [Validators.required]),
                // 'RememberMe': [false, [Validators.required]],
                'Password':new FormControl ('', [Validators.required])

              });
              this.forgetPasswordForm = this.formbulider.group({
                'email': new FormControl ('', [Validators.required, Validators.email]),

              });


          //let loggedUser = localStorage.getItem('loggeduser-remember');

          // if(loggedUser !='' && loggedUser !=null)
          // {
          //   const lp: any = JSON.parse(loggedUser);
          //   this.signinForm.patchValue({
          //     UserName: lp.UserName,
          //     RememberMe:lp.RememberMe,
          //     Password:lp.Password});

          // }


          // Signup/Signin Background image



            var images = ['main-banner-two.jpg', 'main-banner-first.jpg'];


            // $('<img class="fade-in" src="assets/img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#background-img').load(function(){
            //     $(this).remove();
            //     $('#background-img').css({'background-image': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ')'});
            //     $("#background-overlay").addClass("overlay-timout");
            // });


        }


        get f() { return this.signinForm.controls; }
        get fp() { return this.forgetPasswordForm.controls; }

        onSigninFormSubmit() {

          var loggedUser = localStorage.getItem('loggeduser');
          if(loggedUser !="" || loggedUser !=null)
          {
            localStorage.removeItem('loggeduser');
          }

          this._service.LoginUser(this.signinForm.value).subscribe(data =>{
            if(data){
              var user = JSON.stringify(data);
              localStorage.setItem("loggeduser",user);
              //this._router.navigateByUrl('/dashboard');
              this._router.navigate(['/dashboard']);
            }else((err: any)=>err)
            // alert ("Something Went Wrong");
          })

        }


       checkValue(){
       }

       onForgetPasswordFormSubmit(){

       }

      openModal(template: TemplateRef<any>) {
      //   this.modalRef = this.modalService.show(template, {class: 'tiny', ignoreBackdropClick: true,
      // });
      }

}


