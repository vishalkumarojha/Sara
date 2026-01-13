import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Eye, EyeOff, ChevronDown, User, Phone, Check } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Login form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userType, setUserType] = useState<'Doctor' | 'Patient' | 'Admin'>('Doctor');

  // Sign Up form states
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const userTypes = ['Doctor', 'Patient', 'Admin'] as const;

  const passwordRequirements = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'One Uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'One lowercase letter', met: /[a-z]/.test(password) },
    { text: 'One Number', met: /\d/.test(password) },
    { text: 'One special character', met: /[!@#$%^&*+=]/.test(password) },
  ];

  // ✅ Navigate based on role
  const handleLogin = () => {
    if (userType === 'Doctor') {
      navigation.replace('DoctorFlow');
    } else if (userType === 'Patient') {
      navigation.replace('PatientFlow');
    } else if (userType === 'Admin') {
      navigation.replace('AdminFlow');
    }
  };

  const handleSignUp = () => {
    // For now signup behaves same as login
    handleLogin();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Logo */}
        <View className="items-center pt-12 pb-12">
          <Text className="text-3xl font-bold">
            <Text className="text-gray-900">Sara</Text>
            <Text className="text-blue-500">medico</Text>
          </Text>
        </View>

        {/* Tabs */}
        <View className="mx-6 mb-8 flex-row bg-gray-100 rounded-full p-1">
          <TouchableOpacity
            onPress={() => setActiveTab('login')}
            className={`flex-1 py-3 rounded-full ${activeTab === 'login' ? 'bg-blue-500' : ''}`}
          >
            <Text className={`text-center font-semibold ${activeTab === 'login' ? 'text-white' : 'text-gray-500'}`}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('signup')}
            className={`flex-1 py-3 rounded-full ${activeTab === 'signup' ? 'bg-blue-500' : ''}`}
          >
            <Text className={`text-center font-semibold ${activeTab === 'signup' ? 'text-white' : 'text-gray-500'}`}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* ================= LOGIN ================= */}
        {activeTab === 'login' && (
          <View className="px-6 gap-6">

            {/* Role Dropdown */}
            <View>
              <Text className="font-medium mb-2">Login as</Text>

              <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                className="border rounded-xl px-4 py-4 flex-row justify-between items-center"
              >
                <Text>{userType}</Text>
                <ChevronDown size={18} />
              </TouchableOpacity>

              {showDropdown && (
                <View className="border rounded-xl mt-2 overflow-hidden">
                  {userTypes.map(type => (
                    <TouchableOpacity
                      key={type}
                      onPress={() => {
                        setUserType(type);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-3 border-b"
                    >
                      <Text className={type === userType ? 'text-blue-500 font-semibold' : ''}>
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Email */}
            <View>
              <Text className="mb-2">Email</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={loginEmail}
                  onChangeText={setLoginEmail}
                  placeholder="email@example.com"
                  className="flex-1"
                />
                <Mail size={18} />
              </View>
            </View>

            {/* Password */}
            <View>
              <Text className="mb-2">Password</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={loginPassword}
                  onChangeText={setLoginPassword}
                  secureTextEntry={!showPassword}
                  className="flex-1"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              className="bg-blue-500 rounded-full py-4 items-center"
              onPress={handleLogin}
            >
              <Text className="text-white font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ================= SIGNUP ================= */}
        {activeTab === 'signup' && (
          <View className="px-6 gap-5">

            {/* Full Name */}
            <View>
              <Text className="mb-2">Full Name</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput value={fullName} onChangeText={setFullName} className="flex-1" />
                <User size={18} />
              </View>
            </View>

            {/* Email */}
            <View>
              <Text className="mb-2">Email</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput value={workEmail} onChangeText={setWorkEmail} className="flex-1" />
                <Mail size={18} />
              </View>
            </View>

            {/* Phone */}
            <View>
              <Text className="mb-2">Phone</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput value={phone} onChangeText={setPhone} className="flex-1" />
                <Phone size={18} />
              </View>
            </View>

            {/* Password */}
            <View>
              <Text className="mb-2">Password</Text>
              <View className="border rounded-xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className="flex-1"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms */}
            <TouchableOpacity
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              className="flex-row items-center"
            >
              <Check size={16} color={agreeToTerms ? 'green' : 'gray'} />
              <Text className="ml-2">I agree to Terms</Text>
            </TouchableOpacity>

            {/* Signup Button */}
            <TouchableOpacity
              disabled={!agreeToTerms}
              onPress={handleSignUp}
              className={`rounded-full py-4 items-center ${agreeToTerms ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <Text className="text-white font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
