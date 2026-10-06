import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthScreen({ navigation }) {
  return (
    <LinearGradient colors={['#F8FAFC', '#E0F2FE']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Welcome back</Text>
        <Text style={styles.subheader}>Continue your English journey</Text>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('Main')}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>Create an account</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
  header: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
    fontSize: 15,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0F172A',
    fontWeight: '600',
  },
  linkText: {
    marginTop: 18,
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: '700',
  },
});
