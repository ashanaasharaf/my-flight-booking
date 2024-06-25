import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  airport:any[]=[];
  fromAirport:number=0;
  toAirport:number=0;
  travelDate:string='';
  flightList:any[]=[];
  passengerObj:any={
    "travelName":"string",
    "contactNo":"string",
    "aadharNo":"string",
    "seatNo":0
  };
  bookingObj:any={
    "flightId":0,
    "customerId":0,
    "bookingDate":new Date(),
    "totalAmount":0,
    "flightBookingTravelers":[]
  }
  passengerList:any[]=[];

  constructor(private api:MasterService){
    const isLocal=localStorage.getItem("flightCustomer");
    if(isLocal != null){
      this.bookingObj.customerId=JSON.parse(isLocal).userId;
    }
  }


  ngOnInit(): void {
    this.loadAirport();
  }

  addPassenger(){
    const obj=JSON.stringify(this.passengerObj);
    const newObj=JSON.parse(obj);
    this.passengerList.push(newObj);
  }


  loadAirport(){
    this.api.getAllAirport().subscribe((res:any)=>{
      this.airport=res.data
    })
  }

  searchFlight(){
    this.api.getSearchFlights(this.fromAirport,this.toAirport,this.travelDate).subscribe((res:any)=>{
      this.flightList=res.data
      console.log(this.flightList,"list")
    })
  }

  bookTicket(flightNumber:number){
    this.bookingObj.flightId=flightNumber;
    const model=document.getElementById('bookModal');
    if(model != null){
      model.style.display="block";
    }
  }

  closeModel(){
    const model=document.getElementById('bookModal');
    if(model != null){
      model.style.display="none";
    }
  }

  onBookTicket(){
    this.bookingObj.flightBookingTravelers=this.passengerList;
    this.api.bookTicket(this.bookingObj).subscribe((res:any)=>{
      if(res.result){
        alert("Ticket Booked Success");
        this.closeModel();
      }else{
        alert(res.message);
      }
    })
  }

}
