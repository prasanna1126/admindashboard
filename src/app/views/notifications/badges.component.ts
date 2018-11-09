import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestmonialsService } from "../../services/TestmonialsService";
@Component({
  templateUrl: 'badges.component.html'
})
export class BadgesComponent {

  categorysData: any;
  editData: any = []
  constructor(private router: Router,private service: TestmonialsService) { }
  backToDashBoard() {
    this.router.navigate(['reports'])
  }
  ngOnInit() {
  this.service.getVideoTestmonials().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData)
  });
}
editPromotion(data, index) {
  data.index = index;
  this.editData = data;
  console.log(this.editData)
}
updatePromotion(val) {
  console.log(val)
  var data = {
    description: val.description,
    fullname: val.fullname,
    likes: val.likes,
    video: val.video,
    testimonial_id: val.testimonial_id,
    user_id: val.user_id,
    video_thumbnail: val.video_thumbnail
  }
  this.service.editVideoTestmonials(data).subscribe();
}
delatePromotion(val) {
  console.log(val)
  var data = {
    comments: val.comments,
    fullname: val.fullname,
    rating_1: val.rating_1,
    rating_2: val.rating_2,
    rating_3: val.rating_3,
    rating_4: val.rating_4,
    rating_5: val.rating_5,
    recomment:val.recomment,
    status: 0,
    testimonial_createddate: val.testimonial_createddate,
    testimonial_id: val.testimonial_id,
    testimonial_modifydate: val.testimonial_modifydate,
    uploadpic: val.uploadpic,
    user_id: val.user_id
  }
  this.service.editVideoTestmonials(data).subscribe();
}
}