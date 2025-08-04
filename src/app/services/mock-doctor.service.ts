import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';

@Injectable({ providedIn: 'root' })
export class MockDoctorService {
  private doctors: Doctor[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'General Medicine' },
    { id: 4, name: 'Dr. Adams', specialty: 'Cardiology' }
  ];

  getDoctors(): Doctor[] {
    return this.doctors;
  }
}
