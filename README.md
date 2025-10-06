# 📰 Ứng dụng Tin Tức Offline/Online

Ứng dụng di động được phát triển bằng **React Native**, hỗ trợ đọc tin tức ngay cả khi **không có kết nối mạng**.  
Ứng dụng tự động lưu dữ liệu đã tải về để người dùng có thể xem lại **offline**, đồng thời cập nhật nội dung mới khi có mạng trở lại.

---

## 🚀 Tính năng chính

- **Hiển thị danh sách tin tức** lấy từ API hoặc nguồn dữ liệu web.
- **Hỗ trợ chế độ offline:**  
  Khi mất kết nối mạng, ứng dụng vẫn hiển thị tin tức đã lưu trong bộ nhớ cục bộ (AsyncStorage).
- **Phát hiện trạng thái mạng:**  
  Tự động hiển thị thông báo khi thiết bị mất kết nối Internet.
- **Hiệu ứng tải mượt mà** khi đang lấy dữ liệu.
- **Thiết kế trực quan**, dễ sử dụng, tương thích tốt trên Android, iOS và Web.

---

## 🧭 Mở rộng (Future Enhancements)

- **Bộ lọc theo chuyên mục (Category Filter):**  
  Cho phép người dùng chọn và xem tin theo từng chuyên mục như *Công nghệ*, *Giáo dục*, *Thể thao*, v.v.

- **Pull-to-Refresh (khi online):**  
  Kéo xuống để làm mới danh sách tin tức, chỉ hoạt động khi thiết bị có kết nối mạng.

- **Lưu tin yêu thích (Favorites):**  
  Người dùng có thể lưu các bài viết yêu thích để đọc lại sau.

- **Chế độ Dark Mode tự động:**  
  Giao diện tối sáng tùy theo cài đặt hệ thống.

---

## 🛠️ Công nghệ sử dụng

- **React Native** – Framework phát triển ứng dụng đa nền tảng.  
- **Expo** – Dễ dàng chạy và debug ứng dụng.  
- **AsyncStorage** – Lưu trữ dữ liệu cục bộ để hỗ trợ đọc offline.  
- **NetInfo (react-native-netinfo)** – Kiểm tra trạng thái kết nối mạng.  
- **FlatList** – Hiển thị danh sách tin tức mượt mà.  
- **StyleSheet / Platform API** – Tùy chỉnh giao diện theo từng nền tảng.

---

## ⚙️ Cài đặt và chạy thử

### 1. Clone dự án

git clone https://github.com/your-username/news-offline-app.git
cd news-offline-app

### 2. Cài đặt phụ thuộc

npm install
# hoặc
yarn install

### 3. Chạy ứng dụng
npm start
# hoặc
expo start

### 4. Mở ứng dụng
Dùng Expo Go trên điện thoại quét QR code.
Hoặc nhấn Run on Android / Run on iOS / Run in web browser.


✨ Tác giả
Tên  – Nguyễn Thị Ngọc Vy -- 22it351


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


