import { React, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, Dimensions, Modal } from 'react-native'
// import LottieView from 'lottie-react-native'
import { Card } from 'react-native-shadow-cards';
import COLORS from '../consts/colors';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import LoginIcon from '../assets/img/login.png';
import FBLogo from '../assets/img/fblogo.png';
import GoogleLogo from '../assets/img/google.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Login() {

  const navigation = useNavigation();
  const [modelOpen, setModelOpen] = useState(false);

  function modalhandle() {
    setModelOpen(true)
    setTimeout(() => {
      navigation.navigate("Category");
      setTimeout(() => {
        setModelOpen(false);
      }, 1000);
    }, 1000);
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor= "gray" />
      <View style={styles.container}>
        <Image source={LoginIcon} style={styles.icon} />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#234F68" }}>Create your account</Text>

        <Card style={[styles.inputcard, { marginTop: 50, backgroundColor: "white" }]}>
          <TextInput
            style={[styles.input]}
            placeholder="Full name"
      
          />
        </Card>

        <Card style={[styles.inputcard, { marginTop: 0, backgroundColor: "white" }]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
      
          />
        </Card>
        <Card style={[styles.inputcard, { marginTop: 0, backgroundColor: "white" }]}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}

          />
        </Card>
        <Pressable onPress={() => {
          modalhandle()
        }}>
          <Card style={styles.cardStyle} >
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Register</Text>
          </Card>
        </Pressable>

        <TouchableOpacity style={{ marginTop: 15, }} onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#234F68" }}>Already have an account?</Text>
        </TouchableOpacity>
{/* 
        <Modal
          transparent={true}
          visible={modelOpen}
          animationType='none'>
          <View style={styles.modalView}>
            <LottieView style={{ height: 80, width: 80 }} source={require('../../assets/img/loaderoverlay.json')} autoPlay loop />
            <Text style={styles.modalText}>  Loading...</Text>
          </View>
        </Modal> */}

      </View>
    </ScrollView>
  )
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 70,
    flex: 1,
    backgroundColor: "white",
  },

  icon: {
    
   
  },

  input: {
    width: width - 40,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#F5F4F8",
    borderRadius: 10,
    height: 70,
    
  },

  inputcard: {
    width: width - 40,
    padding: 1,
    margin: 20,
    marginTop: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169e1',
  },

  cardStyle: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8BC83F',
    width: 278,
    height: 63,
  },

  modalText: {
    fontSize: 16,
    color: 'white',

  },


  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },

  fbBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 40,
    elevation: 2,
    backgroundColor: '#3b5998',
  },

  fbTextStyle: {
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  googleBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 15,
    elevation: 2,
    backgroundColor: 'white',
  },

  googleTextStyle: {
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  }

})