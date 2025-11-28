import { Component } from '@angular/core';
import { ProducerApi } from '../shared/producer-api';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-producer',
  imports: [ReactiveFormsModule],
  templateUrl: './producer.component.html',
  styleUrl: './producer.component.css',
})
export class ProducerComponent {

  producers!: any;
  producerForm!: any;
  addMode = true;

  constructor(
    private api: ProducerApi,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.producerForm = this.builder.group({
      id: '',
      name: '',
      country: '',
      yearOfFoundation: '',
      capacityHectare: ''
    })
    this.getProducers();
  }

  getProducers() {
    this.api.getProducers().subscribe({
      next: (res: any) => {
        console.log(res)
        this.producers = res.data
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  save() {
    if(this.addMode) {
      this.addProducer()
    }else {
      this.updateProducer();
    }
  }
  addProducer() {
    console.log('Add ...')
  }
  updateProducer() {}
  editProducer() {}
  deleteProducer() {}
}
