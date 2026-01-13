// API Service Layer - Backend Integration Ready
// This file contains placeholder functions that can be easily replaced with actual API calls

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  condition: string;
  allergies: string[];
  medications: string[];
  lastVisit: string;
  nextAppointment: string;
  status: 'active' | 'inactive';
}

export interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  time: string;
  date: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  duration: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  license: string;
  experience: string;
  email: string;
  phone: string;
  hospital: string;
  department: string;
}

export interface Consultation {
  id: string;
  appointmentId: string;
  patientId: string;
  doctorId: string;
  symptoms: string;
  diagnosis: string;
  prescription: string;
  notes: string;
  date: string;
}

// Mock API functions - Replace with actual API calls
class ApiService {
  private baseUrl = 'https://your-api-endpoint.com/api';

  // Patient APIs
  async getPatients(): Promise<Patient[]> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/patients`).then(res => res.json());
    
    // Mock data for now
    return Promise.resolve([
      {
        id: '1',
        name: 'John Doe',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567',
        email: 'john.doe@email.com',
        address: '123 Main St, City, State 12345',
        condition: 'Hypertension',
        allergies: ['Penicillin', 'Shellfish'],
        medications: ['Lisinopril 10mg', 'Metformin 500mg'],
        lastVisit: '2025-01-10',
        nextAppointment: '2025-01-20',
        status: 'active',
      },
      // Add more mock patients...
    ]);
  }

  async getPatientById(id: string): Promise<Patient | null> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/patients/${id}`).then(res => res.json());
    
    const patients = await this.getPatients();
    return patients.find(p => p.id === id) || null;
  }

  async updatePatient(id: string, patient: Partial<Patient>): Promise<Patient> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/patients/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(patient)
    // }).then(res => res.json());
    
    console.log('Updating patient:', id, patient);
    return Promise.resolve({} as Patient);
  }

  // Appointment APIs
  async getAppointments(): Promise<Appointment[]> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/appointments`).then(res => res.json());
    
    return Promise.resolve([
      {
        id: '1',
        patientName: 'John Doe',
        patientId: '1',
        time: '09:00 AM',
        date: '2025-01-15',
        type: 'Consultation',
        status: 'scheduled',
        duration: '30 min',
      },
      // Add more mock appointments...
    ]);
  }

  async createAppointment(appointment: Omit<Appointment, 'id'>): Promise<Appointment> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/appointments`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(appointment)
    // }).then(res => res.json());
    
    console.log('Creating appointment:', appointment);
    return Promise.resolve({ ...appointment, id: Date.now().toString() });
  }

  async updateAppointment(id: string, appointment: Partial<Appointment>): Promise<Appointment> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/appointments/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(appointment)
    // }).then(res => res.json());
    
    console.log('Updating appointment:', id, appointment);
    return Promise.resolve({} as Appointment);
  }

  // Consultation APIs
  async saveConsultation(consultation: Omit<Consultation, 'id'>): Promise<Consultation> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/consultations`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(consultation)
    // }).then(res => res.json());
    
    console.log('Saving consultation:', consultation);
    return Promise.resolve({ ...consultation, id: Date.now().toString() });
  }

  async getConsultationsByPatient(patientId: string): Promise<Consultation[]> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/consultations?patientId=${patientId}`).then(res => res.json());
    
    console.log('Getting consultations for patient:', patientId);
    return Promise.resolve([]);
  }

  // Doctor APIs
  async getDoctorProfile(id: string): Promise<Doctor | null> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/doctors/${id}`).then(res => res.json());
    
    return Promise.resolve({
      id,
      name: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      license: 'MD123456',
      experience: '15 years',
      email: 'dr.sarah@hospital.com',
      phone: '+1 (555) 987-6543',
      hospital: 'City General Hospital',
      department: 'Internal Medicine',
    });
  }

  async updateDoctorProfile(id: string, doctor: Partial<Doctor>): Promise<Doctor> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/doctors/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(doctor)
    // }).then(res => res.json());
    
    console.log('Updating doctor profile:', id, doctor);
    return Promise.resolve({} as Doctor);
  }

  // Authentication APIs (for future implementation)
  async login(email: string, password: string): Promise<{ token: string; user: any }> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/auth/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // }).then(res => res.json());
    
    console.log('Login attempt:', email);
    return Promise.resolve({ token: 'mock-token', user: {} });
  }

  async logout(): Promise<void> {
    // TODO: Replace with actual API call
    // return fetch(`${this.baseUrl}/auth/logout`, { method: 'POST' });
    
    console.log('Logout');
    return Promise.resolve();
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export individual functions for easier importing
export const {
  getPatients,
  getPatientById,
  updatePatient,
  getAppointments,
  createAppointment,
  updateAppointment,
  saveConsultation,
  getConsultationsByPatient,
  getDoctorProfile,
  updateDoctorProfile,
  login,
  logout,
} = apiService;
