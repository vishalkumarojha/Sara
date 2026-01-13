import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function DoctorDashboardScreen() {
  const stats = [
    { title: 'Today\'s Appointments', value: '8', color: colors.primary },
    { title: 'Pending Reviews', value: '3', color: colors.warning },
    { title: 'Total Patients', value: '156', color: colors.success },
    { title: 'This Week', value: '24', color: colors.info },
  ];

  const recentAppointments = [
    { id: '1', patient: 'John Doe', time: '09:00 AM', type: 'Consultation' },
    { id: '2', patient: 'Jane Smith', time: '10:30 AM', type: 'Follow-up' },
    { id: '3', patient: 'Mike Johnson', time: '02:00 PM', type: 'Check-up' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Dashboard" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Card key={index} style={[styles.statCard, { borderLeftColor: stat.color }]}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Appointments</Text>
          {recentAppointments.map((appointment) => (
            <Card key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentRow}>
                <View style={styles.appointmentInfo}>
                  <Text style={styles.patientName}>{appointment.patient}</Text>
                  <Text style={styles.appointmentType}>{appointment.type}</Text>
                </View>
                <Text style={styles.appointmentTime}>{appointment.time}</Text>
              </View>
            </Card>
          ))}
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
    marginVertical: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    alignItems: 'center',
  },
  statValue: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statTitle: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  appointmentCard: {
    marginBottom: spacing.sm,
  },
  appointmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentInfo: {
    flex: 1,
  },
  patientName: {
    ...typography.body1,
    color: colors.text,
    fontWeight: '600',
  },
  appointmentType: {
    ...typography.body2,
    color: colors.textSecondary,
  },
  appointmentTime: {
    ...typography.body2,
    color: colors.primary,
    fontWeight: '600',
  },
});
