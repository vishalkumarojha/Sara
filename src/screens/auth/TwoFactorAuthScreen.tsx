import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Lock } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function TwoFactorAuthScreen() {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(50);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerify = () => {
    // Navigate to the Doctor Dashboard upon success
    navigation.replace('DoctorFlow');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 pt-4">
        {/* Header with Progress Bar */}
        <View className="flex-row items-center mb-10">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft size={32} color="black" />
          </TouchableOpacity>
          <View className="flex-1 h-2 bg-slate-100 rounded-full mx-6 overflow-hidden">
            <View className="h-full bg-blue-500 w-3/4" />
          </View>
        </View>

        {/* Security Icon */}
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-slate-50 rounded-full items-center justify-center border border-slate-100">
            <View className="w-16 h-16 bg-slate-200 rounded-full items-center justify-center">
              <Lock size={30} color="#475569" />
            </View>
          </View>
        </View>

        {/* Text Instructions */}
        <View className="items-center mb-12">
          <Text className="text-3xl font-bold text-slate-900 text-center mb-4 leading-tight">
            Two-Factor{"\n"}Authentication
          </Text>
          <Text className="text-slate-500 text-center text-lg leading-7 px-4">
            We sent a code to <Text className="font-bold text-slate-900">+1(222) xxx-xxx89</Text>.
            Enter the code below to access the portal.
          </Text>
        </View>

        {/* 6-Digit OTP Input */}
        <View className="flex-row justify-between mb-12">
          {code.map((digit, idx) => (
            <View key={idx} className={`w-12 h-16 border-2 rounded-2xl items-center justify-center ${idx === 0 ? 'border-sky-500' : 'border-slate-100'}`}>
               {idx === 0 && <View className="absolute left-1 bottom-4 w-1 h-8 bg-sky-500 rounded-full opacity-50" />}
               <TextInput 
                 keyboardType="number-pad" 
                 maxLength={1} 
                 className="text-2xl font-bold text-slate-900 text-center w-full"
                 value={digit}
               />
            </View>
          ))}
        </View>

        <TouchableOpacity 
          onPress={handleVerify}
          className="bg-sky-400 rounded-2xl py-5 items-center mb-6 shadow-sm"
        >
          <Text className="text-white text-xl font-bold">Verify</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-center">
          <Text className="text-slate-400 text-lg">Resend code in 00:{timer.toString().padStart(2, '0')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}