
import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

function WelcomeScreen() {




  return (
    <ImageBackground style={styles.container} source={require('../assets/Background.png')}>
    {/* <View style={styles.container}> */}
      <View style={styles.logocontainer}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
      </View>
      {/* <View style={styles.bottomContainer}>
        <Image
          source={require('./src/assets/Bottom.png')}
        />
      </View> */}

    {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  logocontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    // resizeMode: 'contain',
  },
  // bottomContainer: {
  //  backgroundColor:"pink",
  //  height:100,
  // }


});

export default WelcomeScreen;
