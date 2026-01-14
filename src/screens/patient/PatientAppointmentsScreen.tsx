import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const PatientAppointmentsScreen = () => {
  const days = ['12', '13', '14', '15', '16'];
  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <View className="flex-row items-center justify-between py-4">
        <Ionicons name="arrow-back" size={24} color="#1e293b" />
        <Text className="text-xl font-bold">Schedule</Text>
        <View className="w-6" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2">
        {days.map(d => (
          <TouchableOpacity key={d} className={`w-14 h-20 rounded-2xl items-center justify-center mr-3 ${d === '14' ? 'bg-blue-500' : 'bg-gray-50'}`}>
            <Text className={`font-bold ${d === '14' ? 'text-white' : 'text-slate-800'}`}>{d}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-1 mt-6 border-l border-gray-100 pl-4">
        <View className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm mb-4">
          <View className="flex-row items-center">
            <Image source={{ uri: 'https://ui-avatars.com/api/?name=Sarah+J' }} className="w-10 h-10 rounded-full" />
            <View className="ml-3">
              <Text className="font-bold">Sarah Jenkins</Text>
              <Text className="text-xs text-slate-400">General Consultation</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PatientAppointmentsScreen;