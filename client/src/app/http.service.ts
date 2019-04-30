import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  // show all barbers
  getListofpets() {
  return this.http.get('/pets');
  }

  // creating a barber
  // CreateBarber(newBarber) {
  //   return this.http.post('/newbarber', newBarber);
  // }
  Createpet(newpet) {
    return this.http.post('/newpet', newpet);
  }


  // show one baber
  getOnepet(id) {
    return this.http.get('/pet/' + id);
  }

  // editing a restaurent information
  Editpet(id, updatepet) {
    return this.http.put('/pet/' + id, updatepet);
  }

  // remove a restaurant
  Deletepet(id) {
    return this.http.delete('pet/remove/' + id);
  }

  // creating a review
  CreateAlike(id, newReview) {
    return this.http.patch('/pet/like/' + id, newReview);
  }

  // likes counts Incrementantion
  Likes(id, like) {
    return this.http.put('/pet/like/' + id, like);
  }

  // // likes counts decremantation
  // Dislike(id, dislike) {
  //   return this.http.put('/review/dislike/' + id, dislike);
  // }
}
