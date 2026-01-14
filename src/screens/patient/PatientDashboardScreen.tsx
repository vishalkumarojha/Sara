import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { apiService } from '../../services/api';

const PatientDashboardScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5">
        <View className="flex-row justify-between items-center py-4">
          <TouchableOpacity><Ionicons name="menu" size={28} color="#1e293b" /></TouchableOpacity>
          <View className="flex-row items-center space-x-4">
            <Ionicons name="notifications" size={24} color="#1e293b" />
            <Image source={{ uri: 'https://ui-avatars.com/api/?name=Daniel+Ben' }} className="w-10 h-10 rounded-full" />
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-3xl font-bold text-slate-900">Good Morning, Daniel</Text>
          <Text className="text-slate-500 mt-1">You have 5 appointments today</Text>
        </View>

        <View className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex-row items-center mt-6">
          <Ionicons name="search" size={20} color="#94a3b8" />
          <TextInput placeholder="Search records, notes..." className="ml-3 flex-1" />
        </View>

        <Text className="text-lg font-bold text-slate-800 mt-8 mb-4">Quick Actions</Text>
        <View className="flex-row justify-between">
          {['New Meet', 'Add Record', 'Dictate', 'Upload'].map((label, i) => (
            <View key={label} className="items-center">
              <TouchableOpacity className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-2xl items-center justify-center">
                <Ionicons name={['videocam', 'person-add', 'mic', 'document'][i] as any} size={24} color="#3b82f6" />
              </TouchableOpacity>
              <Text className="text-[10px] mt-2 font-medium text-slate-600">{label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PatientDashboardScreen;