import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  const { title, category, content, id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://picsum.photos/600/300?random=" + id,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>
          {content ||
            "Nội dung bài viết đang được cập nhật. Đây là ví dụ về giao diện đọc báo trên thiết bị di động, được thiết kế đơn giản và dễ đọc."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 220,
  },
  content: {
    padding: 16,
  },
  category: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify",
  },
});
