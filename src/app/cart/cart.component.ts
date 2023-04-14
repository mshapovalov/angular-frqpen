import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  items = this.cartServide.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartServide: CartService,
    private formBuilder: FormBuilder,
    ) {}

  onSubmit():void{
    this.items = this.cartServide.clearCart();
    console.warn('Your oder has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
