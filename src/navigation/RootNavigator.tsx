import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import DoctorNavigator from './DoctorNavigator';
import PatientScreen from '../screens/patient/PatientScreen';
import AdminScreen from '../screens/admin/AdminScreen';

export type RootStackParamList = {
  Login: undefined;
  DoctorFlow: undefined;
  PatientFlow: undefined;
  AdminFlow: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* ✅ Auth Entry */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* ✅ Role Flows */}
      <Stack.Screen name="DoctorFlow" component={DoctorNavigator} />
      <Stack.Screen name="PatientFlow" component={PatientScreen} />
      <Stack.Screen name="AdminFlow" component={AdminScreen} />
    </Stack.Navigator>
  );
}
