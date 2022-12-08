import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { UseService } from '../use.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {

  constructor(private use:UseService) {this.datafromuse()}
  datafromuse=()=>{
    this.use.fetchusers().subscribe((Response=>{this.users=Response}))
  }

  users:any=[]

  ngOnInit(): void {
  }

}
