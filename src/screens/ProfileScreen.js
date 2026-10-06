import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { progressStats } from '../data/content';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Progress</Text>
      <Text style={styles.subtitle}>Track your learning journey.</Text>

      <View style={styles.grid}>
        <StatItem label="Lessons" value={`${progressStats.lessonsCompleted}`} />
        <StatItem label="Vocabulary" value={`${progressStats.vocabLearned}`} />
        <StatItem label="Minutes" value={`${progressStats.speakingMinutes}`} />
        <StatItem label="Streak" value={`${progressStats.streak}d`} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current level</Text>
        <Text style={styles.level}>{progressStats.currentLevel}</Text>
        <Text style={styles.cardText}>You are making excellent progress. Keep practicing daily to improve fluency.</Text>
      </View>
    </ScrollView>
  );
}

function StatItem({ label, value }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#64748B', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 18 },
  statBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statValue: { fontSize: 26, fontWeight: '800', color: '#0F172A' },
  statLabel: { fontSize: 13, color: '#64748B', marginTop: 8 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTitle: { fontSize: 14, color: '#64748B', marginBottom: 8 },
  level: { fontSize: 30, fontWeight: '800', color: '#2563EB', marginBottom: 8 },
  cardText: { fontSize: 15, color: '#475569', lineHeight: 22 },
});
