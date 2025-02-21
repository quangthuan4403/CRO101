import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Lungo !!</Text>
      <Text style={styles.subtitle}>Login to Continue</Text>

      {/* Ô nhập Email */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={18} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Ô nhập Password */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Entypo name={showPassword ? "eye-with-line" : "eye"} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("HomeTabs")}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Nút Đăng nhập với Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require("./assets/icon.png")} style={styles.googleIcon} />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Link Đăng Ký & Quên Mật Khẩu */}
      <Text style={styles.footerText}>
        Don't have an account? Click{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("Register")}>Register</Text>
      </Text>
      <Text style={styles.footerText}>
        Forgot Password? Click <Text style={styles.linkText}>Reset</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0F11",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: { width: 80, height: 80, marginBottom: 20 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  subtitle: { color: "#aaa", fontSize: 14, marginBottom: 20 },
  
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
    marginBottom: 15,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, color: "#fff", fontSize: 14 },

  signInButton: {
    backgroundColor: "#FF6C22",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  signInText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  googleIcon: { width: 20, height: 20, marginRight: 10 },
  googleText: { color: "#000", fontSize: 16, fontWeight: "bold" },

  footerText: { color: "#aaa", fontSize: 14, marginTop: 15 },
  linkText: { color: "#FF6C22", fontWeight: "bold" },
});

export default LoginScreen;
