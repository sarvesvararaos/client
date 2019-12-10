import { HotelService } from "./../Service/hotel.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-by-name",
  templateUrl: "./search-by-name.component.html",
  styleUrls: ["./search-by-name.component.css"]
})
export class SearchByNameComponent implements OnInit {
  listData;
  constructor(private searchData: HotelService) {}

  ngOnInit() {
    this.listData;
  }

  SearchByName(name: String) {
    this.searchData.getSearchByName(name).subscribe((data: []) => {
      console.log(data);
      this.listData = data; //Assign the data into Search By Name
    });
  }
}
