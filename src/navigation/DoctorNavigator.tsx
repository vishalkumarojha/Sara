import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import DoctorDashboardScreen from '../screens/doctor/DoctorDashboardScreen';
import PatientListScreen from '../screens/doctor/PatientListScreen';
import PatientDetailScreen from '../screens/doctor/PatientDetailScreen';
import AppointmentsScreen from '../screens/doctor/AppointmentsScreen';
import ProfileScreen from '../screens/doctor/ProfileScreen';
import ConsultationScreen from '../screens/doctor/ConsultationScreen';

export type DoctorStackParamList = {
  DoctorTabs: undefined;
  PatientDetail: { patientId: string };
  Consultation: { appointmentId: string };
};

export type DoctorTabParamList = {
  Dashboard: undefined;
  Patients: undefined;
  Appointments: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<DoctorStackParamList>();
const Tab = createBottomTabNavigator<DoctorTabParamList>();

function DoctorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Patients') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Appointments') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray500,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DoctorDashboardScreen} />
      <Tab.Screen name="Patients" component={PatientListScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function DoctorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="DoctorTabs" 
        component={DoctorTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="PatientDetail" 
        component={PatientDetailScreen}
        options={{ title: 'Patient Details' }}
      />
      <Stack.Screen 
        name="Consultation" 
        component={ConsultationScreen}
        options={{ title: 'Consultation' }}
      />
    </Stack.Navigator>
  );
}
