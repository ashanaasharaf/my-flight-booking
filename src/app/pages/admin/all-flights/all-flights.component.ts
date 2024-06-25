import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent implements OnInit{

  flightList:any[]=[];

  constructor(private api:MasterService){}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(){
    this.api.getAllFlights().subscribe((res:any)=>{
      this.flightList=res.data
    })
  }

  deleteFlights(id:any){
    console.log(id)
    const obj1=[];
    const obj={
      "flightId":id
    }
    obj1.push(obj)
    this.api.deleteFlight(obj1).subscribe((res:any)=>{
      if(res.result){
        this.flightList.splice(id,1)
        alert("Flight Deleted Successfully")
      }else{
        alert(res.message)
      }
    })
  }
}
