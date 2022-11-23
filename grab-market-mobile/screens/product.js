import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";

import Avatar from "../assets/icons/avatar.png";
import { API_URL } from "../config/constants";

export default function ProductScreen(props) {
  const { id } = props.route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        console.log(result.data.product);
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.productImage}
            source={{ uri: `${API_URL}/${product.imageUrl}` }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.productSection}>
          <View style={styles.productSeller}>
            <Image style={styles.avatarImage} source={Avatar} />
            <Text>{product.seller}</Text>
          </View>
          <View style={styles.divider} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
  },
  productSeller: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  productSection: {
    padding: 8,
  },
  divider: {
    backgroundColor: "#e9ecef",
    height: 1,
    marginVertical: 16,
  },
});
