import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import CustomDrawer from '../../components/common/CustomDrawer';
import { colors } from '../../theme/colors';

export default function DoctorDashboardScreen() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const rightComponent = (
    <View style={styles.rightIcons}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=40&q=80' }} 
        style={styles.headerAvatar} 
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Dashboard" 
        showMenuButton={true}
        onMenuPress={() => setDrawerVisible(true)}
        rightComponent={rightComponent}
      />
      
      {/* Rest of your dashboard content */}

      <CustomDrawer 
        isVisible={isDrawerVisible} 
        onClose={() => setDrawerVisible(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  rightIcons: { flexDirection: 'row', alignItems: 'center' },
  headerAvatar: { width: 34, height: 34, borderRadius: 17, marginLeft: 10 },
});