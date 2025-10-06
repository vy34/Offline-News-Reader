export async function fetchNews() {
const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=40949495624a44f1997541f8179f0ea4";

  try {
    const response = await fetch(API_URL);
    const json = await response.json();

    // Kiểm tra đúng format
    if (!json.articles) {
      console.error("Invalid API format:", json);
      return [];
    }

    // Chuyển đổi dữ liệu cho phù hợp với UI hiện tại
    return json.articles.map((item: any, index: number) => ({
      id: index,
      title: item.title || "No title",
      category: item.source?.name || "Unknown source",
      image: item.urlToImage || "https://picsum.photos/400/200?random=" + index,
      url: item.url,
      description: item.description || "",
      publishedAt: item.publishedAt,
      author: item.author       || "N/A",
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}


 //"https://newsapi.org/v2/top-headlines?country=us&apiKey=40949495624a44f1997541f8179f0ea4"