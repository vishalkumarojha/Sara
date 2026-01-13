import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Lock, Eye, EyeOff, ChevronDown, User, Phone, Check } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Login form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userType, setUserType] = useState('Doctor');

  // Sign Up form states
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Password requirements
  const passwordRequirements = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'One Uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'One lowercase letter', met: /[a-z]/.test(password) },
    { text: 'One Number', met: /\d/.test(password) },
    { text: 'One special character (!@#$%^&*+=)', met: /[!@#$%^&*+=]/.test(password) },
  ];

  const userTypes = ['Doctor', 'Patient', 'Admin', 'Pharmacy'];

  const handleSignUp = () => {
    router.push('/verification');
  };

  const handleLogin = () => {
    router.push('/verification');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Logo Section */}
        <View className="items-center pt-12 pb-12">
          <View className="flex-row items-center">
            <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mr-3">
              <View className="w-10 h-2 bg-white rounded-full mb-1" />
              <View className="w-10 h-2 bg-white rounded-full" />
              <View className="w-6 h-6 bg-white rounded-full absolute bottom-2 right-2" style={{ opacity: 0.9 }} />
            </View>
            <Text className="text-3xl font-bold">
              <Text className="text-gray-900">Sara</Text>
              <Text className="text-blue-500">medico</Text>
            </Text>
          </View>
        </View>

        {/* Tab Switcher */}
        <View className="mx-6 mb-8 flex-row bg-gray-100 rounded-full p-1">
          <TouchableOpacity
            onPress={() => setActiveTab('login')}
            className={`flex-1 py-3 rounded-full ${activeTab === 'login' ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            <Text className={`text-center font-semibold ${activeTab === 'login' ? 'text-white' : 'text-gray-500'}`}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('signup')}
            className={`flex-1 py-3 rounded-full ${activeTab === 'signup' ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            <Text className={`text-center font-semibold ${activeTab === 'signup' ? 'text-white' : 'text-gray-500'}`}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Form */}
        {activeTab === 'login' && (
          <View className="px-6 gap-6">
            {/* Login As Dropdown */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Login as</Text>
              <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center justify-between"
              >
                <Text className="text-gray-900 text-base">{userType}</Text>
                <ChevronDown className="text-gray-500" size={20} />
              </TouchableOpacity>
              
              {showDropdown && (
                <View className="bg-white border border-gray-200 rounded-2xl mt-2 overflow-hidden">
                  {userTypes.map((type) => (
                    <TouchableOpacity
                      key={type}
                      onPress={() => {
                        setUserType(type);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-3 border-b border-gray-200"
                    >
                      <Text className={`text-base ${type === userType ? 'text-blue-500 font-semibold' : 'text-gray-900'}`}>
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Work Email Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Work Email</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={loginEmail}
                  onChangeText={setLoginEmail}
                  placeholder="dr.name@hospital.org"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Mail className="text-gray-500 ml-2" size={20} />
              </View>
            </View>

            {/* Password Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Password</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={loginPassword}
                  onChangeText={setLoginPassword}
                  placeholder="••••••••••••••"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="ml-2">
                  {showPassword ? (
                    <EyeOff className="text-gray-500" size={20} />
                  ) : (
                    <Eye className="text-gray-500" size={20} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end">
              <Text className="text-blue-500 font-medium">Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity 
              className="bg-blue-500 rounded-full py-4 items-center shadow-lg"
              onPress={handleLogin}
            >
              <Text className="text-white font-bold text-base">Login</Text>
            </TouchableOpacity>

            {/* Social Login Buttons */}
            <View className="gap-3 mt-2">
              <TouchableOpacity className="bg-white border border-gray-200 rounded-full py-4 flex-row items-center justify-center">
                <View className="w-6 h-6 bg-black rounded mr-3 items-center justify-center">
                  <Text className="text-white text-xs font-bold"></Text>
                </View>
                <Text className="text-gray-900 font-semibold">Continue with Apple ID</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white border border-gray-200 rounded-full py-4 flex-row items-center justify-center">
                <View className="w-6 h-6 mr-3 items-center justify-center">
                  <Text className="text-2xl">G</Text>
                </View>
                <Text className="text-gray-900 font-semibold">Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Sign Up Form */}
        {activeTab === 'signup' && (
          <View className="px-6 gap-5">
            {/* Info Text */}
            <View className="bg-blue-50 p-4 rounded-2xl mb-2">
              <Text className="text-gray-900 text-sm leading-5">
                Roles define access to clinical features.{'\n'}
                This role can't be changed later
              </Text>
            </View>

            {/* Full Name Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Full Name</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Your Name"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                />
                <User className="text-gray-500 ml-2" size={20} />
              </View>
            </View>

            {/* Work Email Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Work Email</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={workEmail}
                  onChangeText={setWorkEmail}
                  placeholder="dr.name@hospital.org"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Mail className="text-gray-500 ml-2" size={20} />
              </View>
            </View>

            {/* Phone Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Phone</Text>
              <View className="flex-row gap-3">
                <TouchableOpacity className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center w-24">
                  <Text className="text-xl mr-2">🇺🇸</Text>
                  <Text className="text-gray-900 font-medium">{countryCode}</Text>
                  <ChevronDown className="text-gray-500 ml-1" size={16} />
                </TouchableOpacity>
                <View className="flex-1 bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                  <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="XXX-XXX-XXX"
                    placeholderTextColor="#999"
                    className="flex-1 text-gray-900 text-base"
                    keyboardType="phone-pad"
                  />
                  <Phone className="text-gray-500 ml-2" size={20} />
                </View>
              </View>
              <Text className="text-gray-500 text-xs mt-2">
                Used only for verification & security
              </Text>
            </View>

            {/* Password Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Password</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••••••••"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="ml-2">
                  {showPassword ? (
                    <EyeOff className="text-gray-500" size={20} />
                  ) : (
                    <Eye className="text-gray-500" size={20} />
                  )}
                </TouchableOpacity>
              </View>
              
              {/* Password Requirements */}
              <View className="mt-3 px-2">
                <Text className="text-gray-500 text-xs mb-2">
                  Use 8+ chars w/ a mix of letters, numbers & symbols.
                </Text>
                {passwordRequirements.map((req, index) => (
                  <View key={index} className="flex-row items-center mb-1">
                    <Check 
                      className={req.met ? 'text-green-500' : 'text-gray-400'} 
                      size={14} 
                    />
                    <Text className={`text-xs ml-2 ${req.met ? 'text-green-500' : 'text-gray-500'}`}>
                      {req.text}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Confirm Password Input */}
            <View>
              <Text className="text-gray-900 font-medium mb-3">Confirm Password</Text>
              <View className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex-row items-center">
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Re-enter password"
                  placeholderTextColor="#999"
                  className="flex-1 text-gray-900 text-base"
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} className="ml-2">
                  {showConfirmPassword ? (
                    <EyeOff className="text-gray-500" size={20} />
                  ) : (
                    <Eye className="text-gray-500" size={20} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms & Conditions */}
            <TouchableOpacity 
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              className="flex-row items-start"
            >
              <View className={`w-5 h-5 rounded border-2 ${agreeToTerms ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} items-center justify-center mr-3 mt-0.5`}>
                {agreeToTerms && <Check className="text-white" size={14} />}
              </View>
              <Text className="text-gray-900 text-sm flex-1">
                I agree to the{' '}
                <Text className="text-blue-500 font-medium">Terms of Service</Text>
                {' '}and{' '}
                <Text className="text-blue-500 font-medium">Privacy Policy</Text>.
              </Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity 
              className={`rounded-full py-4 items-center shadow-lg ${agreeToTerms ? 'bg-blue-500' : 'bg-gray-200'}`}
              onPress={handleSignUp}
              disabled={!agreeToTerms}
            >
              <Text className={`font-bold text-base ${agreeToTerms ? 'text-white' : 'text-gray-400'}`}>
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* Social Login Buttons */}
            <View className="gap-3 mt-2">
              <TouchableOpacity className="bg-white border border-gray-200 rounded-full py-4 flex-row items-center justify-center">
                <View className="w-6 h-6 bg-black rounded mr-3 items-center justify-center">
                  <Text className="text-white text-xs font-bold"></Text>
                </View>
                <Text className="text-gray-900 font-semibold">Continue with Apple ID</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white border border-gray-200 rounded-full py-4 flex-row items-center justify-center">
                <View className="w-6 h-6 mr-3 items-center justify-center">
                  <Text className="text-2xl">G</Text>
                </View>
                <Text className="text-gray-900 font-semibold">Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}