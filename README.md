# Medical App - React Native with Expo

A comprehensive medical application built with React Native and Expo, featuring separate portals for doctors, patients, and administrators.

## 🚀 Features

### Doctor Portal (Fully Implemented)
- **Dashboard**: Overview of appointments, patient statistics, and daily schedule
- **Patient Management**: View patient list, search patients, and access detailed patient information
- **Appointment Management**: View scheduled appointments, manage consultation times
- **Consultation System**: Conduct consultations with symptom tracking, diagnosis, and prescription management
- **Profile Management**: View and manage doctor profile information

### Patient Portal (Under Construction)
- Appointment booking system
- Medical history access
- Prescription management
- Test results viewing
- Doctor communication
- Health tracking

### Admin Portal (Under Construction)
- User management system
- System configuration
- Reports and analytics
- Hospital management
- Staff scheduling
- Billing and payments

## 📱 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **UI Components**: Custom components with consistent theming
- **Icons**: Expo Vector Icons
- **State Management**: React Hooks (useState, useEffect)

## 🏗️ Project Structure

```
src/
├── assets/                 # Images, fonts, and other static assets
├── components/
│   ├── common/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   └── Input.tsx
│   └── layout/            # Layout components
├── navigation/
│   ├── RootNavigator.tsx  # Main navigation structure
│   └── DoctorNavigator.tsx # Doctor-specific navigation
├── screens/
│   ├── doctor/            # Doctor portal screens
│   │   ├── DoctorDashboardScreen.tsx
│   │   ├── PatientListScreen.tsx
│   │   ├── PatientDetailScreen.tsx
│   │   ├── AppointmentsScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── ConsultationScreen.tsx
│   ├── patient/           # Patient portal screens
│   │   └── PatientScreen.tsx
│   ├── admin/             # Admin portal screens
│   │   └── AdminScreen.tsx
│   └── HomeScreen.tsx     # Main selection screen
├── services/
│   └── api.ts             # API service layer (backend ready)
├── theme/
│   ├── colors.ts          # Color palette
│   ├── spacing.ts         # Spacing constants
│   └── typography.ts      # Typography styles
└── utils/
    └── index.ts           # Utility functions
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medical-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## 🎯 Usage

### Getting Started
1. Launch the app
2. Select your role from the home screen:
   - **Doctor Portal**: Access the fully functional doctor interface
   - **Patient Portal**: View the under-construction patient module
   - **Admin Portal**: View the under-construction admin module

### Doctor Portal Navigation
- **Dashboard Tab**: View daily statistics and upcoming appointments
- **Patients Tab**: Browse and search patient records
- **Appointments Tab**: Manage scheduled appointments
- **Profile Tab**: View and manage doctor information

### Key Features
- **Patient Details**: Tap any patient to view comprehensive medical information
- **Consultation**: Start consultations directly from patient details or appointments
- **Search**: Use the search functionality in the patient list
- **Navigation**: Seamless navigation between screens with proper back button handling

## 🔧 Backend Integration

The app is designed to be backend-ready with a complete API service layer:

### API Service (`src/services/api.ts`)
- **Patient Management**: CRUD operations for patient data
- **Appointment Management**: Scheduling and appointment updates
- **Consultation System**: Save and retrieve consultation records
- **Doctor Profile**: Profile management
- **Authentication**: Login/logout functionality (ready for implementation)

### Integration Steps
1. Replace mock functions in `api.ts` with actual API endpoints
2. Update the `baseUrl` in the ApiService class
3. Add authentication headers and error handling
4. Implement proper loading states in components

### Example API Integration
```typescript
// Replace this mock function:
async getPatients(): Promise<Patient[]> {
  return Promise.resolve(mockData);
}

// With actual API call:
async getPatients(): Promise<Patient[]> {
  const response = await fetch(`${this.baseUrl}/patients`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
}
```

## 🎨 Theming & Customization

### Color Scheme
The app uses a medical-themed color palette defined in `src/theme/colors.ts`:
- **Primary**: Blue (#2E86AB) - Medical trust and professionalism
- **Secondary**: Purple (#A23B72) - Accent color
- **Success**: Green (#28A745) - Positive actions
- **Warning**: Yellow (#FFC107) - Caution states
- **Error**: Red (#DC3545) - Error states

### Typography
Consistent typography system in `src/theme/typography.ts`:
- Heading styles (h1-h6)
- Body text styles
- Button text
- Caption text

### Spacing
Uniform spacing system in `src/theme/spacing.ts`:
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, etc.

## 📱 Components

### Common Components
- **Button**: Customizable button with variants (primary, secondary, outline)
- **Card**: Container component with shadow and rounded corners
- **Header**: Navigation header with back button and title
- **Input**: Form input with label and error handling

### Usage Examples
```typescript
// Button usage
<Button
  title="Save"
  onPress={handleSave}
  variant="primary"
  size="large"
/>

// Card usage
<Card style={customStyles}>
  <Text>Card content</Text>
</Card>

// Input usage
<Input
  label="Patient Name"
  value={name}
  onChangeText={setName}
  placeholder="Enter patient name"
  error={nameError}
/>
```

## 🚀 Deployment

### Building for Production

1. **Configure app.json**
   ```json
   {
     "expo": {
       "name": "Medical App",
       "slug": "medical-app",
       "version": "1.0.0",
       "platforms": ["ios", "android"],
       "icon": "./assets/icon.png",
       "splash": {
         "image": "./assets/splash.png"
       }
     }
   }
   ```

2. **Build the app**
   ```bash
   # For iOS
   expo build:ios
   
   # For Android
   expo build:android
   ```

3. **Publish updates**
   ```bash
   expo publish
   ```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Strategy
- Unit tests for utility functions
- Component testing with React Native Testing Library
- Integration tests for navigation flows
- API service testing with mock data

## 🔒 Security Considerations

- Implement proper authentication and authorization
- Use secure storage for sensitive data
- Validate all user inputs
- Implement proper error handling
- Use HTTPS for all API communications
- Follow HIPAA compliance guidelines for medical data

## 📈 Performance Optimization

- Use FlatList for large data sets
- Implement proper image caching
- Optimize bundle size with code splitting
- Use React.memo for expensive components
- Implement proper loading states
- Use debounced search functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments for implementation details

## 🔮 Future Enhancements

### Planned Features
- Push notifications for appointments
- Telemedicine video calling
- Electronic health records (EHR) integration
- Prescription e-prescribing
- Insurance verification
- Multi-language support
- Dark mode theme
- Offline data synchronization
- Advanced analytics and reporting
- Integration with wearable devices

### Technical Improvements
- State management with Redux Toolkit
- Automated testing suite
- CI/CD pipeline setup
- Performance monitoring
- Crash reporting
- Analytics integration
- Code splitting and lazy loading
- Progressive Web App (PWA) support
