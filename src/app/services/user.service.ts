import { Injectable } from '@angular/core';
import { FoodItem} from "../model/food-item"
import { Bill } from '../model/bill';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  cartList :FoodItem[] = [];
  bill:Bill ={
    foodtotal: 0,
    total: 0,
    tips: 0,
    tax: 0,
  };
  constructor() { }


  addToCart(item:FoodItem){
    this.cartList.push(item);
    this.bill.foodtotal = 0;
    this.setBill();
  }
  renoveFormCart(index:number){
     this.cartList.splice( index, 1);
     this.setBill();
  }
  getCartList(){
    return this.cartList;
  }
  getBill(){
      return this.bill;
  }
  setTips(tips:number){
    this.bill.tips = this.bill.foodtotal*(tips/100);
    this.setBill();
  }
  setBill(){
    this.bill.foodtotal = 0;
    this.cartList.forEach((item)=>{
      this.bill.foodtotal = this.bill.foodtotal+item.price;
    })
    this.bill.total = this.bill.foodtotal+ this.bill.tips;
    this.bill.tax = this.bill.total*0.18;
    this.bill.total = this.bill.tax+this.bill.total;
  }
  resetCart(){
   while(this.cartList.length!=0){
     this.cartList.pop();
   }
   this.bill.foodtotal=0;
   this.bill.tax=0;
   this.bill.tips =0;
   this.bill.total =0;
  }


}
