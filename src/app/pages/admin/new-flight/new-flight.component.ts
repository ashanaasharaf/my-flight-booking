import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit{

  airportList:any[]=[];
  flightObj:any={
    "flightId":0,
    "flightNumber":"",
    "departureAirportId":0,
    "departureTime":"",
    "arrivalAirportId":0,
    "arrivalTime":"",
    "price":0,
    "totalSeats":0,
    "flightVendorId":0,
    "travelDate":""
  }

  constructor(private api:MasterService){
    const localData=localStorage.getItem("flightUser");
    if(localData !=null){
      this.flightObj.flightVendorId=JSON.parse(localData).vendorId;
    }
  }

  ngOnInit(): void {
    this.getAirportList();
  }

  getAirportList(){
    this.api.getAllAirport().subscribe((res:any)=>{
      this.airportList=res.data;
    })
  }

  loadFlight(){
    const obj=[];
    obj.push(this.flightObj)
    this.api.createFlight(obj).subscribe((res:any)=>{
      if(res.result){
        alert("Flight Created Successfully")
      }else{
        alert(res.message)
      }
    })
  }
}
