import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

type AppointmentsNavigationProp = NativeStackNavigationProp<DoctorStackParamList>;

interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  time: string;
  date: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  duration: string;
}

export default function AppointmentsScreen() {
  const navigation = useNavigation<AppointmentsNavigationProp>();

  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      patientId: '1',
      time: '09:00 AM',
      date: '2025-01-15',
      type: 'Consultation',
      status: 'scheduled',
      duration: '30 min',
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      patientId: '2',
      time: '10:30 AM',
      date: '2025-01-15',
      type: 'Follow-up',
      status: 'scheduled',
      duration: '15 min',
    },
    {
      id: '3',
      patientName: 'Mike Johnson',
      patientId: '3',
      time: '02:00 PM',
      date: '2025-01-15',
      type: 'Check-up',
      status: 'completed',
      duration: '45 min',
    },
    {
      id: '4',
      patientName: 'Sarah Wilson',
      patientId: '4',
      time: '03:30 PM',
      date: '2025-01-15',
      type: 'Consultation',
      status: 'scheduled',
      duration: '30 min',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return colors.primary;
      case 'completed': return colors.success;
      case 'cancelled': return colors.error;
      default: return colors.gray500;
    }
  };

  const renderAppointment = ({ item }: { item: Appointment }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PatientDetail', { patientId: item.patientId })}
    >
      <Card style={styles.appointmentCard}>
        <View style={styles.appointmentHeader}>
          <View style={styles.appointmentInfo}>
            <Text style={styles.patientName}>{item.patientName}</Text>
            <Text style={styles.appointmentType}>{item.type}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
        
        <View style={styles.appointmentDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Time:</Text>
            <Text style={styles.detailValue}>{item.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Duration:</Text>
            <Text style={styles.detailValue}>{item.duration}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{item.date}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Appointments" />
      
      <View style={styles.content}>
        <View style={styles.summaryContainer}>
          <Card style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Today's Schedule</Text>
            <Text style={styles.summaryCount}>{appointments.filter(a => a.status === 'scheduled').length} appointments</Text>
          </Card>
        </View>
        
        <FlatList
          data={appointments}
          renderItem={renderAppointment}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  summaryContainer: {
    marginVertical: spacing.md,
  },
  summaryCard: {
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  summaryTitle: {
    ...typography.h5,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  summaryCount: {
    ...typography.h3,
    color: colors.white,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: spacing.lg,
  },
  appointmentCard: {
    marginBottom: spacing.md,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  appointmentInfo: {
    flex: 1,
  },
  patientName: {
    ...typography.h5,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  appointmentType: {
    ...typography.body2,
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  statusText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  appointmentDetails: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  detailLabel: {
    ...typography.body2,
    color: colors.textSecondary,
  },
  detailValue: {
    ...typography.body2,
    color: colors.text,
    fontWeight: '600',
  },
});
