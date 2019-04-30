import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 pet: any;
like: number;
 title: 'Peter Shelter';
 id: any;
 itara;
  constructor(private http: HttpService,
              private route: ActivatedRoute, private router: Router) {
                setTimeout(() => {
                  this.itara = true;
                }, 2000);
               }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.getOnepet(this.id);

    this.pet = { name: "" , type: "", description: '', skill_one: '' };
  }
  getOnepet(id) {
    this.http.getOnepet(id).subscribe(jojo => {
      console.log('Got our Data', jojo);
      this.pet = jojo; });
    }
    Deletepet(id) {
      this.http.Deletepet(id).subscribe(data => {
       this.router.navigate(['/']);
      });
    }
    Likes(id) {
        this.http.Likes(this.id, this.like).subscribe(data => {
          // this.router.navigate(['/pets/' + this.id]);
          this.getOnepet(this.id);
        });

    }


}
