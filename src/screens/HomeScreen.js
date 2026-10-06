import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { lessonData, progressStats } from '../data/content';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Good Morning, Rahul 👋</Text>
      <Text style={styles.subtitle}>Ready to improve your English today?</Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Today’s goal</Text>
        <Text style={styles.heroTitle}>15 minutes</Text>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.heroMeta}>60% complete</Text>
      </View>

      <View style={styles.row}>
        <StatCard title="Current Level" value={progressStats.currentLevel} color="#2563EB" />
        <StatCard title="XP" value={`${progressStats.xp}`} color="#10B981" />
      </View>

      <View style={styles.row}>
        <StatCard title="Streak" value={`${progressStats.streak} days`} color="#F59E0B" />
        <StatCard title="Speaking" value={`${progressStats.speakingMinutes} min`} color="#8B5CF6" />
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <Text style={styles.link}>View all</Text>
      </View>

      {lessonData.slice(0, 2).map((lesson) => (
        <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
          <Text style={styles.lessonLevel}>{lesson.level}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <Text style={styles.lessonDescription}>{lesson.description}</Text>
          <Text style={styles.lessonMeta}>{lesson.duration} • {lesson.xp} XP</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function StatCard({ title, value, color }) {
  return (
    <View style={[styles.statCard, { borderColor: color }]}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 20,
  },
  heroCard: {
    backgroundColor: '#1E3A8A',
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
  },
  heroLabel: {
    color: '#DBEAFE',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    marginTop: 8,
  },
  progressTrack: {
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 14,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 10,
  },
  heroMeta: {
    color: '#DBEAFE',
    marginTop: 10,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  statTitle: {
    color: '#475569',
    fontSize: 12,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  link: {
    color: '#2563EB',
    fontWeight: '700',
  },
  lessonCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  lessonLevel: {
    color: '#2563EB',
    fontWeight: '700',
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  lessonMeta: {
    marginTop: 10,
    color: '#334155',
    fontWeight: '700',
  },
});
