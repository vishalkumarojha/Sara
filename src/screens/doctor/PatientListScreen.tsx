import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

type PatientListNavigationProp = NativeStackNavigationProp<DoctorStackParamList>;

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
  status: 'active' | 'inactive';
}

export default function PatientListScreen() {
  const navigation = useNavigation<PatientListNavigationProp>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const patients: Patient[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 45,
      condition: 'Hypertension',
      lastVisit: '2025-01-10',
      status: 'active',
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 32,
      condition: 'Diabetes',
      lastVisit: '2025-01-08',
      status: 'active',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      age: 28,
      condition: 'Asthma',
      lastVisit: '2025-01-05',
      status: 'inactive',
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      age: 55,
      condition: 'Arthritis',
      lastVisit: '2025-01-12',
      status: 'active',
    },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPatient = ({ item }: { item: Patient }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PatientDetail', { patientId: item.id })}
    >
      <Card style={styles.patientCard}>
        <View style={styles.patientHeader}>
          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>{item.name}</Text>
            <Text style={styles.patientAge}>Age: {item.age}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: item.status === 'active' ? colors.success : colors.gray400 }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
        <Text style={styles.condition}>{item.condition}</Text>
        <Text style={styles.lastVisit}>Last visit: {item.lastVisit}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Patients" />
      
      <View style={styles.content}>
        <Input
          placeholder="Search patients..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          containerStyle={styles.searchContainer}
        />
        
        <FlatList
          data={filteredPatients}
          renderItem={renderPatient}
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
  searchContainer: {
    marginVertical: spacing.md,
  },
  listContainer: {
    paddingBottom: spacing.lg,
  },
  patientCard: {
    marginBottom: spacing.md,
  },
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    ...typography.h5,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  patientAge: {
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
  condition: {
    ...typography.body1,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  lastVisit: {
    ...typography.body2,
    color: colors.textSecondary,
  },
});
