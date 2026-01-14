import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/auth/LoginScreen';
import TwoFactorAuthScreen from '@/screens/auth/TwoFactorAuthScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuthScreen} />
    </Stack.Navigator>
  );
}