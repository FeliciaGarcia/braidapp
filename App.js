import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBsUTAkpJkVM2_xcK21W3cex-eaY5vesM0",
    authDomain: "braids-app.firebaseapp.com",
    databaseURL: "https://braids-app.firebaseio.com",
    projectId: "braids-app",
    storageBucket: "braids-app.appspot.com",
    messagingSenderId: "451322916581"
};

firebase.initializeApp(config);

const database = firebase.database();


function writeUserData() {
    firebase.database().ref().set({
        username: "Felicia",
        email: "felicia@gmail.com",
        profile_picture : "https://i.imgur.com/XVrWugu.jpg"
    });
}

export default class Braiders extends Component {


    render() {
        writeUserData();
        return (
          <View>
              <Card>
                  <Image source={{uri: 'https://i.imgur.com/XVrWugu.jpg'}} style={{width: 300, height: 250,}}/>
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
