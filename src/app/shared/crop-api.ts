import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CropApi {

  host = environment.apiHost

  constructor(private http: HttpClient) {}

  getCrops() {
    const url = this.host + 'crops'
    return this.http.get(url)
  }

  createCrop(crop: any) {
    const url = this.host + 'crops'
    return this.http.post(url, crop)
  }

  updateCrop(crop: any) {
    const url = this.host + 'crops/' + crop.id
    return this.http.put(url, crop)
  }

  deleteCrop(id: number) {
    const url = this.host + 'crops/' + id
    return this.http.delete(url)
  }
 
}
