import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  //ActivatedRoute is specific to each component that the Angular router loads. it contains info about the route and route's parameters
  //question: assignment is done in the arg parenthesis?

  ngOnInit(): void {
    //extract productId from route parameters
    const routeParams = this.route.snapshot.paramMap;
    //route.snapshot to access the params. it's ActivatedRouteSnapshot class
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find the product that correspond with th id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    //js note: when there's only 1 arg, () around product is optional
    //the anonymous function is passed in as a selector

    //now we have assigned the corresponding product to our class variable
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  product: Product | undefined;
}
