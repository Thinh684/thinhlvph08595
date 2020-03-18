import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product: Product={
  id: 1,
  name:'Item 1',
  price:  123,
  desc: 'Noi dung san pham ',
  img: 'https://kenh14cdn.com/2019/8/10/photo-1-1565418850012849840930.jpeg',
  status: true
  
 }
 changeStatus(){
   this.product.status=false;
 }
 changeTitle(e){
  // this.product.name=e.target.value;
}


}