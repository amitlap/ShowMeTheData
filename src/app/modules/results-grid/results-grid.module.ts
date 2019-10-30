// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// This Module's Components
import { ResultsGridComponent} from "./results-grid.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ResultsGridComponent,
  ],
  exports: [
    ResultsGridComponent,
  ],
})
export class ResultsGridModule {}
