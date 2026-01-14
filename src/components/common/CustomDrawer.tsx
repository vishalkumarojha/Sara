import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, ScrollView, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

interface CustomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
}

const { width } = Dimensions.get('window');

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isVisible, onClose }) => {
  const [translateX] = React.useState(new Animated.Value(-width));

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Modal transparent visible={isVisible} animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <Animated.View style={[styles.drawerContainer, { transform: [{ translateX }] }]}>
          <View style={styles.header}>
            <View style={styles.profileSection}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80' }} 
                style={styles.avatar} 
              />
              <Text style={styles.userName}>Dr. Rajeev Bhatia</Text>
              <Text style={styles.userRole}>Cardiologist</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuContainer}>
            <TouchableOpacity style={styles.activeMenuItem}>
              <Ionicons name="home" size={22} color={colors.primary} />
              <Text style={styles.activeMenuText}>Home</Text>
            </TouchableOpacity>

            <Text style={styles.sectionHeader}>CLINICAL TOOLS</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="mic-outline" size={22} color={colors.text} />
              <Text style={styles.menuText}>Live Consult</Text>
            </TouchableOpacity>

            <Text style={styles.sectionHeader}>PRACTICE</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="folder-outline" size={22} color={colors.text} />
              <Text style={styles.menuText}>Patients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="people-outline" size={22} color={colors.text} />
              <Text style={styles.menuText}>Team</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  drawerContainer: { width: width * 0.75, height: '100%', backgroundColor: colors.white, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  profileSection: { flex: 1 },
  avatar: { width: 70, height: 70, borderRadius: 35, marginBottom: spacing.sm },
  userName: { ...typography.h3, color: colors.text, fontWeight: '700' },
  userRole: { ...typography.body2, color: colors.textSecondary },
  closeButton: { padding: spacing.xs },
  menuContainer: { flex: 1, paddingHorizontal: spacing.md },
  activeMenuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F7FF', borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, marginBottom: spacing.xs },
  activeMenuText: { ...typography.body1, color: colors.primary, fontWeight: '600', marginLeft: spacing.md },
  menuText: { ...typography.body1, color: colors.text, marginLeft: spacing.md },
  sectionHeader: { ...typography.caption, color: colors.textSecondary, fontWeight: '700', marginTop: spacing.lg, marginBottom: spacing.sm, marginLeft: spacing.md },
});

export default CustomDrawer;