// src/screens/doctor/PatientListScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, Search, UserPlus, ChevronRight } from 'lucide-react-native';

const patients = [
  { id: '1', name: 'Rohit Sharma', dob: '01/12/80', mrn: '882-921', status: 'Analysis Ready', color: 'text-blue-500' },
  { id: '2', name: 'Sara Shetty', dob: '08/08/80', mrn: '882-921', status: 'Check-up pending', color: 'text-gray-400' },
];

export default function PatientListScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4 gap-3">
        <View className="flex-1 flex-row items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
          <Search size={20} color="#9ca3af" className="mr-3" />
          <TextInput placeholder="Search patients..." className="flex-1" />
        </View>
        <TouchableOpacity className="bg-blue-500 p-4 rounded-xl"><UserPlus size={20} color="white" /></TouchableOpacity>
      </View>
      <View className="px-6 flex-row mb-2">
        <Text className="w-1/2 text-xs font-bold text-gray-400">NAME</Text>
        <Text className="w-1/4 text-xs font-bold text-gray-400 text-center">DOB</Text>
        <Text className="w-1/4 text-xs font-bold text-gray-400 text-center">MRN</Text>
      </View>
      <FlatList data={patients} renderItem={({ item }) => (
        <TouchableOpacity className="mx-6 flex-row items-center bg-white border border-gray-100 rounded-2xl p-4 mb-3 shadow-sm">
          <View className="w-1/2"><Text className="font-bold">{item.name}</Text><Text className={`text-xs ${item.color}`}>{item.status}</Text></View>
          <Text className="w-1/4 text-xs text-gray-500 text-center">{item.dob}</Text>
          <View className="w-1/4 flex-row justify-center items-center"><Text className="text-xs text-gray-500 mr-2">{item.mrn}</Text><ChevronRight size={16} color="#9ca3af" /></View>
        </TouchableOpacity>
      )} />
    </SafeAreaView>
  );
}