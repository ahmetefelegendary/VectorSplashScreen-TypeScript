import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Page4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page4}>
      <View style={styles.group}>
        <Text style={styles.moreAttractive}>{`
More
Attractive`}</Text>
        <TouchableOpacity
          style={styles.rectangle}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Page1")}
        />
        <View style={styles.view}>
          <Text style={[styles.skip, styles.skipPosition]}>Go</Text>
        </View>
        <Image
          style={styles.pathIcon}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Text
          style={[styles.greatThisIllustra, styles.skipPosition]}
        >{`Great, this illustration When passion fades, only true love lasts forever.
`}</Text>
      </View>
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/11111111111809181.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skipPosition: {
    letterSpacing: 0,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  moreAttractive: {
    marginTop: -153,
    fontSize: FontSize.size_27xl,
    letterSpacing: 1,
    lineHeight: 58,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    height: "16.34%",
    width: "56.39%",
    top: "83.66%",
    right: "43.61%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    position: "absolute",
  },
  skip: {
    marginTop: -12,
    fontSize: FontSize.size_2xl,
    color: Color.darkslategray,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
  },
  view: {
    height: "7.84%",
    width: "13.77%",
    top: "87.58%",
    right: "81.97%",
    bottom: "4.58%",
    left: "4.26%",
    position: "absolute",
    overflow: "hidden",
  },
  pathIcon: {
    height: "4.9%",
    width: "6.56%",
    top: "88.89%",
    right: "48.85%",
    bottom: "6.21%",
    left: "44.59%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  greatThisIllustra: {
    top: "63.07%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.7,
    color: Color.white,
    letterSpacing: 0,
    width: "100%",
  },
  group: {
    top: 41,
    left: 40,
    width: 305,
    height: 306,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 500,
    left: -20,
    width: 516,
    height: 390,
    position: "absolute",
  },
  page4: {
    backgroundColor: "#da9680",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Page4;
