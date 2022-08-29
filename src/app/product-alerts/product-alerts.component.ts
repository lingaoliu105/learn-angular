import { Component, OnInit } from '@angular/core';

//import input from angular core
import { Input } from '@angular/core';

import { Product } from '../products';

import { Output, EventEmitter } from '@angular/core';

// component decorator: the following class is a component
// it also exports the class
@Component({
  // metadata about this component
  selector: 'app-product-alerts',
  // selector identifies the component
  // convention: begin with prefix app-componentname
  templateUrl: './product-alerts.component.html',
  //refering to the html
  styleUrls: ['./product-alerts.component.css'],
  //refering to the css
})
export class ProductAlertsComponent implements OnInit {
  //input decorator indicates that the property value is passed from parent component
  @Input() product!: Product;
  //question: what does this !: mean?
  //in another demo snippet written as:
  //@Input() product : Product | undefined

  constructor() {}

  ngOnInit(): void {}

  @Output() notify = new EventEmitter();
  //question: : or = here? demo used =
  //question: need to call OUtput() first? instead of only Output?
}
