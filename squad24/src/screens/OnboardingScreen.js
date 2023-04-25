import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Welcome to MyApp!",
      subtitle: "Get started with our awesome app!",
      image: require("../images/guard.png"),
      buttonText: "Get Started",
      onPress: () => setCurrentPage(1)
    },
    {
      title: "Discover",
      subtitle: "Discover new features and functionality",
      image: require("../images/features.png"),
      buttonText: "Continue",
      onPress: () => setCurrentPage(2)
    },
    {
      title: "Connect",
      subtitle: "Connect with the Active Guards",
      image: require("../images/connect.png"),
      buttonText: "Continue",
      onPress: () => setCurrentPage(3)
    },
    {
      title: "Join the Community",
      subtitle: "Join our community and get the latest updates",
      image: require("../images/community.png"),
      buttonText: "Continue",
      onPress: () => navigation.navigate('Main'),
    }
  ];

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={pages[currentPage].image} style={styles.image} />
      <Text style={styles.title}>{pages[currentPage].title}</Text>
      <Text style={styles.subtitle}>{pages[currentPage].subtitle}</Text>
      <View style={styles.buttonContainer}>
        {currentPage > 0 && (
          <TouchableOpacity style={[styles.button, { width: '80%', marginBottom: 10 }]} onPress={handlePrev}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.button, { width: '85%' }]} onPress={pages[currentPage].onPress}>
          <Text style={styles.buttonText}>{pages[currentPage].buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  image: {
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default OnboardingScreen;
