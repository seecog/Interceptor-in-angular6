import { Component, OnInit, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
private btn_stt : boolean = true;  
private edit_id : string;
private product : any={};
private products : any[];
constructor(private http : Http,private httpClient : HttpClient){}

ngOnInit(){
  this.getProducts();
}

getProducts(){
  
  this.httpClient.get('https://reqres.in/api/users?page=2').subscribe(
(res)=>{
console.log('Final ',res)
},
(err)=>{
console.log('The error is ',err)
})
}

editProduct(x){
  this.edit_id = x.key;
  this.btn_stt = false;
  this.product = x.data;
}

deleteProduct(key){
  if(confirm("Want to delete ?")){
  this.http.delete('https://hrms-eb1fa.firebaseio.com/products/'+key+'.json').subscribe(

    (res)=>{
    console.log('Product deleted')
    this.getProducts();
    },
    (err)=>{
    console.log('The error is ',err);
    })
  }
}

updateProduct(){
  this.http.put('https://hrms-eb1fa.firebaseio.com/products/'+this.edit_id+'.json',this.product).subscribe(

    (res)=>{
    console.log('Product updated')
    this.product={};
    this.btn_stt=true;
    this.getProducts();
    },
    (err)=>{
    console.log('The error is ',err);
    })

}

saveProduct(){
this.http.post('https://hrms-eb1fa.firebaseio.com/products.json',this.product).subscribe(

(res)=>{
console.log('Product saved')
this.product={};
this.getProducts();
},
(err)=>{
console.log('The error is ',err);
},
()=>{

}

)  
}

}

