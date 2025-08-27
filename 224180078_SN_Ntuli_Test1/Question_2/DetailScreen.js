import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("Error fetching product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Text style={styles.status}>Loading...</Text>;
  if (!product) return <Text style={styles.status}>No product found</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: "100%", height: 250, resizeMode: "contain", marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  price: { fontSize: 16, color: "green", marginBottom: 10 },
  desc: { fontSize: 14, color: "#333" },
  status: { textAlign: "center", marginTop: 20 },
});
