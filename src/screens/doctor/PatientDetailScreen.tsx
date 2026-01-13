import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

type PatientDetailNavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'PatientDetail'>;
type PatientDetailRouteProp = RouteProp<DoctorStackParamList, 'PatientDetail'>;

export default function PatientDetailScreen() {
  const navigation = useNavigation<PatientDetailNavigationProp>();
  const route = useRoute<PatientDetailRouteProp>();
  const { patientId } = route.params;

  // Mock patient data
  const patient = {
    id: patientId,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
    address: '123 Main St, City, State 12345',
    condition: 'Hypertension',
    allergies: ['Penicillin', 'Shellfish'],
    medications: ['Lisinopril 10mg', 'Metformin 500mg'],
    lastVisit: '2025-01-10',
    nextAppointment: '2025-01-20',
  };

  const vitals = [
    { label: 'Blood Pressure', value: '140/90 mmHg', status: 'high' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { label: 'Temperature', value: '98.6°F', status: 'normal' },
    { label: 'Weight', value: '180 lbs', status: 'normal' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return colors.error;
      case 'low': return colors.warning;
      default: return colors.success;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Patient Details"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{patient.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{patient.age} years</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{patient.gender}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{patient.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{patient.email}</Text>
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Current Vitals</Text>
          {vitals.map((vital, index) => (
            <View key={index} style={styles.vitalRow}>
              <Text style={styles.vitalLabel}>{vital.label}</Text>
              <Text style={[styles.vitalValue, { color: getStatusColor(vital.status) }]}>
                {vital.value}
              </Text>
            </View>
          ))}
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Primary Condition:</Text>
            <Text style={styles.value}>{patient.condition}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Allergies:</Text>
            <Text style={styles.value}>{patient.allergies.join(', ')}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Current Medications:</Text>
            <Text style={styles.value}>{patient.medications.join(', ')}</Text>
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Appointments</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Last Visit:</Text>
            <Text style={styles.value}>{patient.lastVisit}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Next Appointment:</Text>
            <Text style={styles.value}>{patient.nextAppointment}</Text>
          </View>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Consultation', { appointmentId: '1' })}
            style={styles.button}
          />
          <Button
            title="Schedule Appointment"
            variant="outline"
            onPress={() => {}}
            style={styles.button}
          />
        </View>
      </ScrollView>
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
  section: {
    marginVertical: spacing.sm,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.body1,
    color: colors.textSecondary,
    flex: 1,
  },
  value: {
    ...typography.body1,
    color: colors.text,
    flex: 2,
    textAlign: 'right',
  },
  vitalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  vitalLabel: {
    ...typography.body1,
    color: colors.text,
  },
  vitalValue: {
    ...typography.body1,
    fontWeight: '600',
  },
  buttonContainer: {
    marginVertical: spacing.lg,
  },
  button: {
    marginBottom: spacing.md,
  },
});
