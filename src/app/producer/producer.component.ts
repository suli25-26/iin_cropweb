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
    console.log(this.producerForm.value)
    this.api.createProducer(this.producerForm.value).subscribe({
      next: (res: any) => {
        console.log(res)
        this.producerForm.reset()
        this.getProducers()
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  updateProducer() {
    console.log('Update ...')
    this.api.updateProducer(this.producerForm.value).subscribe({
      next: (res: any) => {
        console.log(res) 
        this.addMode = true 
        this.producerForm.reset()
        this.getProducers()
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  editProducer(producer: any) {
    console.log(producer)
    this.addMode = false
    this.producerForm.patchValue(producer)
  }
  deleteProducer(id: number) {
    console.log('Törlés...')
    this.api.deleteProducer(id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.getProducers();
        //Sweetalert2
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
}
