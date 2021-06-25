import { Component, Input, OnInit } from '@angular/core';
import { FootitemsService } from 'src/app/services/footitems.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() total:any;
  
  foods:any
  constructor(private list: FootitemsService) { }

  ngOnInit(): void {
    this.foods= this.list.getItemList()
  }

}
