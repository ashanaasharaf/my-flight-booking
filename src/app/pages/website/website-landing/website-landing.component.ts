import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-website-landing',
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent implements OnInit {

 
loggedUserData:any;

registerObj:any={
  "name":"",
  "email":"",
  "mobileNo":"",
  "password":"",
  "city":"",
  "address":""
};

loginObj:any={
  "email":"",
  "password":""
};

constructor(private api:MasterService){
  const isLocal=localStorage.getItem("flightCustomer");
  if(isLocal != null){
    this.loggedUserData=JSON.parse(isLocal)
  }
}

  ngOnInit(): void {
    
  }

  openRegister(){
    const model=document.getElementById('registerModal');
    if(model != null){
    model.style.display="block";
    }
  }

  closeRegister(){
    const model=document.getElementById('registerModal');
    if(model !=null){
      model.style.display="none";
    }
  }

  openLogin(){
    const model=document.getElementById('loginModal');
    if(model != null){
    model.style.display="block";
    }
  }

  closeLogin(){
    const model=document.getElementById('loginModal');
    if(model !=null){
      model.style.display="none";
    }
  }

  logOff(){
    localStorage.removeItem("flightCustomer");
    this.loggedUserData=undefined;
  }

  onSave(){
    this.api.register(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Register Success");
        this.closeRegister();
      }else{
        alert(res.message);
      }
    })
  }

  onLogin(){
    this.api.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login success");
        this.loggedUserData=res.data;
        localStorage.setItem('flightCustomer',JSON.stringify(res.data))
        this.closeLogin();
      }else{
        alert(res.message);
      }
    })
  }
}
