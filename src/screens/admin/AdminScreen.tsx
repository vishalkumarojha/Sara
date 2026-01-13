import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

type AdminScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AdminFlow'>;

export default function AdminScreen() {
  const navigation = useNavigation<AdminScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Admin Portal"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      
      <View style={styles.content}>
        <Card style={styles.card}>
          <Text style={styles.title}>Admin Module</Text>
          <Text style={styles.subtitle}>Under Construction</Text>
          <Text style={styles.description}>
            The admin portal is currently being developed. This module will include features such as:
          </Text>
          
          <View style={styles.featureList}>
            <Text style={styles.feature}>• User management</Text>
            <Text style={styles.feature}>• System configuration</Text>
            <Text style={styles.feature}>• Reports and analytics</Text>
            <Text style={styles.feature}>• Hospital management</Text>
            <Text style={styles.feature}>• Staff scheduling</Text>
            <Text style={styles.feature}>• Billing and payments</Text>
          </View>
          
          <Text style={styles.comingSoon}>Coming Soon!</Text>
          
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          />
        </Card>
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
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  card: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  title: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.h4,
    color: colors.secondary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  description: {
    ...typography.body1,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  featureList: {
    alignSelf: 'stretch',
    marginBottom: spacing.lg,
  },
  feature: {
    ...typography.body1,
    color: colors.text,
    marginBottom: spacing.sm,
    paddingLeft: spacing.md,
  },
  comingSoon: {
    ...typography.h5,
    color: colors.accent,
    marginBottom: spacing.xl,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    minWidth: 200,
  },
});
