import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {
@Input() item:any
@Output() total: any;
  constructor(private cart: UserService) { }

  ngOnInit(): void {
  }
  addToCart(item:any){
    this.cart.addToCart(item);
  }
  
}
