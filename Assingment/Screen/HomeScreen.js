import React, { useState } from "react";
import { useCart } from "./CartContext";
import { 
  View, Text, TextInput, FlatList, Image, TouchableOpacity, 
  StyleSheet, ScrollView, SafeAreaView, StatusBar
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const categories = ["All", "Coffe", "Milk", "Tea", "Espresso"];
const coffeeData = [
  { id: "1", name: "Milk Coffe", category: "Coffe", description: "With Steamed Milk", price: 4.20, image: require("./assets/capuchino.png") },
  { id: "2", name: "Black Coffe", category: "Coffe", description: "With Foam", price: 4.20, image: require("./assets/cafe.png") },
  { id: "3", name: "Milk Tea", category: "Milk", description: "Medium Roasted", price: 4.20, image: require("./assets/cafe.png") },
  { id: "4", name: "fresh Milk", category: "Milk", description: "Medium Roasted", price: 4.20, image: require("./assets/cafe.png") },
  { id: "5", name: "Peach Tea", category: "Tea", description: "Medium Roasted", price: 4.20, image: require("./assets/cafe.png") },
  { id: "6", name: "Lemon Tea", category: "Tea", description: "Dark Roasted", price: 4.50, image: require("./assets/cafe.png") },
  { id: "7", name: "Espresso", category: "Espresso", description: "Strong & Bold", price: 3.90, image: require("./assets/cafe.png") },
];

const HomeScreen = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigation();

  const filteredData = selectedCategory === "All"
  ? coffeeData
  : coffeeData.filter(item => item.category === selectedCategory);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("SettingScreen")}  // Điều hướng đến màn hình Setting
          >
            <FontAwesome name="th-large" size={24} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./assets/icon.png")} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.headerText}>Find the best coffee for you</Text>
      
      <TextInput style={styles.searchBar} placeholder="Find Your Coffee..." placeholderTextColor="#ccc" />

      <View style={styles.categoryWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
  data={filteredData} // Thay coffeeData bằng filteredData
  keyExtractor={(item) => item.id}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  contentContainerStyle={{ paddingBottom: 20 }}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )}
/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0E0F11", paddingHorizontal: 20 },
  headerWrapper: { paddingTop: StatusBar.currentHeight || 0 }, // Xóa paddingTop nếu không cần thiết
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  menuButton: { width: 42, height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#1C1C1E", borderRadius: 12 },
  profileImage: { width: 42, height: 42, borderRadius: 21 },
  headerText: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 8, marginTop: 5 },
  searchBar: { backgroundColor: "#1C1C1E", padding: 14, borderRadius: 12, color: "#fff", marginBottom: 12 },
  categoryWrapper: { marginBottom: 8 },
  categoryContainer: { flexDirection: "row", paddingBottom: 8 },
  categoryButton: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, marginRight: 10, backgroundColor: "#333" },
  categoryButtonActive: { backgroundColor: "#FF6C22" },
  categoryText: { color: "#aaa", fontSize: 14 },
  categoryTextActive: { color: "#fff", fontWeight: "bold" },
  card: { backgroundColor: "#1C1C1E", padding: 12, borderRadius: 14, width: "48%", marginBottom: 12 },
  image: { width: "100%", height: 120, borderRadius: 12 },
  title: { color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: 6 },
  description: { color: "#aaa", fontSize: 12, marginTop: 2 },
  priceContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 },
  price: { color: "#FF6C22", fontSize: 16, fontWeight: "bold" },
  addButton: { backgroundColor: "#FF6C22", width: 32, height: 32, borderRadius: 16, justifyContent: "center", alignItems: "center" },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});


export default HomeScreen;