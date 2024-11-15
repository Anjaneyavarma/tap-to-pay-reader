import { StyleSheet } from 'react-native';
import EnterAmount from './components/EnterAmount';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import nfcManager from 'react-native-nfc-manager';
import ProcessingPayment from './components/ProcessingPayment';
import SuccessPayment from './components/SuccessPayment';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    nfcManager.start();
    return(
      nfcManager.cancelTechnologyRequest()
    )
  }, []);


  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={EnterAmount} />
            <Stack.Screen name="ProcessingPayment" component={ProcessingPayment} />
            <Stack.Screen name="success" component={SuccessPayment} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
