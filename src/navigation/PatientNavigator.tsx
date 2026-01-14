import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// Import Screens
import PatientDashboardScreen from '../screens/patient/PatientDashboardScreen';
import RecordsScreen from '../screens/patient/RecordsScreen';
import AppointmentsScreen from '../screens/patient/AppointmentsScreen';
import MessagesScreen from '../screens/patient/MessagesScreen';
import SettingsScreen from '../screens/patient/SettingsScreen';
import NotificationsScreen from '../screens/patient/NotificationsScreen';
import VerifyOTPScreen from '../screens/patient/VerifyOTPScreen';
import MicrophoneTestScreen from '../screens/patient/MicrophoneTestScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View className="px-5 py-8 border-b border-gray-100 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=p1' }} className="w-12 h-12 rounded-full" />
          <View className="ml-3">
            <Text className="text-lg font-bold text-gray-900">Daniel Ben</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 mt-4">
        <DrawerItem
          label="Home"
          icon={({ color, size }) => <Ionicons name="home" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Home')}
          activeTintColor={colors.primary}
        />
        <DrawerItem
          label="My Records"
          icon={({ color, size }) => <Ionicons name="mic" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Records')}
        />
        <DrawerItem
          label="Appointments"
          icon={({ color, size }) => <Ionicons name="folder" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Appointments')}
        />
        <DrawerItem
          label="Messages"
          icon={({ color, size }) => <Ionicons name="people" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Messages')}
        />
      </View>

      <View className="mb-10 px-4 border-t border-gray-100 pt-4">
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
          onPress={() => {
            Alert.alert("Sign Out?", "You will be logged out of this app", [
              { text: "Cancel", style: "cancel" },
              { text: "Confirm", onPress: () => props.navigation.navigate('Login') }
            ]);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function PatientTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Records') iconName = focused ? 'document-text' : 'document-text-outline';
          else if (route.name === 'Appointments') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Messages') iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray500,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={PatientDashboardScreen} />
      <Tab.Screen name="Records" component={RecordsScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function PatientNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PatientMain">
        {() => (
          <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen name="PatientTabs" component={PatientTabs} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="MicTest" component={MicrophoneTestScreen} />
    </Stack.Navigator>
  );
}