import NetInfo from "@react-native-community/netinfo";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchNews } from "../../constants/newsApi";
import { getNewsCache, saveNewsCache } from "../../hooks/storage";

export default function ExploreScreen() {
  const [news, setNews] = useState<any[]>([]);
  const [filteredNews, setFilteredNews] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [refreshing, setRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const router = useRouter();

  const loadNews = async () => {
    const netState = await NetInfo.fetch();
    setIsOffline(!netState.isConnected);

    if (netState.isConnected) {
      const data = await fetchNews();
      setNews(data);
      await saveNewsCache(data);
    } else {
      const cache = await getNewsCache();
      setNews(cache);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // Cập nhật danh mục tự động từ dữ liệu
  useEffect(() => {
    if (news.length > 0) {
      const uniqueCategories = ["All", ...new Set(news.map((item) => item.category || "Other"))];
      setCategories(uniqueCategories);
      setFilteredNews(news);
    }
  }, [news]);

  // Lọc khi chọn category
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter((n) => n.category === category));
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadNews();
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push({ pathname: "/(tabs)/detail", params: { ...item } })}
    >
      <Image
        source={{
          uri: item.image || "https://picsum.photos/400/200?random=" + item.id,
        }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
  
return (
  <View style={styles.container}>
    {isOffline && (
      <View style={styles.offlineBanner}>
        <Text style={styles.offlineText}>🔌 Offline mode </Text>
      </View>
    )}

    {/* Thanh chọn danh mục */}
    <View style={{ height: 50 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categoryButtonActive,
            ]}
            onPress={() => handleCategorySelect(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

    {/* Danh sách bài viết */}
    <FlatList
      data={filteredNews}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#007AFF" />
      }
    />
  </View>
);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  offlineBanner: {
    backgroundColor: "#ffd166",
    padding: 8,
    borderRadius: 8,
    margin: 12,
  },
  offlineText: {
    textAlign: "center",
    fontWeight: "600",
  },
  categoryScroll: {
    paddingVertical: 10,
    maxHeight: 50, // 👈 Giới hạn chiều cao thanh filter
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 36, // 👈 Cố định chiều cao
  },
  categoryButtonActive: {
    backgroundColor: "#007AFF",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  categoryTextActive: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 12,
    marginVertical: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },
  category: {
    marginTop: 4,
    color: "#007AFF",
    fontWeight: "500",
  },
});

