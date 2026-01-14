import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const MedicalRecordsScreen = () => {
  const records = [
    { provider: 'Rohit Sharma', date: '01/12/24', purpose: 'Checkup' },
    { provider: 'Sara Shetty', date: '08/08/24', purpose: 'Checkup' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <Text className="text-2xl font-bold text-slate-900 my-6">Medical Records</Text>
      <View className="flex-row justify-between mb-4 px-2">
        <Text className="text-[10px] font-bold text-slate-400 uppercase">Provider</Text>
        <Text className="text-[10px] font-bold text-slate-400 uppercase">Visit</Text>
        <Text className="text-[10px] font-bold text-slate-400 uppercase">Purpose</Text>
      </View>
      <ScrollView>
        {records.map((r, i) => (
          <TouchableOpacity key={i} className="flex-row items-center py-5 border-b border-gray-50">
            <Text className="flex-1 font-bold text-slate-800">{r.provider}</Text>
            <Text className="flex-1 text-center text-slate-500">{r.date}</Text>
            <View className="flex-1 flex-row justify-end items-center">
              <Text className="text-slate-400 mr-2">{r.purpose}</Text>
              <Ionicons name="chevron-forward" size={16} color="#cbd5e1" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default MedicalRecordsScreen;