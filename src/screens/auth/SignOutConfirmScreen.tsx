import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Lock } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignOutConfirmScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-6">
      <View className="w-full max-w-sm items-center p-10 rounded-3xl border border-slate-100 border-dashed">
        <View className="w-20 h-20 bg-slate-100 rounded-full items-center justify-center mb-6">
          <View className="bg-slate-200 p-4 rounded-full"><Lock size={32} color="#1e293b" /></View>
        </View>
        <Text className="text-3xl font-bold text-slate-900 mb-4">Sign Out?</Text>
        <Text className="text-slate-500 text-lg mb-10 text-center">You will be logged out of this app</Text>
        <View className="flex-row space-x-4 w-full">
          <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Auth' }] })} className="flex-1 bg-sky-500 py-4 rounded-xl items-center"><Text className="text-white font-bold text-lg">Confirm</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} className="flex-1 bg-sky-50 py-4 rounded-xl items-center"><Text className="text-sky-600 font-bold text-lg">Cancel</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}