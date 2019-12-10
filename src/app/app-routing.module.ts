import { SearchByNameComponent } from "./search-by-name/search-by-name.component";
import { HotelListComponent } from "./hotel-list/hotel-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "hotel-list", component: HotelListComponent },
  { path: "search-by-name", component: SearchByNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
