import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";

export default function Login() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/images/login.jpeg")}
        style={{
          width: width,
          height: height * 0.7,
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Prayan</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.description}>
            Discover your next adventure effortlessly. Personalized itineraries
            at your fingertips. Travel smarter with AI-driven insights.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("auth/sign-in")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  titleContainer: {
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    textAlign: "center",
    lineHeight: 38,
    padding: 12,
  },
  description: {
    fontFamily: "outfit",
    fontSize: 16,
    textAlign: "center",
    color: Colors.GRAY,
    maxWidth: "80%",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit",
    fontSize: 16,
  },
});
