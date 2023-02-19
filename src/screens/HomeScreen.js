import React from "react";
import ImageBG from '../img/HomeBackGround.jpg'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from "react-native";



const HomeScreen = ({navigation}) => {
  return (
  <View style={styles.backgroundimage}>
    <ImageBackground 
      source={ImageBG} resizeMode="contain" style={styles.backgroundimage}>
      <Text style={styles.title}>
        FOOD DELIVERY
      </Text>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('SignUp')}
        style={styles.signUp}
      >
        SignUp
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Login')}
        style={styles.signUp}
      >
        Login
      </TouchableOpacity>
    </ImageBackground>
    
  </View>
  );
};

const styles = StyleSheet.create({
    backgroundimage:{
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    signUp: {
      alignSelf: 'center'
    },
    title:{
      textAlign: 'center',
      fontSize: 100,
      fontFamily: 'Arial',
      color: '#ffffff',
      opacity: 50,
    } 
});

export default HomeScreen;

