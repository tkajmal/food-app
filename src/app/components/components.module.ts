import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ToastrModule } from 'ngx-toastr';
import { CartReducer } from './cart/reducers/cart.reducer';
import { StoreModule } from '@ngrx/store';
import { FoodsComponent } from './foods/foods.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
// import { SignupComponent } from 'app/examples/signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        StoreModule.forRoot({
            cart: CartReducer
        }),
        ToastrModule.forRoot(),
    ],
    declarations: [
        ComponentsComponent,
        CheckoutComponent,
        FoodsComponent,
        SignupComponent,
        // SignupComponent
    
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
