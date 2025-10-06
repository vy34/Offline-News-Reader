import NetInfo from "@react-native-community/netinfo";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchNews } from "../../constants/newsApi";
import { getNewsCache, saveNewsCache } from "../../hooks/storage";

export default function HomeScreen() {
  const [news, setNews] = useState<any[]>([]);
  const [isOffline, setIsOffline] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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
  <Text style={styles.category}>
    {item.source?.name ?? "Không rõ nguồn"}
  </Text>
  <Text style={styles.time}>
    🕒 {new Date(item.publishedAt).toLocaleString()}
  </Text>
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
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
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
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  offlineBanner: {
    backgroundColor: "#ffd166",
    padding: 8,
    borderRadius: 8,
    marginVertical: 6,
  },
  offlineText: {
    textAlign: "center",
    fontWeight: "600",
  },



  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
      },
    }),
  },
image: {
  width: "100%",
  height: 200,
  resizeMode: "cover",
  backgroundColor: "#e5e7eb",
  ...(Platform.OS === "web" ? { display: "block" as any, objectFit: "cover" as any } : {}),
},

  cardContent: {
    padding: 12,
    backgroundColor: "#fff", // ✅ đảm bảo nền trắng không bị ảnh đè
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
  },
  category: {
    fontSize: 13,
    color: "#007AFF", // xanh nhẹ như link
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#6b7280",
  },
});

