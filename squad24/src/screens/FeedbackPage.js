import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Please enter your feedback');
    } else {
      // Here you can send the feedback to your server or do any other processing you need to do
      Alert.alert('Thank you for your feedback!');
      setFeedback('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Please enter your feedback:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 200,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default FeedbackPage;
