import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PracticeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Speaking Practice</Text>
      <Text style={styles.subtitle}>Listen, speak, record, and improve your confidence.</Text>

      <View style={styles.card}>
        <Text style={styles.emoji}>🎤</Text>
        <Text style={styles.topic}>Tell me about yourself.</Text>
        <Text style={styles.note}>Listen to the prompt and speak for 30 seconds.</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Start Practice</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listCard}>
        <Text style={styles.listTitle}>Recommended topics</Text>
        {['Daily life', 'Family', 'Travel', 'Work', 'Hobbies', 'Interviews'].map((item) => (
          <View key={item} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#64748B', marginBottom: 18 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    marginBottom: 16,
  },
  emoji: { fontSize: 54, marginBottom: 10 },
  topic: { fontSize: 24, fontWeight: '800', color: '#0F172A', marginBottom: 8 },
  note: { fontSize: 15, color: '#64748B', textAlign: 'center', marginBottom: 18 },
  primaryButton: { backgroundColor: '#2563EB', borderRadius: 16, paddingHorizontal: 22, paddingVertical: 14 },
  primaryButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  listCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, borderWidth: 1, borderColor: '#E2E8F0' },
  listTitle: { fontSize: 20, fontWeight: '800', color: '#0F172A', marginBottom: 10 },
  listItem: { backgroundColor: '#EFF6FF', borderRadius: 12, padding: 12, marginBottom: 8 },
  listItemText: { fontWeight: '600', color: '#0F172A' },
});
