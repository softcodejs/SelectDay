import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Profile } from "../model/profile_m";

@Injectable({
    providedIn: 'root'
  })
export class ProfileService {
constructor(private http: HttpClient) { }

ProfileRegister(profile: Profile) {
    return this.http.post('https://localhost:7265/api/profile/register',
        {
        username: profile.name,
        mail: profile.email,
        phone: profile.phone,
        pass: profile.pass
        });
    }

    GetPrifile() {
        return this.http.get('https://localhost:7265/api/profile/get');
      }

}