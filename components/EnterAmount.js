import { useState } from 'react';
import { Button } from '@rneui/themed';
import { Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EnterAmount = ({details, navigation, route}) => {

  const [amount, setAmount] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>ENTER AMOUNT</Text>
      <TextInput 
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
      />
      <Button 
        title='CONTINUE'
        size='lg'
        buttonStyle={{borderWidth:2, color:'black', borderRadius:25, margin:15}}
        disabled={amount?false:true}
        disabledTitleStyle={{color:'#34657F', fontWeight:'900', fontSize:'21'}}
        onPress={() => navigation.navigate("ProcessingPayment")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
    height: 60,
    margin: 12,
    width: 200,
    borderWidth: 2,
    borderColor: '#34657F',
    padding: 15,
  },
  button:{
    height: 50,
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#34657F',
    textAlign: 'center'
  }
});

export default EnterAmount;
