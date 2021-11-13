import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AddItemAction } from '../cart/actions/cart.actions';
import { AppState } from '../cart/models/app-state.model';
import { CartItem } from '../cart/models/cart-item.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  restaurantDetails;
  cartItems = [];
  FoodID: number = 0;
  constructor(
    private _router: Router,
    private store: Store<AppState>,
    private _toastr: ToastrService
  ) {
    // console.log(this._router.getCurrentNavigation().extras)
    if (this._router.getCurrentNavigation().extras.state !== null && this._router.getCurrentNavigation().extras.state !== undefined) {
      console.log(this._router.getCurrentNavigation().extras.state);
      this.restaurantDetails = this._router.getCurrentNavigation().extras.state.restuarantDetails;
      console.log(this.restaurantDetails);
      // this.productID = this.router.getCurrentNavigation().extras.state.productID;
    } else {
      console.log('test')
      this._router.navigateByUrl('/home')
    }
  }

  ngOnInit(): void {
    this.store.subscribe(x => {
      this.cartItems = x.cart
      console.log(this.cartItems);
    })
    this.FoodID = this.cartItems.length
    console.log('current ID',this.FoodID)
  }
  addItemToCart(data) {
    // let length = this.cartItems.length
    this.FoodID = this.FoodID + 1;
    console.log('AddEd',this.FoodID)
    this.store.dispatch(new AddItemAction({
      foodName: data.foodName,
      foodPrice: data.foodPrice,
      foodImage: data.foodImage,
      foodID: this.FoodID
    }))
    this._toastr.success('Successfully added to cart')
  }
}
