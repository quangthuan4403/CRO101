
import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, FlatList } from "react-native";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DATA = [
    { id: "1", category: "Product Design", title: "Design System", author: "Brandon", quizCount: 10 },
    { id: "2", category: "Development", title: "React Native 101", author: "Jennifer", quizCount: 10 },
    { id: "3", category: "Project Management", title: "React Native 102", author: "Htin", quizCount: 31 },
    { id: "4", category: "Project Management", title: "Agile Basics", author: "Htin", quizCount: 31 },
    { id: "5", category: "Project Management", title: "Agile Basics", author: "Htin", quizCount: 31 },
    { id: "6", category: "Project Management", title: "Agile Basics", author: "Htin", quizCount: 31 },
    { id: "7", category: "Project Management", title: "Agile Basics", author: "Htin", quizCount: 31 },
  ];

export default function ScrollHeaderScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Thay đổi chiều cao header
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  // Animation opacity
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0], 
    extrapolate: "clamp",
  });

  // Animation scale
  const headerScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Header Animated */}
      <Animated.View style={[styles.header, { 
        height: headerHeight, 
        opacity: headerOpacity, 
        transform: [{ scale: headerScale }] 
      }]}>
        <Text style={styles.headerText}>Mornin' User! Ready for a quiz?</Text>
      </Animated.View>

      {/* Danh sách Quiz */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>By {item.author}</Text>
            <Text style={styles.quizCount}>{item.quizCount} quizzes</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#006D3D",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  category: { fontSize: 14, color: "#888" },
  title: { fontSize: 18, fontWeight: "bold" },
  author: { fontSize: 14, color: "#666" },
  quizCount: { fontSize: 16, fontWeight: "bold", color: "#007AFF" },
});
