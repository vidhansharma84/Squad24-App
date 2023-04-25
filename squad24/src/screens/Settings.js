import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Linking, Alert, AppState, Platform, BackHandler } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';

function Settings() {
    const openWebsite = (url) => {
        Linking.openURL(url)
            .catch((err) => console.error('An error occurred', err));
    };
    const navigation = useNavigation();
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);


    const handleLogoutPress = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to log out and exit the app?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => BackHandler.exitApp()
                }
            ],
            { cancelable: false }
        );
    }


    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
                setIsLocationEnabled(true); // Set state to true if permission granted
            } else {
                console.log('Location permission denied');
                setIsLocationEnabled(false); // Set state to false if permission denied
            }
        } catch (err) {
            console.warn(err);
        }
    };


    const handleClearCachePress = async () => {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Settings</Text>
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="cog" size={24} color="#444" />
                        </View>
                        <View style={styles.settingTextContainer}>
                            <Text style={styles.settingTitle}>Settings</Text>
                            <Text style={styles.settingDescription}>Personalize your experience and make it truly yours with our customizable settings.</Text>
                        </View>
                        <FontAwesome5 name="chevron-right" size={20} color="#444" />
                    </View>
                </TouchableOpacity>




                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="user" size={24} color="#444" />
                        </View>
                        <View style={styles.settingTextContainer}>
                            <Text style={styles.settingTitle}>Edit Profile</Text>
                            <Text style={styles.settingDescription}>Update your profile and put your best foot forward</Text>
                        </View>
                        <FontAwesome5 name="arrow-right" size={20} color="#444" />
                    </View>
                </TouchableOpacity>



                <View style={styles.settingRow}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="map-marker-alt" size={24} color="#444" />
                    </View>
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Location</Text>
                        <Text style={styles.settingDescription}>Allow the app to access your device's location</Text>
                    </View>
                    <Switch
                        value={isLocationEnabled}
                        onValueChange={(value) =>
                            value ? requestLocationPermission() : setIsLocationEnabled(false)
                        }
                    />
                </View>





                <View style={styles.settingRow}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="moon" size={24} color="#444" />
                    </View>
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Dark Mode</Text>
                        <Text style={styles.settingDescription}>Toggle between light and dark mode themes</Text>
                    </View>
                    <Switch
                        value={isDarkModeEnabled}
                        onValueChange={(value) => setIsDarkModeEnabled(value)}
                    />
                </View>



                <TouchableOpacity onPress={() => navigation.navigate('FeedbackPage')}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="comment" size={24} color="#444" />
                        </View>
                        <View style={styles.settingTextContainer}>
                            <Text style={styles.settingTitle}>Send Feedback</Text>
                            <Text style={styles.settingDescription}>Share your thoughts and help us improve the app</Text>
                        </View>
                        <FontAwesome5 name="arrow-right" size={20} color="#444" />
                    </View>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="info-circle" size={24} color="#444" />
                        </View>
                        <View style={styles.settingTextContainer}>
                            <Text style={styles.settingTitle}>About</Text>
                            <Text style={styles.settingDescription}>Learn more about the app and its creators</Text>
                        </View>
                        <FontAwesome5 name="arrow-right" size={20} color="#444" />
                    </View>
                </TouchableOpacity>




                <TouchableOpacity onPress={handleLogoutPress}>
                    <View style={styles.settingRow}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="sign-out-alt" size={24} color="#444" />
                        </View>
                        <View style={styles.settingTextContainer}>
                            <Text style={styles.settingTitle}>Log Out</Text>
                            <Text style={styles.settingDescription}>Sign out of your account and keep your data safe</Text>
                        </View>
                        <FontAwesome5 name="arrow-right" size={20} color="#444" />
                    </View>
                </TouchableOpacity>




                <View style={styles.clearCacheContainer}>
                    <TouchableOpacity style={styles.clearCacheButton} onPress={handleClearCachePress}>
                        <FontAwesome5 name="trash" size={24} color="#fff" />
                        <Text style={styles.clearCacheButtonText}>Clear Cache</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Version 1.0.0</Text>
                </View></SafeAreaView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerContainer: {
        marginBottom: 30,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#444',
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    iconContainer: {
        width: 50,
        alignItems: 'center',
    },
    settingTextContainer: {
        flex: 1,
        marginRight: 20,
    },
    settingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
    },
    settingDescription: {
        fontSize: 14,
        color: '#666',
    },
    clearCacheContainer: {
        alignItems: 'center',
        marginTop: 'auto',
    },
    clearCacheButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff5c5c',
        padding: 10,
        borderRadius: 10,
    },
    clearCacheButtonText: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    footerContainer: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 50,
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
});

export default Settings;