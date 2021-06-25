import { Injectable } from '@angular/core';
import { FoodItem} from "../model/food-item"
@Injectable({
  providedIn: 'root'
})
export class FootitemsService {
  foodItemsList:FoodItem[]  = [
    {
      id: 0,
      name:"Jelly Bread",
      price: 49,
      img:"../../assets/imports/jellybread.png",
    },
    {
      id: 1,
      name:"Fruits",
      price:49,
      img:"../../assets/imports/fruits.png",
    },
    {
      id: 2,
      name:"Strawberry Ots",
      price:99,
      img:"../../assets/imports/ots.png",
    },
    {
      id: 3,
      name:"Egg Omlet",
      price:65,
      img:"../../assets/imports/omlet.png",
    },
    {
      id: 4,
      name:"Hot Tea",
      price:25,
      img:"../../assets/imports/hotTea.png",
    }]

  constructor() { }

  getItemList(){
    return this.foodItemsList;
  }
}
