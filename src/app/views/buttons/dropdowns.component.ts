import { Component, SecurityContext, ViewEncapsulation,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { RefferalRewardsService } from '../../services/refferal-rewards.service';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
  .alert-md-local {
    background-color: #009688;
    border-color: #00695C;
    color: #fff;
  }
  `
  ],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class DropdownsComponent {
  userId:number;
  tableStatus=false;
  alerts: any[] = [{
    type: 'success',
    msg: `Testmonial Details Updated Successfully`,
    timeout: 5000
  }];
  totalItems: number;
  categorysData: any;
  categorysDataUsers:any;
  editData: any = [];
  bigCurrentPage: number = 1;
  getValue: number;
  constructor(private router: Router,private service: RefferalRewardsService ,sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
   }
   ngOnInit() {
    this.service.getUserlistForHistory().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData)
    });
  
  }
   alertsHtml: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }
  ];
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
    //this.service.editWrittenTestmonials(data).subscribe();
    this.alerts.push({
      type: 'success',
      msg: `Testmonial Details Updated Successfully`,
      timeout: 5000
    });
  }
  DeletePromotion(val) {
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
    //this.service.editWrittenTestmonials(data).subscribe();
  }
  setUserId(branch_id: any): void{
    //this.categorysDataUsers=[];
    this.userId = branch_id;
    console.log(branch_id)
    this.tableStatus=true;
    this.service.getUserRewardHistory(branch_id).subscribe(response => {
      this.categorysDataUsers = response.json().data;
      console.log(this.categorysDataUsers)
    });
  }
}
