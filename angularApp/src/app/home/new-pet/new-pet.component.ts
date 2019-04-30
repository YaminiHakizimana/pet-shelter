import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet: any ;
  message: any;
  errors: string;
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router)  {

  }

  ngOnInit() {
    this.newPet = { name: '', type: '', description: '', skill_one: '' };
  }

  Createpet(newpet) {
    this.http.Createpet(this.newPet).subscribe((data) => {
          if ( data['errmsg']) {
            console.log("got errs")
            this.errors = 'This name is already taken';
          } else if
            ( data['message']) {
            this.errors = 'You cant submit empty page';
          } else {
              return this.router.navigate(['/pet']);
          }
        }, );
      }
  }



