import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { grammarTopics } from '../data/content';

export default function GrammarScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Grammar</Text>
      <Text style={styles.subtitle}>Build correct sentences step by step.</Text>

      {grammarTopics.map((item, index) => (
        <View key={item} style={styles.topicCard}>
          <Text style={styles.topicNumber}>{index + 1}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.topicTitle}>{item}</Text>
            <Text style={styles.topicText}>Learn the rules, see examples, and practice with a short exercise.</Text>
          </View>
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
  topicCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DBEAFE',
    textAlign: 'center',
    lineHeight: 34,
    fontWeight: '800',
    color: '#1D4ED8',
    marginRight: 12,
  },
  topicTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A', marginBottom: 4 },
  topicText: { color: '#64748B', lineHeight: 20 },
});
