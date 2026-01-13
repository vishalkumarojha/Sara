import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

type ConsultationNavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'Consultation'>;
type ConsultationRouteProp = RouteProp<DoctorStackParamList, 'Consultation'>;

export default function ConsultationScreen() {
  const navigation = useNavigation<ConsultationNavigationProp>();
  const route = useRoute<ConsultationRouteProp>();
  const { appointmentId } = route.params;

  const [symptoms, setSymptoms] = React.useState('');
  const [diagnosis, setDiagnosis] = React.useState('');
  const [prescription, setPrescription] = React.useState('');
  const [notes, setNotes] = React.useState('');

  // Mock appointment data
  const appointment = {
    id: appointmentId,
    patient: 'John Doe',
    time: '09:00 AM',
    date: '2025-01-15',
    type: 'Consultation',
  };

  const handleSaveConsultation = () => {
    // Here you would save the consultation data
    console.log('Saving consultation:', {
      appointmentId,
      symptoms,
      diagnosis,
      prescription,
      notes,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Consultation"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Appointment Details</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Patient:</Text>
            <Text style={styles.value}>{appointment.patient}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{appointment.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>{appointment.time}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{appointment.type}</Text>
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Form</Text>
          
          <Input
            label="Symptoms"
            placeholder="Describe patient symptoms..."
            value={symptoms}
            onChangeText={setSymptoms}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />

          <Input
            label="Diagnosis"
            placeholder="Enter diagnosis..."
            value={diagnosis}
            onChangeText={setDiagnosis}
            multiline
            numberOfLines={3}
            style={styles.textArea}
          />

          <Input
            label="Prescription"
            placeholder="Enter medications and dosage..."
            value={prescription}
            onChangeText={setPrescription}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />

          <Input
            label="Additional Notes"
            placeholder="Any additional notes or recommendations..."
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Save Consultation"
            onPress={handleSaveConsultation}
            style={styles.button}
          />
          <Button
            title="Save as Draft"
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginVertical: spacing.lg,
  },
  button: {
    marginBottom: spacing.md,
  },
});
