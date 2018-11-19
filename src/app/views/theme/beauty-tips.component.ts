import { Component, SecurityContext, ViewEncapsulation,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';
import { BeautyTipsService } from '../../services/beauty-tips.service';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'beauty-tips.component.html',
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
export class BeautyTipsComponent implements OnInit {
  alerts: any[] = [{
    type: 'success',
    msg: `Testmonial Details Updated Successfully`,
    timeout: 5000
  }];
  totalItems: number;
  categorysData: any;
  editData: any = [];
  bigCurrentPage: number = 1;
  constructor(private router: Router,private service: BeautyTipsService ,sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
   }
   ngOnInit() {
    this.service.getBeautyTipsList().subscribe(response => {
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
    console.log(this.editData)
  }
  updatePromotion(val) {
    console.log(val)
    var data = {
      tip_id: val.tip_id,
      tip_title: val.tip_title,
      tip_description: val.tip_description,
      profile_name: val.profile_name,
      rec_status:val.rec_status
    }
    this.service.editBeautyTip(data).subscribe();
  }
  DeletePromotion(val) {
    console.log(val)
    var data = {
      tip_id: val.tip_id,
      tip_title: val.tip_title,
      tip_description: val.tip_description,
      profile_name: val.profile_name,
      rec_status:0
    }
    this.service.editBeautyTip(data).subscribe();
    this.delete();
    this.categorysData=[];
    this.service.getBeautyTipsList().subscribe(response => {
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
  addCreate(): void {
    this.alertsDismiss.push({
      type: 'info',
      msg: `Created Sucessfully!`,
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
