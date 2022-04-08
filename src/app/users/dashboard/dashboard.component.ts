import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var introJs: any;


@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit {
  //introJS = introJs(); // assigning it to variable

  constructor() {

    //console.log(this.introJS)

    // const IntroJs = require('../../../../../../node_modules/intro.js/intro.js');
    // let guide = IntroJs.introJs();

   }

   ngOnInit() {

   }
helpbutton(){
  var intro1 = introJs();
      intro1.setOptions({
        steps: [
          {
            intro: "Hello world!"
          },
          {
            //element: document.querySelector('#step1'),
            intro: "This is a tooltip."
          },
          {
           // element: document.querySelectorAll('#step2')[0],
            intro: "Ok, wasn't that fun?",
            position: 'right'
          },
          {
            //element: '#step3',
            intro: 'More features, more fun.',
            position: 'left'
          },
          {
            ///element: '#step4',
            intro: "Another step.",
            position: 'bottom'
          },
          {
           // element: '#step5',
            intro: 'Get it, use it.'
          }
        ]
      });
      intro1.start();
    //introJs()// Start introjs tour

    }
}



