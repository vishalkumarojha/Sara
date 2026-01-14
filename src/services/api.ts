export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  description: string;
  status: 'scheduled' | 'completed';
}

export interface DashboardData {
  doctorName: string;
  count: number;
  appointments: Appointment[];
}

class ApiService {
  async getDashboardData(): Promise<DashboardData> {
    // Simulated fetch from backend
    return {
      doctorName: "Dr. Rajeev",
      count: 5,
      appointments: [
        { id: '1', patientName: 'Abhinav Singh', time: '10:30', type: 'Follow-Up', description: 'Post-op check', status: 'scheduled' },
        { id: '2', patientName: 'Ashutosh Singh', time: '10:30', type: 'Consult', description: 'Lab Result Review', status: 'scheduled' },
        { id: '3', patientName: 'Nirvan Singh', time: '10:30', type: 'New Patient', description: 'General Assessment', status: 'scheduled' },
      ]
    };
  }
  async getMedicalRecords() {
  // return fetch(`${this.baseUrl}/records`).then(res => res.json());
  return [{ provider: 'Dr. Rajeev', date: '2024-01-10', purpose: 'Follow-up' }];
}

async getPatientAppointments() {
  // return fetch(`${this.baseUrl}/appointments`).then(res => res.json());
  return [{ doctor: 'Dr. Sarah', time: '10:30 AM', status: 'Confirmed' }];
}
}



export const api = new ApiService();