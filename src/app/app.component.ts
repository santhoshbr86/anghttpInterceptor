import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}

  method1():void{
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      res => {console.log("successfully completed",res)});
  }
  method2(): void {
    this.http.get("https://jsonplaceholder.typicode.com/user12").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }
}
