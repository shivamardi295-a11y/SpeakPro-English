import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>
        <Text style={styles.name}>Rahul Sharma</Text>
        <Text style={styles.level}>Beginner Level</Text>
      </View>

      <TouchableOpacity style={styles.rowCard} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.rowText}>Settings</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowCard}>
        <Text style={styles.rowText}>My achievements</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rowCard}>
        <Text style={styles.rowText}>Subscription</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 18 },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { fontSize: 32, fontWeight: '800', color: '#FFFFFF' },
  name: { fontSize: 24, fontWeight: '800', color: '#0F172A' },
  level: { color: '#64748B', marginTop: 6 },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  rowText: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  chevron: { fontSize: 24, color: '#64748B' },
});
