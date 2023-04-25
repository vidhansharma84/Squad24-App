import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GuardInfoScreen = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availableGuards, setAvailableGuards] = useState([]);

  const handleSearch = () => {
    // TODO: implement search functionality
    // For now, we'll just display some dummy data
    setAvailableGuards([
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start Date:</Text>
      <TextInput
        style={styles.input}
        value={startDate}
        onChangeText={setStartDate}
        placeholder="MM/DD/YYYY"
      />
      <Text style={styles.label}>End Date:</Text>
      <TextInput
        style={styles.input}
        value={endDate}
        onChangeText={setEndDate}
        placeholder="MM/DD/YYYY"
      />
      <Text style={styles.label}>Start Time:</Text>
      <TextInput
        style={styles.input}
        value={startTime}
        onChangeText={setStartTime}
        placeholder="HH:MM AM/PM"
      />
      <Text style={styles.label}>End Time:</Text>
      <TextInput
        style={styles.input}
        value={endTime}
        onChangeText={setEndTime}
        placeholder="HH:MM AM/PM"
      />
      <Button
        title="Search for Available Guards"
        onPress={handleSearch}
      />
      {availableGuards.length > 0 ? (
        <FlatList
          data={availableGuards}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.location}</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
      itemText: {
      fontSize: 16,
      },
      ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      },
      ratingText: {
      marginLeft: 4,
      },
      });
      
      export default GuardInfoScreen;