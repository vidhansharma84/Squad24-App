import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MembershipCard = ({ type, cost, isSelected, onPress }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
    >
      <Animated.View style={[styles.cardContent, { transform: [{ scale: scaleValue }] }]}>
        <View style={styles.cardLeft}>
          <Text style={[styles.type, isSelected && styles.selectedType]}>
            {type} {isSelected && <Ionicons name="checkmark-circle" size={24} color="#fff" />}
          </Text>
          <Text style={[styles.cost, isSelected && styles.selectedCost]}>${cost} / month</Text>
        </View>
        <View style={styles.cardRight}>
          <Ionicons name="arrow-forward-outline" size={24} color="#6C63FF" />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const MembershipType = ({ type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} Membership</Text>
      <Text style={styles.description}>This is the {type} membership description.</Text>
    </View>
  );
};

const Premium = () => {
  const navigation = useNavigation();
  const [selectedMembership, setSelectedMembership] = React.useState('Basic');

  const handleSelectMembership = (membershipType) => {
    setSelectedMembership(membershipType);
  };

  const handleJoinNow = () => {
    navigation.navigate('PaymentMethod');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Membership</Text>
      <MembershipCard
        type="Basic"
        cost={9.99}
        isSelected={selectedMembership === 'Basic'}
        onPress={() => handleSelectMembership('Basic')}
      />
      <MembershipCard
        type="Premium"
        cost={19.99}
        isSelected={selectedMembership === 'Premium'}
        onPress={() => handleSelectMembership('Premium')}
      />
      <MembershipCard
        type="Elite"
        cost={29.99}
        isSelected={selectedMembership === 'Elite'}
        onPress={() => handleSelectMembership('Elite')}
      />
      <View style={{ width: '90%', marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 10 }}>
          By joining, you agree to our {' '}
          <TouchableOpacity onPress={() => navigation.navigate('TermAndCondition')}>
            <Text style={{ fontSize: 14, textDecorationLine: 'underline', color: 'blue' }}>Terms and Conditions</Text>
          </TouchableOpacity>.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleJoinNow}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Membership = ({ route }) => {
  const { type } = route.params;
  return <MembershipType type={type} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    },
    selectedCard: {
    backgroundColor: '#6C63FF',
    },
    cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    },
    cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    type: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
    color: '#333',
    },
    selectedType: {
    color: '#fff',
    },
    cost: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6C63FF',
    },
    selectedCost: {
    color: '#fff',
    },
    cardRight: {},
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    },
    button: {
    backgroundColor: '#6C63FF',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    },
    buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    },
    });
    
    export default Premium;