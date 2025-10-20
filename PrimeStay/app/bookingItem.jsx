import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookingItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f5f5f5', marginBottom: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: '600' },
  date: { fontSize: 14, color: '#666', marginTop: 4 },
  status: { fontSize: 14, color: '#007AFF', marginTop: 4 }
});

export default BookingItem;