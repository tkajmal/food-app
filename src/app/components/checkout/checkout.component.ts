import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DelItemAction, RemoveAllItemAction } from '../cart/actions/cart.actions';
import { AppState } from '../cart/models/app-state.model';
import { CartItem } from '../cart/models/cart-item.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  UserID;
  cartItem$: Observable<CartItem[]>
  cartItems = [
  ];
  quantity = 0;
  totalPrice: number = 0;
  productID;
  constructor(private store: Store<AppState>,
    private _toastr : ToastrService,
    private _router : Router) {
    this.cartItem$ = this.store.select('cart')
  }

  ngOnInit(): void {
    this.store.subscribe(x => {
      this.cartItems = x.cart
      console.log(this.cartItems);
      this.totalPrice = 0
      this.cartItems.map(
        item => {
          this.totalPrice = this.totalPrice + item.foodPrice
        }
      )
    })
    // this.cartItem$ =this.store.select( store => store.cart)
    // console.log(this.cartItem$)
    // this.cartItems.map(item => {
    //   let price = item.productPrice;
    //   let quantity = 1;
    //   let total = price * quantity;
    //   this.totalPrice = this.totalPrice + total
    // })
  }
  deleteItemFromCart(i) {
    console.log(i)
    this.store.dispatch(new DelItemAction(i))
    this._toastr.success("Item deleted successfully")
  }
  clearCart() {
    this.store.dispatch(new RemoveAllItemAction('Delete'))
    this._toastr.success("Order placed successfully")
    this._router.navigateByUrl('/home');
  }
}
