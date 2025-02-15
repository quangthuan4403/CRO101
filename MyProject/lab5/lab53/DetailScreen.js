import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh */}
      <Image 
        source={require('../asset/image.png')}
        style={styles.image}
      />
      
      {/* Nội dung */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="heart" size={24} color="red" />
          <Text style={styles.rating}>5.0</Text>
        </View>
        
        {/* Thông tin địa điểm */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="#007bff" />
          <Text style={styles.locationText}>Quảng Nam</Text>
        </View>
        
        {/* Thông tin chi tiết */}
        <Text style={styles.description}>
          Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An là trung tâm thương mại...
        </Text>
        
        {/* Giá và nút đặt ngay */}
        <View style={styles.footer}>
          <Text style={styles.price}>$100 / ngày</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  contentContainer: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  iconContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  rating: { fontSize: 16, marginLeft: 5, color: '#666' },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  locationText: { fontSize: 16, color: '#007bff', marginLeft: 5 },
  description: { marginTop: 10, fontSize: 14, color: '#555' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default DetailScreen;
