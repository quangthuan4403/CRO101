import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, StyleSheet } from 'react-native';
import Bai1Screen from './lab3/bai1';
import Lab4Bai1Screen from './lab4/bai1'; 
import Lab4Bai2Screen from './lab4/bai2'; 
import Bai3Screen from './lab3/bai3';
import LoginScreen from './lab4/login';



const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Đi đến Lab3" onPress={() => navigation.navigate('Bai1_Lab3')} />
      <Button title="Đi đến Lab4" onPress={() => navigation.navigate('Lab4_Bai1')} />
      <Button title="Đi tới Login" onPress={() => navigation.navigate('Login')} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Bai1_Lab3" component={Bai1Screen} options={{ title: 'Lab3_Bai1-2' }} />
        <Stack.Screen name="Lab4_Bai1" component={Lab4Bai1Screen} options={{ title: 'Lab4_Bai1' }} />
        <Stack.Screen name="Lab4_Bai2" component={Lab4Bai2Screen} options={{ title: 'Lab4_Bai2' }} />
        
        <Stack.Screen name="Bai3" component={Bai3Screen} options={{ title: 'Lab3_Bai3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});