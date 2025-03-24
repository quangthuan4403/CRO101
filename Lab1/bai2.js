import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function App({ navigation }) {
  const eventInfo = [
    {
      title: "Lịch trình",
      events: [
        { title1: "Địa điểm", content: "Hồ Tràm, Vũng Tàu" },
        { title1: "Thời gian", content: "09:00 AM - 12:00 AM, 12/12/2024" },
        { title1: "Phương tiện di chuyển", content: "Xe bus" },
        { title1: "Thời gian", content: "21:00 - 22:00" },
      ],
      img: require("./assets/beach.png"),
    },
    {
      title: "Khách sạn",
      events: [
        { title1: "Tên khách sạn", content: "Hồng Quỳnh" },
        { title1: "Giờ mở cửa", content: "06:00 AM - 12:00 AM" },
        { title1: "Địa điểm", content: "234 Quang Trung, Hồ Chí Minh" },
      ],
      button: "CHI TIẾT",
    },
  ];

  const renderSection = (section, index) => {
    return (
      <View key={index} style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        {section.events.map((item, idx) => renderChild(item, idx))}

        {section.img && <Image source={section.img} style={styles.image} />}

        {section.button && (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Bai3")}>
            <Text style={styles.buttonText}>{section.button}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderChild = (item, index) => {
    return (
      <View key={index} style={styles.childContainer}>
        <Text style={styles.childTitle}>{item.title1}</Text>
        <Text style={styles.childContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {eventInfo.map((section, index) => renderSection(section, index))}

      {
        
      }
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Bai3")}>
        <Text style={styles.buttonText}>Đi tới Bài 3</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  sectionContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  childContainer: {
    marginBottom: 8,
  },
  childTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  childContent: {
    fontSize: 16,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginTop: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
