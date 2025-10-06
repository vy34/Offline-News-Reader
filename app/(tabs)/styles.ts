import { StyleSheet } from "react-native";

export const colors = {
  primary: "#6366F1",   // tím xanh
  secondary: "#10B981", // xanh ngọc
  bgLight: "#F3F4F6",   // xám nền
  textDark: "#1F2937",
  textGray: "#4B5563",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  loadingText: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: "600",
  },
  // --- Header ---
  header: {
    backgroundColor: colors.primary,
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
  headerSubtitle: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },
  // --- Offline banner ---
  offlineBanner: {
    backgroundColor: "#FEF3C7",
    padding: 10,
    borderRadius: 10,
    margin: 12,
    alignItems: "center",
  },
  offlineText: {
    color: "#92400E",
    fontWeight: "600",
  },
  // --- Card ---
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: colors.secondary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 14,
    color: colors.textGray,
    lineHeight: 20,
  },
  // --- Detail ---
//   detailContent: { padding: 18 },
//   detailHeader: { marginBottom: 12 },
//   detailTitle: {
//     fontSize: 22,
//     fontWeight: "800",
//     color: colors.primary,
//   },
//   detailSeparator: {
//     height: 3,
//     width: 60,
//     backgroundColor: colors.secondary,
//     borderRadius: 2,
//     marginTop: 6,
//   },
//   detailBody: {
//     fontSize: 16,
//     color: colors.textDark,
//     lineHeight: 24,
//   },
  // --- Detail screen mới ---
  detailContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB", // nền xám nhạt dễ đọc
  },
  detailHeaderBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },
  backBtnText: {
    fontSize: 18,
    color: "white",
  },
  detailHeaderTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  detailScroll: {
    padding: 16,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 6,
  },
  detailSeparator: {
    height: 3,
    width: 60,
    backgroundColor: "#6366F1",
    borderRadius: 2,
    marginBottom: 16,
  },
  detailBody: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
    textAlign: "justify",
  },
});
