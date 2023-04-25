import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/OnboardingScreen';
import DashBoard from './screens/DashBoard';
import LoginScreen from './screens/LoginScreen';
import LiveLocationScreen from './screens/LiveLocationScreen';
import GuardInfo from './screens/GuardsInfo';
import Home from './screens/Home';
import Main from './screens/Main';
import Settings from './screens/Settings';
import EditProfile from './screens/EditProfile';
import FeedbackPage from './screens/FeedbackPage';
import Premium from './screens/Premium';
import PaymentMethod from './screens/PaymentMethod';
import TermAndCondition from './screens/TermAndCondition';


const Stack = createStackNavigator();
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="GuardInfo"
                    component={GuardInfo}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LiveLocationScreen"
                    component={LiveLocationScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DashBoard"
                    component={DashBoard}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="FeedbackPage"
                    component={FeedbackPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Premium"
                    component={Premium}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethod}
                    options={{
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="TermAndCondition"
                    component={TermAndCondition}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;