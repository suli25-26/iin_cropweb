import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProducerApi {

  host = environment.apiHost

  constructor(private http: HttpClient) {}  

  getProducers() {
    const url = this.host + 'producers'
    return this.http.get(url)
  }

  createProducer(producer: any) {
    const url = this.host + 'producers'
    return this.http.post(url, producer)
  }

  updateProducer(producer: any) {
    const url = this.host + 'producers/' + producer.id
    return this.http.put(url, producer)
  }

  deleteProducer(id: number) {
    const url = this.host + 'producers/' + id
    return this.http.delete(url)
  }
}
