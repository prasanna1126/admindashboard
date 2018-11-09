import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestmonialsService } from "../../services/TestmonialsService";
import {PaginatorModule} from 'primeng/paginator';
import { Input, ViewEncapsulation  } from '@angular/core';
@Component({
  templateUrl: 'alerts.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
})

export class AlertsComponent implements OnInit {
  totalItems: number;
  categorysData: any;
  editData: any = [];
  bigCurrentPage: number = 1;
  constructor(private router: Router,private service: TestmonialsService) { }
  backToDashBoard() {
    this.router.navigate(['reports'])
  }
  ngOnInit() {
  this.service.getWrittenTestmonials().subscribe(response => {
    this.categorysData = response.json().data;
    console.log(this.categorysData)
  });

}
editPromotion(data, index) {
  data.index = index;
  this.editData = data;
  this.totalItems=this.editData.length;
  console.log(this.editData.length)
}
updatePromotion(val) {
  console.log(val)
  var data = {
    comments: val.comments,
    rating_1: val.rating_1,
    rating_2: val.rating_2,
    rating_3: val.rating_3,
    rating_4: val.rating_4,
    rating_5: val.rating_5,
    recomment:val.recomment,
    status: val.status,
    uploadpic: val.uploadpic,
    user_id: val.user_id
  }
  this.service.editWrittenTestmonials(data).subscribe();
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
  this.service.editWrittenTestmonials(data).subscribe();
}
}
