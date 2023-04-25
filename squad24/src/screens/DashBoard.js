import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Active Guards</Text>
        <Text style={styles.metricValue}>10</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Incidents Reported</Text>
        <Text style={styles.metricValue}>5</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Revenue Generated</Text>
        <Text style={styles.metricValue}>$1000</Text>
      </View>
      <View style={styles.quickLinksContainer}>
        <Text style={styles.quickLink}>View Guards</Text>
        <Text style={styles.quickLink}>View Incidents</Text>
        <Text style={styles.quickLink}>View Reports</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  metricContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  metricTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 24,
  },
  quickLinksContainer: {
    marginTop: 20,
  },
  quickLink: {
    fontSize: 16,
    marginBottom: 10,
    color: '#007bff',
  },
});

export default DashBoard;
