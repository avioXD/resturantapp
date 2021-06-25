import { Component, OnInit,OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/model/bill';
import { FoodItem } from 'src/app/model/food-item';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class CartComponent implements OnInit,OnChanges {
items!:FoodItem[];
tips:number = 0;
generateBill :Boolean =false;
nowBill: Bill={
  foodtotal: 0,
    total: 0,
    tips: 0,
    tax: 0,
};
  constructor(private cart: UserService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.items=this.cart.getCartList()
    this.setTips();
    this.nowBill = this.cart.getBill();
  } 
  ngOnChanges(){
    this.setTips();
    this.nowBill = this.cart.getBill();
  }
  removeCart(index:any){
      this.cart.renoveFormCart(index)
  }
  processToPay(){
      this.toastr.success(`Payment Done of $${ this.nowBill.total.toFixed(2)} Visit Again`);
      setTimeout(() => {
        this.cart.resetCart();
      }, 1000);
      
  }
  setTips(){
    this.cart.setTips(this.tips);
  }
  
   
}
