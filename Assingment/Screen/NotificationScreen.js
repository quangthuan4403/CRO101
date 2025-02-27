import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { ordersCollection } from "./api/firebaseConfig";
import { onSnapshot } from "firebase/firestore";

const NotificationScreen = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(ordersCollection, (snapshot) => {
            const orderList = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sắp xếp giảm dần theo thời gian đặt hàng
            setOrders(orderList);
        });
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Notifications</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.orderItem}>
                        <Text style={styles.date}>📅 {new Date(item.date).toLocaleString()}</Text>
                        {item.items.map((product, index) => (
                            <View key={index} style={styles.product}>
                                <Image
                                    source={
                                        typeof product.image === "string" && product.image.startsWith("http")
                                            ? { uri: product.image }
                                            : require("../Screen/assets/capuchino.png")
                                    }
                                    style={styles.image}
                                />
                                <View>
                                    <Text style={styles.name}>{product.name}</Text>
                                    <Text style={styles.price}>${product.price} x {product.quantity}</Text>
                                </View>
                            </View>
                        ))}
                        <Text style={styles.total}>Total: ${item.totalAmount}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#0E0F11" },
    title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 20 },
    orderItem: { backgroundColor: "#1C1C1E", padding: 15, borderRadius: 10, marginBottom: 15 },
    date: { fontSize: 14, color: "#FF6C22", marginBottom: 10 },
    product: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
    image: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
    name: { fontSize: 16, color: "#fff", fontWeight: "bold" },
    price: { fontSize: 14, color: "#FF6C22" },
    total: { fontSize: 18, fontWeight: "bold", color: "#fff", marginTop: 10 },
});

export default NotificationScreen;
