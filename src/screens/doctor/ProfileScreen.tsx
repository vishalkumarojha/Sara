import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Calendar,
  Users,
  FileText,
  Activity,
  Bell,
  Search,
  Clock,
} from 'lucide-react-native';

export default function DashboardScreen() {
  const appointments = [
    { id: 1, patient: 'John Smith', time: '09:00 AM', type: 'Consultation' },
    { id: 2, patient: 'Sarah Johnson', time: '10:30 AM', type: 'Follow-up' },
    { id: 3, patient: 'Mike Wilson', time: '02:00 PM', type: 'Check-up' },
  ];

  const stats = [
    { label: "Today's Patients", value: '12', icon: Users, color: 'bg-blue-500' },
    { label: 'Appointments', value: '8', icon: Calendar, color: 'bg-green-500' },
    { label: 'Prescriptions', value: '24', icon: FileText, color: 'bg-orange-500' },
    { label: 'Reports', value: '6', icon: Activity, color: 'bg-purple-500' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>

        {/* ================= Header ================= */}
        <View className="px-6 pt-4 pb-6">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-muted-foreground text-sm">Welcome back,</Text>
              <Text className="text-foreground text-2xl font-bold mt-1">
                Dr. Anderson
              </Text>
            </View>

            <View className="flex-row items-center gap-4">
              {/* Notification */}
              <TouchableOpacity className="relative">
                <Bell className="text-foreground" size={24} />
                <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              </TouchableOpacity>

              {/* Profile Avatar */}
              <TouchableOpacity className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center">
                <Text className="text-white font-bold">DA</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View className="bg-card border border-border rounded-2xl px-4 py-3 flex-row items-center">
            <Search className="text-muted-foreground mr-3" size={20} />
            <Text className="text-muted-foreground flex-1">
              Search patients, records...
            </Text>
          </View>
        </View>

        {/* ================= Stats Grid ================= */}
        <View className="px-6 mb-6">
          <View className="flex-row flex-wrap gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <View
                  key={index}
                  className="bg-card border border-border rounded-2xl p-4 basis-[48%]"
                >
                  <View
                    className={`${stat.color} w-10 h-10 rounded-xl items-center justify-center mb-3`}
                  >
                    <Icon color="white" size={20} />
                  </View>
                  <Text className="text-foreground text-2xl font-bold">
                    {stat.value}
                  </Text>
                  <Text className="text-muted-foreground text-xs mt-1">
                    {stat.label}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* ================= Today's Appointments ================= */}
        <View className="px-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-foreground text-lg font-bold">
              Today's Appointments
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-semibold">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {appointments.map((appointment) => (
              <View
                key={appointment.id}
                className="bg-card border border-border rounded-2xl p-4"
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center flex-1">
                    <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-3">
                      <Text className="text-blue-500 font-bold text-lg">
                        {appointment.patient
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </Text>
                    </View>

                    <View className="flex-1">
                      <Text className="text-foreground font-semibold">
                        {appointment.patient}
                      </Text>
                      <Text className="text-muted-foreground text-sm mt-1">
                        {appointment.type}
                      </Text>
                    </View>
                  </View>

                  <View className="items-end">
                    <View className="flex-row items-center">
                      <Clock className="text-blue-500 mr-1" size={14} />
                      <Text className="text-blue-500 font-semibold text-sm">
                        {appointment.time}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* ================= Quick Actions ================= */}
        <View className="px-6">
          <Text className="text-foreground text-lg font-bold mb-4">
            Quick Actions
          </Text>

          <View className="flex-row gap-3">
            <TouchableOpacity className="bg-blue-500 rounded-2xl p-4 flex-1 items-center">
              <Calendar color="white" size={24} />
              <Text className="text-white font-semibold mt-2 text-center">
                New Appointment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-card border border-border rounded-2xl p-4 flex-1 items-center">
              <FileText className="text-foreground" size={24} />
              <Text className="text-foreground font-semibold mt-2 text-center">
                Prescriptions
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
