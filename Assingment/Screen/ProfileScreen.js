import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={18} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Personal Details</Text>
      </View>
      
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={require('./assets/icon.png')} style={styles.avatar} />
      </View>
      
      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Nguyen Van A" placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="vana@gmail.com" placeholderTextColor="#fff" keyboardType="email-address" />
      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Password" placeholderTextColor="#fff" secureTextEntry />
        <Icon name="eye" size={20} color="#fff" style={styles.eyeIcon} />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Re-type password" placeholderTextColor="#fff" secureTextEntry />
        <Icon name="eye" size={20} color="#fff" style={styles.eyeIcon} />
      </View>
      
      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  input: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 15,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
