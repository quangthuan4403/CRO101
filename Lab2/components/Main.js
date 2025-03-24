
"use client"

import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import { useCallback, useEffect, useState } from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { LinearGradient } from "expo-linear-gradient"

const colors = [
  "#FF6B6B", "#4ECDC4", "#FFD166", "#6A0572", "#FF9A8B",
  "#00F5FF", "#845EC2", "#008B8B", "#FF85B3", "#FFC75F",
]

export default function Main() {
  const [user, setUser] = useState({
    name: "User",
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  })
  const [lastTimeUpdate, setLastTimeUpdate] = useState("Chưa điền vào thông tin")
  const [footerColor, setFooterColor] = useState(colors[0])

  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    }).format(date)
  }

  const handleRandomColor = useCallback(() => {
    let newColor
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    } while (newColor === footerColor)
    setFooterColor(newColor)
  }, [footerColor])

  useEffect(() => {
    setLastTimeUpdate(formatDateTime(new Date()))
  }, [user])

  const handleUpdateInfo = useCallback((updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={["#4158D0", "#C850C0", "#FFCC70"]} style={styles.gradient}>
        
        <View style={styles.contentContainer}>
          <Header user={user} />
          <Body onUpdateInfo={handleUpdateInfo} onClickChangeBgFooter={handleRandomColor} />
          <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  contentContainer: {
    width: "100%",
    gap: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
})
