import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Test = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availableGuards, setAvailableGuards] = useState([]);

  const searchGuards = () => {
    // Call an API endpoint that will return the available guards
    // between the start and end dates, and set the result to the
    // availableGuards state variable
    // You can use any API library to make the API call, such as Axios or Fetch
    fetch(`http://example.com/api/guards?start_date=${startDate}&end_date=${endDate}`)
      .then(response => response.json())
      .then(data => setAvailableGuards(data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GuardInfo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Start Date"
          value={startDate}
          onChangeText={text => setStartDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="End Date"
          value={endDate}
          onChangeText={text => setEndDate(text)}
        />
        <Button
          title="Search"
          onPress={searchGuards}
        />
      </View>
      <View style={styles.guardList}>
        {availableGuards.map(guard => (
          <Text key={guard.id} style={styles.guardName}>{guard.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  guardList: {
    marginTop: 20,
  },
  guardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});

export default Test;
