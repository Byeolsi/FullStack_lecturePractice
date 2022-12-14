import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import dayjs from "dayjs";

import Avatar from "../assets/icons/avatar.png";
import { API_URL } from "../config/constants";
import ProductCard from "../components/ProductCard";
// import { TouchableOpacity } from "react-native-web";

export default function ProductScreen(props) {
  const { id } = props.route.params;

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

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

    axios
      .get(`${API_URL}/products/${id}/recommendation`)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const onPress = () => {
    if (product.soldout === 1) {
      Alert.alert("구매가 완료되었습니다.");
    }
  };

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
          <View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}원</Text>
            <Text style={styles.productDate}>
              {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
            </Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.recommendationHeadline}>추천 상품</Text>
          <View style={styles.recommendationSection}>
            {products.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  navigation={props.navigation}
                />
              );
            })}
          </View>
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
  productName: {
    fontSize: 20,
    fontWeight: "400",
  },
  productPrice: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 8,
  },
  productDate: {
    fontSize: 14,
    marginTop: 4,
    color: "rgb(204, 204, 204)",
  },
  productDescription: {
    marginTop: 16,
    fontSize: 17,
    marginBottom: 32,
  },
  recommendationSection: {
    alignItems: "center",
    marginTop: 16,
    paddingBottom: 70,
  },
  recommendationHeadline: {
    fontSize: 30,
  },
});
