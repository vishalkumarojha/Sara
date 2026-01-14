import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MicTestScreen() {
  const navigation = useNavigation<any>();
  const [isTesting, setIsTesting] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color="#1E293B" /></TouchableOpacity>
        <View className="flex-1 mx-4 h-2 bg-slate-200 rounded-full overflow-hidden"><View className={`h-full bg-blue-500 ${isTesting ? 'w-full' : 'w-1/2'}`} /></View>
      </View>

      <View className="flex-1 items-center px-6 pt-10">
        <Text className="text-2xl font-extrabold text-slate-900 text-center mb-2">Test Your Microphone</Text>
        <Text className="text-center text-slate-500 mb-12">Speak a short sentence to ensure accurate transcription</Text>

        {isTesting ? (
          <View className="w-full bg-white rounded-3xl p-8 border border-slate-100 mb-10 shadow-sm min-h-[200px]">
            <Text className="text-slate-500 text-lg leading-7">"Hello, I am testing the Saramedico live consultation audio..."</Text>
            <View className="flex-row justify-center mt-10 space-x-1">
                {[4, 8, 12, 6, 15, 8, 10, 4].map((h, i) => <View key={i} className="w-1 bg-blue-400 rounded-full" style={{height: h * 3}} />)}
            </View>
          </View>
        ) : (
          <View className="w-40 h-40 bg-slate-100 rounded-full items-center justify-center border-8 border-white shadow-lg mb-12">
            <View className="w-32 h-32 bg-blue-500 rounded-full items-center justify-center"><Ionicons name="mic" size={50} color="white" /></View>
          </View>
        )}

        <TouchableOpacity className="w-full bg-blue-500 py-4 rounded-2xl shadow-blue-200 shadow-lg" onPress={() => setIsTesting(!isTesting)}>
          <Text className="text-white font-bold text-center text-lg">{isTesting ? 'Stop Test' : 'Start Test'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="mt-6" onPress={() => navigation.navigate('PatientTabs')}><Text className="text-slate-400 font-bold">Skip for now</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}