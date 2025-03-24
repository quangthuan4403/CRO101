
"use client"

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native"
import { useState, memo, useRef } from "react"

function Body({ onUpdateInfo, onClickChangeBgFooter }) {
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [errors, setErrors] = useState({ name: false, avatar: false })

  const avatarInputRef = useRef(null)

  const validateForm = () => {
    const newErrors = {
      name: !name.trim(),
      avatar: !avatar.trim(),
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = () => {
    if (validateForm()) {
      onUpdateInfo({ name: name.trim(), avatar: avatar.trim() })
      setName("")
      setAvatar("")
      setErrors({ name: false, avatar: false })
    } else {
      Alert.alert("Lỗi", "Vui lòng nhập đủ thông tin")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cập nhật hồ sơ</Text>

      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        placeholder="Nhập tên"
        value={name}
        onChangeText={(text) => {
          setName(text)
          if (text.trim()) setErrors((prev) => ({ ...prev, name: false }))
        }}
        returnKeyType="next"
        onSubmitEditing={() => avatarInputRef.current?.focus()}
      />

      <TextInput
        ref={avatarInputRef}
        style={[styles.input, errors.avatar && styles.inputError]}
        placeholder="Nhập URL ảnh"
        value={avatar}
        onChangeText={(text) => {
          setAvatar(text)
          if (text.trim()) setErrors((prev) => ({ ...prev, avatar: false }))
        }}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={onClickChangeBgFooter} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Đổi màu nền</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  inputError: {
    borderColor: "#D9534F",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: "#777",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
})

export default memo(Body)
