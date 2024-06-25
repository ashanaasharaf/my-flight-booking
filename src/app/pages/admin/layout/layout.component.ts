import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  loggedUserData:any;
  constructor(private router:Router){
    const localData=localStorage.getItem("flightUser");
    if(localData !=null){
      this.loggedUserData=JSON.parse(localData)
    }
  }

  ngOnInit(): void {
    
  }

  logOff(){
    localStorage.removeItem("flightUser");
    this.router.navigateByUrl('/login');
  }
}
