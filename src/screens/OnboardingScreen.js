import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { onboardingData } from '../data/content';

export default function OnboardingScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#EFF6FF', '#F8FAFC', '#E2E8F0']} style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('Auth')}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Auth')}>
          <Text style={styles.secondaryText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  slide: {
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: 40,
  },
  emoji: {
    fontSize: 86,
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#475569',
    lineHeight: 24,
    paddingHorizontal: 18,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 42,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#2563EB',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
});
