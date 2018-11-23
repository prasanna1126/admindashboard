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
  templateUrl: 'brand-buttons.component.html',
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
export class BrandButtonsComponent implements OnInit {

  alerts: any[] = [{
    type: 'success',
    msg: `Testmonial Details Updated Successfully`,
    timeout: 5000
  }];
  totalItems: number;
  categorysData: any;
  editData: any = [];
  bigCurrentPage: number = 1;
  deleteData: { rewardpoint_id: any; rewardpoint_name: any; rewardpoint_amount: any; rewardpoint_status: number; };
  constructor(private router: Router,private service: RefferalRewardsService ,sanitizer: DomSanitizer) {
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
   }
   ngOnInit() {
    this.service.getPerksList().subscribe(response => {
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
      rewardpoint_id: val.rewardpoint_id,
      rewardpoint_name: val.rewardpoint_name,
      rewardpoint_amount: val.rewardpoint_amount,
      rewardpoint_status: 1
    }
    console.log(data)
    this.service.editPerksList(data).subscribe();
    this.categorysData=[];
    this.service.getPerksList().subscribe(response => {
      this.categorysData = response.json().data;
      console.log(this.categorysData)
    });
  }
  DeletePromotion(val) {
    console.log(val)
    var data = {
      rewardpoint_id: val.rewardpoint_id,
      rewardpoint_name: val.rewardpoint_name,
      rewardpoint_amount: val.rewardpoint_amount,
      rewardpoint_status:0
    }
    this.deleteData=data;
  }
  deleteAlert(){
    this.service.editPerksList(this.deleteData).subscribe();
    this.delete();
    this.categorysData=[];
    this.service.getPerksList().subscribe(response => {
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
