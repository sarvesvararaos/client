import { HotelService } from "./../Service/hotel.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.css"]
})
export class HotelListComponent implements OnInit {
  products;
  Hotels: any;
  constructor(private hotels: HotelService) {}

  ngOnInit() {
    this.getHotelsList();
  }

  getHotelsList() {
    this.hotels.getHotels().subscribe((data: []) => {
      console.log(data);
      this.Hotels = data; //Assign the data into Singapore Hotels List
    });
  }
}
