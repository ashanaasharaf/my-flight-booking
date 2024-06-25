import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private api:MasterService,private router:Router){}

  loginObj:any={
    "email":"indogo@dummy.com",
    "password":"112211"
  }

  ngOnInit(): void {
    
  }

  login(){
    this.api.loginVal(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem("flightUser",JSON.stringify(res.data))
        this.router.navigateByUrl('/city')
      }else{
        alert(res.message)
      }
    })
  }

}
