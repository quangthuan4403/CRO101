import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, StyleSheet } from 'react-native';
import Bai1Screen from './lab3/bai1';
import Lab4Bai1Screen from './lab4/bai1'; 
import Lab4Bai2Screen from './lab4/bai2'; 
import Bai3Screen from './lab3/bai3';
import LoginScreen from './lab4/login';
import Lab5Bai1 from './lab5/bai1';
import Lab5Bai2 from './lab5/lab52/index'
import Lab5Bai3 from './lab5/lab53/DetailScreen'




const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Đi đến Lab3" onPress={() => navigation.navigate('Bai1_Lab3')} />
      <Button title="Đi đến Lab4" onPress={() => navigation.navigate('Lab4_Bai1')} />
      <Button title="Đi đến Lab5" onPress={() => navigation.navigate('Lab5_Bai1')} />
      <Button title="Đi đến Lab52" onPress={() => navigation.navigate('Lab5_Bai2')} />
      <Button title="Đi đến Lab53" onPress={() => navigation.navigate('Lab5_Bai3')} />
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
        <Stack.Screen name="Lab5_Bai1" component={Lab5Bai1} options={{ title: 'Lab5_Bai1' }} />
        <Stack.Screen name="Lab5_Bai2" component={Lab5Bai2} options={{ title: 'Lab5_Bai2' }} />
        <Stack.Screen name="Lab5_Bai3" component={Lab5Bai3} options={{ title: 'Lab5_Bai3' }} />
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