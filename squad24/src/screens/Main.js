import { Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'
import Home from './Home';
import GuardInfo from './GuardsInfo';
import Settings from './Settings';
import Premium from './Premium';

const Main = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
        {selectedTab == 0 ? <Home /> : selectedTab == 1 ? <GuardInfo /> : selectedTab == 2 ? <Settings /> : <Premium />}
      <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#fff', height: 60, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(0);
          }} >
          <Image source={
            selectedTab == 0
              ? require('../images/Home_selected.png')
              : require('../images/Home.png')
          }
            style={{ width: 27, height: 27 }} />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(1);
          }} >
          <Image source={
            selectedTab == 1
              ? require('../images/Guard_Selected.png')
              : require('../images/Guard_.png')
          }
            style={{ width: 27, height: 27 }} />
          <Text>Guards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '34%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(2);
          }} >
          <Image source={
            selectedTab == 2
              ? require('../images/settings_selected.png')
              : require('../images/settings.png')

          } style={{ width: 27, height: 27 }} />
          <Text>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '34%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(3);
          }} >
          <Image source={
            selectedTab == 3
              ? require('../images/premium_select.png')
              : require('../images/premium.png')

          } style={{ width: 27, height: 27 }} />
          <Text>Go Pro</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: "500"
  }
})