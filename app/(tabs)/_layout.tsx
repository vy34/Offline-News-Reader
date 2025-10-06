import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
<Tabs
  screenOptions={{
    headerShown: true,
    tabBarButton: HapticTab,
    tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    tabBarInactiveTintColor: "#e5e7eb",
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: { fontSize: 18, fontWeight: "600" },
    headerTitleAlign: "center",
  }}
>

      {/* Trang chính: danh sách tin tức */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Tin tức",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="newspaper.fill" color={color} />
          ),
        }}
      />

      {/* Trang mở rộng: ví dụ để lọc, thống kê, hoặc bookmark */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Khám phá",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="magnifyingglass" color={color} />
          ),
        }}
      />

      {/* Trang chi tiết: ẩn khỏi tab bar */}
      <Tabs.Screen
        name="detail"
        options={{
          href: null, // Ẩn khỏi thanh tab
          title: "Chi tiết bài viết",
          headerShown: true,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#38609c", // tông xanh đồng bộ
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    borderTopWidth: 0, // loại bỏ viền trắng mặc định
  },
});

