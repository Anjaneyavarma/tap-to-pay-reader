import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { CheckBox, Slider } from '@rneui/themed';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager'


const ProcessingPayment = () => {
  const [isNFCEnabled, setIsNFCEnabled] = React.useState(false);
  const [nfcText, setNfcText] = React.useState("NFC started")
  const checkNfcEnabled = async () => {
    try {
      const isNfcSupported = await NfcManager.isSupported();
      if (!isNfcSupported) {
        setNfcText("NFC is not Supported")
        console.log("NFC is not Supported")
        return 
      }
      const isNfcEnabled = await NfcManager.isEnabled();
      if (isNfcEnabled) {
        setIsNFCEnabled(true);
        setNfcText("NFC is enabled")
      } else {
        setIsNFCEnabled(false);
        setNfcText("NFC is not enabled")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const writeTag = async () => {
    let result = false;

    try{
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.uriRecord('https://blog.logrocket.com/')])
      if(bytes){
        await NfcManager.ndefHandler.writeNdefMessage(bytes)
        result = true

      }
    }catch(error){
      console.warn(error)
    }finally{
      NfcManager.cancelTechnologyRequest()
    }
    return result;
  }

  useEffect(() => {
    checkNfcEnabled();
    let result = writeTag();
    console.log(result)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{'Mode: Tap to pay'}</Text>

      {/* {isNFCEnabled ? (
        <View style={styles.contactlessPaymentText}>
          <Text style={styles.subHeading}>
            {'Place your mobile near device '}
          </Text>
          <Text style={styles.subHeading}>{'for contactless payment'}</Text>
        </View>
      ) : ( */}
        <View style={styles.contactlessPaymentText}>
          <Text style={styles.subHeading}>
            {nfcText}
          </Text>
          <Text style={styles.subHeading}>
            {' Please enable it.'}
          </Text>
        </View>
      {/* )} */}
    </SafeAreaView>
  );
};

export default ProcessingPayment;

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