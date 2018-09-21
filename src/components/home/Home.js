import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const goToContact = () => {
        Actions.Contact()
    };
    return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToContact}>
          <Text>This is HOME!</Text>
      </TouchableOpacity>
    )
};
export default Home;