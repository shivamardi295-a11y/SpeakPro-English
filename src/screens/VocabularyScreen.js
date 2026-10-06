import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { vocabularyData } from '../data/content';

export default function VocabularyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Vocabulary Builder</Text>
      <Text style={styles.subtitle}>Grow your words with examples and pronunciation.</Text>

      {vocabularyData.map((item, index) => (
        <View key={index} style={styles.wordCard}>
          <Text style={styles.word}>{item.word}</Text>
          <Text style={styles.meaning}>{item.meaning}</Text>
          <Text style={styles.example}>Example: {item.example}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, paddingBottom: 40 },
  header: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#64748B', marginBottom: 18 },
  wordCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  word: { fontSize: 22, fontWeight: '800', color: '#0F172A', marginBottom: 6 },
  meaning: { fontSize: 15, color: '#2563EB', fontWeight: '700', marginBottom: 8 },
  example: { color: '#475569', lineHeight: 20 },
  category: { marginTop: 10, fontWeight: '700', color: '#0F172A' },
});
