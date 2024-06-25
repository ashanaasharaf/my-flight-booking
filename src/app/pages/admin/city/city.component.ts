import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{

  cityList:any[]=[];

  constructor(private api:MasterService){}


  ngOnInit(): void {
    this.getCityList();
  }

  getCityList(){
    this.api.getAllCity().subscribe((res:any)=>{
      this.cityList=res.data
    })
  }

  bulkUpdateCity(){
    this.api.updateBulkCity(this.cityList).subscribe((res:any)=>{
      if(res.result){
        console.log(this.cityList,"kkk")
        alert("Bulk Update Success")
      }
      else{
        alert(res.message)
      }
    })
  }

  addNew(){
    const obj={
      cityId:0,
      cityName:''
    }
    this.cityList.unshift(obj)
  }

}
