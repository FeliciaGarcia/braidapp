import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class LotsOfStyles extends Component {
    render() {
        return (
          <View>
              <Card>
                  <Image source={{uri: 'https://i.imgur.com/XVrWugu.jpg'}} style={{width: 300, height: 250, }} />
                  <Text>styles by Lisa</Text>
                  <Text>Atlanta, GA</Text>
              </Card>
          </View>
        );
    }
}



