import React, { useState } from "react";
import { 
  View, Text, TextInput, FlatList, Image, TouchableOpacity, 
  StyleSheet, ScrollView 
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const categories = ["All", "Cappuccino", "Espresso", "Americano", "Macchiato"];
const coffeeData = [
  { id: "1", name: "Cappuccino", description: "With Steamed Milk", price: "$4.20", image: require("./assets/capuchino.png") },
  { id: "2", name: "Cappuccino", description: "With Foam", price: "$4.20", image: require("./assets/cafe.png") },
  { id: "3", name: "Robusta Beans", description: "Medium Roasted", price: "$4.20", image: require("./assets/cafe.png") },
  { id: "4", name: "Arabica Beans", description: "Dark Roasted", price: "$4.50", image: require("./assets/cafe.png") },
  { id: "5", name: "Espresso", description: "Strong & Bold", price: "$3.90", image: require("./assets/cafe.png") },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome name="th-large" size={24} color="#ccc" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Find the best{"\n"}coffee for you</Text>
        <TouchableOpacity>
          <Image source={require("./assets/icon.png")} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* Thanh tìm kiếm */}
      <TextInput style={styles.searchBar} placeholder="Find Your Coffee..." placeholderTextColor="#ccc" />

      {/* Thanh categories */}
      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoryButton, selectedCategory === item && styles.categoryButtonActive]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text style={[styles.categoryText, selectedCategory === item && styles.categoryTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      {/* Danh sách coffee */}
      <FlatList
  data={coffeeData}
  keyExtractor={(item) => item.id}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  contentContainerStyle={{ paddingBottom: 20 }}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      
      {/* Hiển thị rating trên ảnh */}
      {/* <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View> */}

      {/* Thông tin sản phẩm */}
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Giá và nút "+" */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
    /** Tổng thể */
    container: { flex: 1, backgroundColor: "#0E0F11", paddingHorizontal: 20, paddingTop: 20 },
    
    /** Header */
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
    menuButton: { width: 42, height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#1C1C1E", borderRadius: 12 },
    profileImage: { width: 42, height: 42, borderRadius: 21 },
  
    /** Text Header */
    headerText: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  
    /** Search Bar */
    searchBar: { backgroundColor: "#1C1C1E", padding: 14, borderRadius: 12, color: "#fff", flexDirection: "row", alignItems: "center", marginBottom: 15 },
    searchInput: { flex: 1, color: "#fff", fontSize: 14, marginLeft: 10 },
  
    /** Category Tabs */
    categoryContainer: { flexDirection: "row", marginBottom: 20 },
    categoryButton: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, marginRight: 10 },
    categoryButtonActive: { backgroundColor: "#FF6C22" },
    categoryText: { color: "#aaa", fontSize: 14 },
    categoryTextActive: { color: "#fff", fontWeight: "bold" },
  
    /** Danh sách sản phẩm */
    cardContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    card: { backgroundColor: "#1C1C1E", padding: 12, borderRadius: 14, width: "48%", marginBottom: 15, position: "relative" },
    image: { width: "100%", height: 120, borderRadius: 12 },
  
    /** Rating góc trên phải */
    ratingContainer: { position: "absolute", top: 10, right: 10, backgroundColor: "#FF6C22", borderRadius: 10, paddingVertical: 4, paddingHorizontal: 6 },
    ratingText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  
    /** Thông tin sản phẩm */
    title: { color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: 8 },
    description: { color: "#aaa", fontSize: 12, marginTop: 2 },
    priceContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
    price: { color: "#FF6C22", fontSize: 16, fontWeight: "bold" },
  
    /** Nút "+" */
    addButton: { backgroundColor: "#FF6C22", width: 32, height: 32, borderRadius: 16, justifyContent: "center", alignItems: "center" },
    addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  });
  

export default HomeScreen;
