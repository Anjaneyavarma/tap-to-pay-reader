import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { CheckBox, Slider } from '@rneui/themed';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager'


const SuccessPayment = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{'AMOUNT RECIEVED'}</Text>
    </SafeAreaView>
  );
};

export default SuccessPayment;

const styles = StyleSheet.create({
  contactlessPaymentText: {
    width: 220,
    marginBottom: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#34657F',
    marginBottom: 20,
    height: '100%',
    width: '100%',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
    paddingTop: 60,
    paddingBottom: 100,
  },
  subHeading: {
    fontSize: 15,
    color: 'white',
    fontWeight: '300',
  },
});