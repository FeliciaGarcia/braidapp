import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Braiders extends Component {
    render() {
        return (
          <View>
              <Card>
                  <Image source={{uri: 'https://i.imgur.com/XVrWugu.jpg'}} style={{width: 300, height: 250, }} />
                  <Text>Styles by Lisa</Text>
                  <Text>Atlanta, GA</Text>
                  <Button
                    backgroundColor='#ffcc00'
                    title='book this braider'

                  />
              </Card>
          </View>
        );
    }
}



