import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GuardInfoScreen = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availableGuards, setAvailableGuards] = useState([]);

  const handleSearch = () => {
    // TODO: implement search functionality
    // For now, we'll just display some dummy data
    setAvailableGuards([
      {
        id: '1',
        name: 'John Doe',
        location: 'New York, NY',
        rating: '4.5',
        image: require('../images/guard1.png'),
      },
      {
        id: '2',
        name: 'Jane Smith',
        location: 'Los Angeles, CA',
        rating: '4.8',
        image: require('../images/guard2.png'),
      },
      {
        id: '3',
        name: 'William Johnson',
        location: 'Chicago, IL',
        rating: '4.2',
        image: require('../images/guard3.png'),
      },
      {
        id: '4',
        name: 'Maria Rodriguez',
        location: 'Miami, FL',
        rating: '4.7',
        image: require('../images/guard4.png'),
      },
      {
        id: '5',
        name: 'Michael Lee',
        location: 'San Francisco, CA',
        rating: '4.9',
        image: require('../images/guard1.png'),
      }
    ]);
  };

  const handleHireGuard = (guardId) => {
    // Navigate to the hiring screen and pass the guard ID as a parameter
    navigation.navigate('LiveLocationScreen', { guardId });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Start Date:</Text>
          <TextInput
            style={styles.input}
            value={startDate}
            onChangeText={setStartDate}
            placeholder="MM/DD/YYYY"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>End Date:</Text>
          <TextInput
            style={styles.input}
            value={endDate}
            onChangeText={setEndDate}
            placeholder="MM/DD/YYYY"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Start Time:</Text>
          <TextInput
            style={styles.input}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="HH:MM AM/PM"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>End Time:</Text>
          <TextInput
            style={styles.input}
            value={endTime}
            onChangeText={setEndTime}
            placeholder="HH:MM AM/PM"
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007AFF' }]}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Search for Available Guards</Text>
      </TouchableOpacity>
      {availableGuards.length > 0 && (
        <FlatList
          data={availableGuards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  style={styles.image}
                />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.location}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={16} color="#FFC107" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.hireButton}
                onPress={() => handleHireGuard(item.id)}
              >
                <Text style={styles.hireButtonText}>Hire</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    color: '#333',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#888',
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
  hireButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 'auto',
  },
  hireButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default GuardInfoScreen;