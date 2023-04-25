import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleSelectProfilePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    }
  };

  const handleTakeProfilePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profilePhotoContainer} onPress={handleSelectProfilePhoto}>
        {profilePhoto ? (
          <Image style={styles.profilePhoto} source={{ uri: profilePhoto }} />
        ) : (
          <Text style={styles.selectProfilePhotoText}>Select Profile Photo</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraButton} onPress={handleTakeProfilePhoto}>
        <Text style={styles.cameraButtonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  profilePhotoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  selectProfilePhotoText: {
    fontSize: 16,
    color: '#555555',
  },
  cameraButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  cameraButtonText: {
    fontSize: 16,
    color: '#555555',
  },
  saveButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default EditProfile;
