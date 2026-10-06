import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { lessonData, grammarTopics, vocabularyData } from '../data/content';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Learn</Text>
      <Text style={styles.subtitle}>Follow your guided English learning path.</Text>

      {lessonData.map((lesson) => (
        <TouchableOpacity key={lesson.id} style={styles.card}>
          <Text style={styles.badge}>{lesson.level}</Text>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.description}>{lesson.description}</Text>
          <Text style={styles.meta}>{lesson.duration} • {lesson.xp} XP</Text>
        </TouchableOpacity>
      ))}

      <Text style={[styles.header, { marginTop: 20 }]}>Grammar Topics</Text>
      <View style={styles.tagWrap}>
        {grammarTopics.map((item) => (
          <View key={item} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
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
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  badge: { color: '#2563EB', fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 20, fontWeight: '800', color: '#0F172A', marginBottom: 8 },
  description: { fontSize: 14, color: '#64748B', lineHeight: 20 },
  meta: { marginTop: 12, color: '#334155', fontWeight: '700' },
  tagWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { backgroundColor: '#E0F2FE', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8 },
  tagText: { color: '#0F172A', fontWeight: '600' },
});
