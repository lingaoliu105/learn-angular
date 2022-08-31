import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  shippingCosts!:Observable<{type:string,price:number}[]>;
  //ts note:  ! is non-null declaration

}
