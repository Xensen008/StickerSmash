import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";


const PlaceholderImage = require('../../assets/images/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label=" Choose a Photo" />
        <Button label="Use This Photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#1e90ff",
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});