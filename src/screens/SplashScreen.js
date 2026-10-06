import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#0F172A', '#2563EB', '#38BDF8']} style={styles.container}>
      <View style={styles.logoBubble}>
        <Text style={styles.logoText}>S</Text>
      </View>
      <Text style={styles.title}>SpeakPro English</Text>
      <Text style={styles.tagline}>Learn English. Speak Confidently.</Text>
      <ActivityIndicator size="small" color="#FFFFFF" style={styles.loader} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoBubble: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 54,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#E0F2FE',
    marginBottom: 24,
  },
  loader: {
    marginTop: 16,
  },
});
