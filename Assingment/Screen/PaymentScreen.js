import React, { useState } from "react";
import {
  View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCart } from "./CartContext";
import { ordersCollection } from "./api/firebaseConfig";
import { addDoc } from "firebase/firestore";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedItems, totalPrice } = route.params;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { clearPaidItems } = useCart();

  const paymentMethods = [
    { id: "momo", name: "MoMo" },
    { id: "VNPay", name: "VNPay" },
    { id: "cash", name: "Cash on Delivery" }
  ];

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (!selectedItems || selectedItems.length === 0) {
      alert("No items in cart");
      return;
    }

    const newOrder = {
      date: new Date().toISOString(),
      items: selectedItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        image: typeof item.image === "string" ? item.image : "https://example.com/default-image.jpg",
      })),
      totalAmount: totalPrice,
      paymentMethod: selectedPaymentMethod, // 🔥 Lưu phương thức thanh toán chính xác
    };

    try {
      await addDoc(ordersCollection, newOrder);
      console.log("Order saved:", newOrder);

      const selectedIds = selectedItems.map(item => item.id);
      clearPaidItems(selectedIds);

      Alert.alert("Payment Successful", "Your order has been placed!", [
        { text: "OK", onPress: () => navigation.navigate("HomeTabs") }
      ]);
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Payment failed, please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <FlatList
        data={selectedItems || []}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={({ item }) => item && (
          <View style={styles.item}>
            <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={styles.image}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price} x {item.quantity}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice}</Text>

      <Text style={styles.paymentTitle}>Select Payment Method</Text>
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[styles.paymentMethod, selectedPaymentMethod === method.id && styles.selectedMethod]}
          onPress={() => setSelectedPaymentMethod(method.id)}
        >
          <Text style={styles.paymentText}>{method.name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0E0F11" },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20, textAlign: "center" },
  item: { flexDirection: "row", backgroundColor: "#1C1C1E", padding: 10, borderRadius: 10, marginBottom: 10, alignItems: "center" },
  image: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  name: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  price: { fontSize: 14, color: "#FF6C22" },
  total: { fontSize: 20, fontWeight: "bold", color: "#fff", textAlign: "center", marginVertical: 20 },
  paymentTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginTop: 10, marginBottom: 10 },
  paymentMethod: { backgroundColor: "#333", padding: 15, borderRadius: 10, marginBottom: 10, alignItems: "center" },
  selectedMethod: { backgroundColor: "#FF6C22" },
  paymentText: { fontSize: 16, color: "#fff" },
  payButton: { backgroundColor: "#FF6C22", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  payButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});

export default PaymentScreen;
