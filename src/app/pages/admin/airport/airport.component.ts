import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent implements OnInit{

  airportList:any[]=[];
  cityList:any[]=[];
  cityVal:any;
  dropVal:any;
  selected:boolean=false;

constructor(private api:MasterService){}

  ngOnInit(): void {
    this.getAirportList();
  }


  getAirportList(){
   this.api.getAllAirport().subscribe((res:any)=>{
      this.airportList=res.data
      this.getCityList();
    })
  }

  getCityList(){
    this.api.getAllCity().subscribe((res:any)=>{
      this.cityList=res.data;
    })
  }

  bulkUpdateVendor(){
    console.log(this.airportList,"hello")
    this.api.saveAirport(this.airportList).subscribe((res:any)=>{
      if(res.result){
        alert("Bulk Update Success")
      }else{
        alert(res.message)
      }
    })
  }

  // onChange(event:any){
  //   this.cityVal=Number(event);
  //   console.log(this.cityVal,"nnn")
  // }
  
  addNew(){
    const obj={
      airportCode:'',
      cityName:'',
      cityId:0,
      airportId:0,
      airportName:''
    }
    this.airportList.unshift(obj);
    if(this.airportList['cityId'] === 0){
    this.selected=true;
    }
  }

  

}
