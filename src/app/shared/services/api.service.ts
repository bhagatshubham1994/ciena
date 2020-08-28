import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _testDataUrl = "assets/testData.json"

  constructor(
    private http: HttpClient
  ) { }

  public getTestData() {
    return this.http.get(this._testDataUrl);
  }
}
