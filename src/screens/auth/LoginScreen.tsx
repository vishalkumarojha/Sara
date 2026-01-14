import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Key, Eye, EyeOff, ChevronDown, User, Phone, Check, ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  
  // Common states
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('Doctor');
  const [showDropdown, setShowDropdown] = useState(false);

  // Sign Up states
  const [password, setPassword] = useState('');
  
  const passwordRequirements = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'One Uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'One lowercase letter', met: /[a-z]/.test(password) },
    { text: 'One Number', met: /\d/.test(password) },
    { text: 'One special character (!@#$%*+=)', met: /[!@#$%^&*+=]/.test(password) },
  ];

  const strengthCount = passwordRequirements.filter(r => r.met).length;

  const handleAuthAction = () => {
    // Navigate to 2FA before entering the dashboard
    navigation.navigate('TwoFactorAuth');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Logo Section */}
        <View className="items-center py-10">
          <View className="flex-row items-center">
             <View className="bg-blue-500 p-2 rounded-xl mr-2">
                <PlusIcon color="white" size={24} />
             </View>
             <Text className="text-3xl font-bold tracking-tight">
                <Text className="text-slate-900">Sara</Text>
                <Text className="text-sky-500">medico</Text>
             </Text>
          </View>
        </View>

        {/* Tab Switcher */}
        <View className="mx-6 mb-8 flex-row bg-slate-100 rounded-2xl p-1.5">
          <TouchableOpacity 
            onPress={() => setActiveTab('login')}
            className={`flex-1 py-3.5 rounded-xl ${activeTab === 'login' ? 'bg-blue-500 shadow-sm' : ''}`}
          >
            <Text className={`text-center font-bold ${activeTab === 'login' ? 'text-white' : 'text-slate-500'}`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setActiveTab('signup')}
            className={`flex-1 py-3.5 rounded-xl ${activeTab === 'signup' ? 'bg-blue-500 shadow-sm' : ''}`}
          >
            <Text className={`text-center font-bold ${activeTab === 'signup' ? 'text-white' : 'text-slate-500'}`}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'login' ? (
          /* LOGIN FORM */
          <View className="px-6 space-y-5">
            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Login as</Text>
              <TouchableOpacity 
                onPress={() => setShowDropdown(!showDropdown)}
                className="flex-row justify-between items-center border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50"
              >
                <Text className="text-slate-400 text-lg">{userType}</Text>
                <ChevronDown size={20} color="#64748b" />
              </TouchableOpacity>
            </View>

            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Work Email</Text>
              <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50">
                <TextInput placeholder="dr.name@hospital.org" className="flex-1 text-lg" />
                <Mail size={20} color="#64748b" />
              </View>
            </View>

            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Password</Text>
              <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50">
                <TextInput secureTextEntry={!showPassword} placeholder="••••••••••••" className="flex-1 text-lg" />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                   <Key size={20} color="#64748b" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="mt-3 items-end">
                <Text className="text-slate-500 font-medium">Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              onPress={handleAuthAction}
              className="bg-sky-500 rounded-full py-5 items-center shadow-lg mt-4"
            >
              <Text className="text-white text-xl font-bold">Login</Text>
            </TouchableOpacity>

            <View className="space-y-4 mt-4">
               <SocialButton icon="apple" label="Continue with Apple ID" />
               <SocialButton icon="google" label="Continue with Google" />
            </View>
          </View>
        ) : (
          /* SIGN UP FORM */
          <View className="px-6 space-y-5">
            <Text className="text-slate-500 mb-2 px-1">Roles define access to clinical features. This role can't be changed later</Text>
            
            <InputBlock label="Full Name" placeholder="Your Name" icon={<Mail size={20} color="#94a3b8" />} />
            <InputBlock label="Work Email" placeholder="dr.name@hospital.org" icon={<Mail size={20} color="#94a3b8" />} />
            
            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Phone</Text>
              <View className="flex-row gap-3">
                <View className="flex-row items-center border border-slate-200 rounded-2xl px-3 bg-white w-24">
                  <Text className="mr-1">🇺🇸</Text>
                  <Text className="font-medium mr-1">+1</Text>
                  <ChevronDown size={14} color="#64748b" />
                </View>
                <View className="flex-1 flex-row items-center border border-slate-200 rounded-2xl px-4 py-4 bg-white">
                  <TextInput placeholder="XXX-XXX-XXX" className="flex-1" />
                  <Phone size={20} color="#94a3b8" />
                </View>
              </View>
              <Text className="text-slate-400 text-xs mt-2 ml-1">Used only for verification & security</Text>
            </View>

            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Password</Text>
              <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-white">
                <TextInput 
                  secureTextEntry={!showPassword} 
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••••••" 
                  className="flex-1" 
                />
                <Key size={20} color="#94a3b8" />
              </View>
              
              {/* Strength Bars */}
              <View className="flex-row gap-2 mt-4">
                {[1,2,3,4].map(i => (
                  <View key={i} className={`h-1.5 flex-1 rounded-full ${i <= strengthCount ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                ))}
              </View>
              <Text className="text-slate-500 text-xs mt-3 mb-4">Use 8+ chars with a mix of letters, numbers & symbols.</Text>

              {/* Requirements List */}
              <View className="space-y-2">
                {passwordRequirements.map((req, idx) => (
                  <View key={idx} className="flex-row items-center">
                    <Check size={14} color={req.met ? "#10b981" : "#cbd5e1"} />
                    <Text className={`ml-3 text-sm ${req.met ? 'text-emerald-600' : 'text-slate-400'}`}>{req.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">Confirm Password</Text>
              <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-white">
                <TextInput secureTextEntry placeholder="Re-enter password" size={20} className="flex-1" />
                 <View className="bg-slate-300 rounded-full p-1"><Check size={12} color="white" /></View>
              </View>
            </View>

            <TouchableOpacity 
              onPress={handleAuthAction}
              className="bg-sky-500 rounded-full py-5 items-center mt-6 shadow-md"
            >
              <Text className="text-white text-xl font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-components for cleaner code
const SocialButton = ({ icon, label }: { icon: 'apple' | 'google', label: string }) => (
  <TouchableOpacity className="flex-row items-center justify-center border border-slate-200 rounded-full py-4 space-x-3">
    <View className="w-6 h-6 items-center justify-center">
       {/* Replace with actual SVG or Image */}
       <Text className="font-bold">{icon === 'apple' ? '' : 'G'}</Text>
    </View>
    <Text className="text-slate-800 font-bold text-lg">{label}</Text>
  </TouchableOpacity>
);

const InputBlock = ({ label, placeholder, icon }: any) => (
  <View>
    <Text className="text-slate-700 font-semibold mb-2 ml-1">{label}</Text>
    <View className="flex-row items-center border border-slate-200 rounded-2xl px-5 py-4 bg-white">
      <TextInput placeholder={placeholder} className="flex-1" />
      {icon}
    </View>
  </View>
);

const PlusIcon = ({ color, size }: any) => (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ position: 'absolute', width: size, height: 4, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: 4, height: size, backgroundColor: color, borderRadius: 2 }} />
    </View>
);