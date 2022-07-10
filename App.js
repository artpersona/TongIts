import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__text}>
          Tong its Go - Online Sabong - Kabibe
        </Text>
      </View>

      <View style={styles.image__container}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // Alert.alert('Coming Soon');
          Linking.openURL('http://dl.kabibegame.com/760728');
        }}
        style={{width: '80%'}}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#0300ff', '#5feeff', '#2a0096']}
          style={styles.button}>
          <Text style={styles.button__text}>PLAY NOW</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#212121',
    width: '100%',
    height: 65,
    justifyContent: 'center',
  },
  header__text: {
    color: 'white',
    fontSize: RFValue(17),
    marginLeft: '5%',
    fontWeight: 'bold',
  },

  image__container: {
    width: deviceWidth / 1.3,
    height: deviceWidth / 1.3,
    marginTop: '10%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    height: 80,
    backgroundColor: 'white',
    borderRadius: RFValue(10),
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button__text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: 'white',
  },
});
