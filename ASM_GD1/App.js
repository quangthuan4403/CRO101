"use client"

import { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"

// Import các màn hình
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen"
import HomeScreen from "./screens/HomeScreen"
import ProductDetailScreen from "./screens/ProductDetailScreen"
import CartScreen from "./screens/CartScreen"
import SearchScreen from "./screens/SearchScreen"
import NotificationScreen from "./screens/NotificationScreen"
import ProfileScreen from "./screens/ProfileScreen"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Component cho Bottom Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = "home"
          } else if (route.name === "Search") {
            iconName = "search"
          } else if (route.name === "Cart") {
            iconName = "shopping-cart"
          } else if (route.name === "Notification") {
            iconName = "bell"
          } else if (route.name === "Profile") {
            iconName = "user"
          }

          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#009245",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: "Tìm kiếm" }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: "Giỏ hàng" }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ title: "Thông báo" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Tài khoản" }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  // Xử lý thay đổi trạng thái xác thực
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (initializing) setInitializing(false)
    })

    // Cleanup subscription
    return unsubscribe
  }, [initializing])

  if (initializing) {
    return null // Hoặc hiển thị màn hình splash/loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Các màn hình khi chưa đăng nhập
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </>
        ) : (
          // Các màn hình khi đã đăng nhập
          <>
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}