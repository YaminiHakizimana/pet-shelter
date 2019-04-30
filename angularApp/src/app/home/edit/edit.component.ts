import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
pet: any;
id: any;
errors: string;
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.pet = { name: '' , type: '', description: '', skill_one: '' };
    this.getOnepet(this.id);
  }

  getOnepet(id) {
    console.log(id);
    this.http.getOnepet(id).subscribe(jojo => {
      console.log('Got our Data', jojo);
      this.pet = jojo; });

    }

    refresh(): void {
      // window.location.reload();
      this.getOnepet(this.id);
  }

  Editpet() {
    this.http.Editpet(this.id, this.pet).subscribe(data => {
          if ( data['errmsg']) {
            console.log("got errs")
            this.errors = 'This name is already taken';
          } else if
            ( data['message']) {
            this.errors = 'You cant submit empty page';
          } else {
            this.router.navigate(['/']);
          }
      });
  }
}
