// src/screens/doctor/NotificationsScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';

const NotificationItem = ({ title, message, time, isUrgent }: any) => (
  <View className={`p-6 border-b border-gray-50 ${isUrgent ? 'bg-red-50/50' : 'bg-white'}`}>
    <View className="flex-row justify-between items-start mb-1">
      <Text className="font-bold text-lg text-gray-900">{title}</Text>
      <Text className={`text-sm ${isUrgent ? 'text-red-500' : 'text-gray-400'}`}>{time}</Text>
    </View>
    <Text className="text-gray-500 leading-5">{message}</Text>
  </View>
);

export default function NotificationsScreen({ navigation }: any) {
  const [activeChip, setActiveChip] = useState('All');
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}><ArrowLeft size={24} color="#111827" /></TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900 flex-1 text-center">Notifications</Text>
        <View className="w-10" />
      </View>
      <View className="px-6 mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
          {['All', 'Urgent', 'Insights', 'Patient'].map(chip => (
            <TouchableOpacity key={chip} onPress={() => setActiveChip(chip)} className={`px-6 py-3 rounded-full border ${activeChip === chip ? 'bg-blue-500 border-blue-500' : 'border-gray-200'}`}>
              <Text className={`font-semibold ${activeChip === chip ? 'text-white' : 'text-gray-500'}`}>{chip}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <Text className="px-6 text-xs font-bold text-gray-400 mb-2">TODAY</Text>
        <NotificationItem title="Critical Lab Result" message="Potassium levels elevated, Patient #8739. Immediate action required." time="15m ago" isUrgent />
        <NotificationItem title="Consultation summary ready" message="Patient Daniel Koshaer - AI Analysis complete." time="42m ago" />
      </ScrollView>
    </SafeAreaView>
  );
}