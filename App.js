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

//initializing firebase

function writeUserData() {
    firebase.database().ref().set({
        caption: "kanekalon",
        name: "Felicia",
        photo : "https://i.imgur.com/XVrWugu.jpg"
    });
}

export default class Braiders extends Component {


    render() {
        writeUserData();
        return (
          //posts of braid styles
          <View>
              <Card>
                  <Image style={styles.image} source={{uri: 'https://i.imgur.com/XVrWugu.jpg'}} />
                  <Text style={styles.title}>Kanekalon braids</Text>
                  <Text style={styles.name}>Styles by Lisa</Text>
                  <Button

                    title='book this braider'
                  />
              </Card>
            <Button

              title="show off your work" />
          </View>

        );
    }

}

const styles = {
   image: {
       marginTop: 20,
        width: 300,
       height: 200
   },
    title: {

    },
    name: {
       
    }
};
