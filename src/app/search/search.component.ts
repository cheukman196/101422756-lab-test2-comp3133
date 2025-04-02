import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchYear: string = ""

  constructor(private dataService: DataService){}

  search(){
    this.dataService.search(this.searchYear)
  }

}
