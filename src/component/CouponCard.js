import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CouponCard = ({ title, subtitle, code, onApply }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.footerRow}>
        <View style={styles.codeBox}>
          <Text style={styles.codeText}>{code}</Text>
        </View>

        <TouchableOpacity style={styles.applyButton} onPress={onApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  title: {
    fontSize: 14.5,
    fontWeight: "600",
    color: "#222",
  },
  subtitle: {
    fontSize: 12,
    color: "#888",
    marginVertical: 6,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  codeBox: {
    borderColor: "#5ABE69",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  codeText: {
    color: "#5ABE69",
    fontWeight: "bold",
    fontSize: 13,
  },
  applyButton: {
    backgroundColor: "#5ABE69",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyText: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
});
