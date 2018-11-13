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
    video: val.video,
    user_id: val.user_id,
    video_thumbnail: val.video_thumbnail
  }
  this.service.editVideoTestmonials(data).subscribe();
}
delatePromotion(val) {
  console.log(val)
  var data = {
    testimonial_id: val.testimonial_id,
    description: val.description,
    video: val.video,
    user_id: val.user_id,
    likes: val.likes,
    video_thumbnail: val.video_thumbnail,
    rec_status: 0
  }
  this.service.editVideoTestmonials(data).subscribe();
  this.delete();
  this.categorysData=[];
  this.service.getVideoTestmonials().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData)
  });

}
alertsDismiss: any = [];
add(): void {
  this.alertsDismiss.push({
    type: 'info',
    msg: `Updated Sucessfully!`,
    timeout: 5000
  });
}
delete(): void {
  this.alertsDismiss.push({
    type: 'danger',
    msg: `Deleted Sucessfully!`,
    timeout: 5000
  });
}
}