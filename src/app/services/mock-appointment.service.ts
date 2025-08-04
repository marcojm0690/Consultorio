import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class MockAppointmentService {
  private appointments: Appointment[] = [
    { id: 1, patientId: 2, doctorId: 1, date: '2025-08-10T10:00', reason: 'Checkup' },
    { id: 2, patientId: 2, doctorId: 1, date: '2025-08-15T14:00', reason: 'Follow-up' }
  ];

  getAppointments(): Appointment[] {
    return this.appointments;
  }
}
