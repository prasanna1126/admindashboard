import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RefferalRewardsService {

  constructor(private http: Http) { }
  public getUserActivitiesList() {
    return this.http.get(environment.host + 'reffer-activities');
  }
  public getPerksList() {
    return this.http.get(environment.host + 'reward-points');
  }
  public getMindBodyCoupons() {
    return this.http.get(environment.host + 'mindbody-coupons');
  }
  public editMindBodyCoupons(data:any) {
    return this.http.post(environment.host + 'mindbody-coupons', data);
  }
  public getUserlistForHistory() {
    return this.http.get(environment.host + 'get_users_list');
  }
  public getUserRewardHistory(id:number) {
    return this.http.get(environment.host + 'reward_histories/' +id);
  }
}
