import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../models/user-model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "UserDatas"
  constructor(private http: HttpClient) { }

  public getUsers() : Observable<UserData[]>{
    return this.http.get<UserData[]>(`${environment.apiUrl}/${this.url}`)
  }

  public addUser(user: UserData) : Observable<UserData[]>{
    return this.http.post<UserData[]>(`${environment.apiUrl}/${this.url}` , user)
  }


public updateUser(user:UserData) : Observable<UserData[]>{
    return this.http.put<UserData[]>(`${environment.apiUrl}/${this.url}/${user.userId}` , user)
  }

public deleteUser(user:UserData) : Observable<UserData[]>{
    return this.http.delete<UserData[]>(`${environment.apiUrl}/${this.url}/${user.userId}`)
  }
}