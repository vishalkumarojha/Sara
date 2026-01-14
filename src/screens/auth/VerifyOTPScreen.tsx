import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { ArrowLeft, Key, Check, Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const requirements = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'One Uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'One Number', met: /\d/.test(password) },
    { text: 'One special character (!@#$%*+=)', met: /[!@#$%^&*+=]/.test(password) },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6"><ArrowLeft size={24} color="#1e293b" /></TouchableOpacity>
        <View className="items-center mb-10 flex-row justify-center">
            <View className="bg-sky-500 p-1.5 rounded-lg mr-2"><Plus color="white" size={20} /></View>
            <Text className="text-2xl font-bold text-slate-900">Sara<Text className="text-sky-500">medico</Text></Text>
        </View>
        <Text className="text-slate-700 font-semibold mb-2">New Password</Text>
        <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50 mb-4">
          <TextInput secureTextEntry onChangeText={setPassword} placeholder="••••••••••••" className="flex-1 text-lg" />
          <Key size={20} color="#94a3b8" />
        </View>
        <View className="space-y-2 mb-10">
          {requirements.map((req, i) => (
            <View key={i} className="flex-row items-center">
              <Check size={14} color={req.met ? "#10b981" : "#cbd5e1"} />
              <Text className={`ml-3 ${req.met ? 'text-emerald-600' : 'text-slate-400'}`}>{req.text}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} className="bg-sky-500 w-full py-5 rounded-3xl items-center">
          <Text className="text-white text-xl font-bold">Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}