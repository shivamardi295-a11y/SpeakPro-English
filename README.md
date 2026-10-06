import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingCard}>
        <Text style={styles.settingLabel}>Daily reminders</Text>
        <Switch value={true} />
      </View>

      <View style={styles.settingCard}>
        <Text style={styles.settingLabel}>Audio playback</Text>
        <Switch value={true} />
      </View>

      <View style={styles.settingCard}>
        <Text style={styles.settingLabel}>Study notifications</Text>
        <Switch value={false} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 18 },
  settingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
});
