import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'Pet Shelter';
pets: any;
itara;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.itara = true;
    }, 2000);
  }

  ngOnInit() {
    this.getListofpets();
  }

  getListofpets() {
    this.http.getListofpets().subscribe(data => {
     console.log(data);
     this.pets = data;
    }); }


}
