import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import ProductCard from '../component/ProductCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../component/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../component/Button';

const ProductDetailsScreen = () => {
  const data = [
    {
      id: '1',
      title: 'Lays Classic Chips',
      quantity: '150g',
      price: 10,
      mrp: 15,
      image:
        'https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png',
    },
    {
      id: '2',
      title: 'Coca Cola Can',
      quantity: '350ml',
      price: 20,
      mrp: 30,
      image:
        'https://wallpapers.com/images/hd/assorted-soft-drinks-collection-0bssdibxr7paa77c.png',
    },
    {
      id: '3',
      title: 'Oreo Biscuits',
      quantity: '120g',
      price: 25,
      mrp: 35,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShKQ22CEnRrRrFxMMOf5yoCpok-Xp-YpGXg&s',
    },
    {
      id: '4',
      title: 'Carrot',
      quantity: '500 g',
      price: 18,
      mrp: 22,
      image:
        'https://t3.ftcdn.net/jpg/02/28/33/96/240_F_228339660_znkY8wXvjXNnqylBwUwwffT1E5yerjBg.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
                  <StatusBar backgroundColor="#5abe69" barStyle="like-content" />
      
      <CustomHeader title="Item Details" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: hp('14%') }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/4/18/e191fa20-2e61-41ca-a0d7-7a7fc8401142_1766_1.png',
          }}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.stockDot} />

        <View style={styles.infoSection}>
          <Text style={styles.title}>Fortune Sun Lite Refined Sunflower Oil</Text>
          <View style={styles.starRow}>
            {[1, 2, 3, 4].map((_, i) => (
              <Icon key={i} name="star" style={styles.rating} />
            ))}
          </View>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.mrp}>$14</Text>
          <Text style={styles.price}>$12</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>
        </View>

        <Text style={styles.description}>
          A healthier choice for daily cooking. Low in saturated fats and rich in vitamin E.
        </Text>

        <View style={styles.reviewSection}>
          <Text style={styles.reviewTitle}>Reviews & Ratings</Text>
          <View style={styles.reviewRow}>
            <Text style={styles.overallRating}>4.2</Text>
            <View style={styles.reviewInfo}>
              <View style={styles.starRow}>
                {[1, 2, 3, 4].map((_, i) => (
                  <Icon key={i} name="star" style={styles.reviewStars} />
                ))}
              </View>
              <Text style={styles.reviewCount}>120 Reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.reviewItem}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.reviewerImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.reviewerName}>Johnson Smith</Text>
            <Text style={styles.reviewerText}>
              Recently I have purchased this Oil and its quality is very nice. I loved it.
            </Text>
          </View>
        </View>

        <View style={styles.reviewImagesRow}>
          <Image
            source={{
              uri: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/4/18/e191fa20-2e61-41ca-a0d7-7a7fc8401142_1766_1.png',
            }}
            style={styles.reviewImage}
          />
          <Image
            source={{
              uri: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/4/18/e191fa20-2e61-41ca-a0d7-7a7fc8401142_1766_1.png',
            }}
            style={styles.reviewImage}
          />
        </View>

        <View style={styles.similarProduct}>
          <Text style={styles.similarTitle}>Similar Products</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                mrp={item.mrp}
                image={item.image}
                show={true}
                Cstyle={{ width: wp('42%') }}
              />
            )}
          />
        </View>
      </ScrollView>

      {/* Add to Cart + Buy Now */}
    
    <View style={styles.bottomActionBar}>
  <Button
    title="Add to Cart"
    onPress={() => {}}
    wrapper={{ flex: 1, marginRight: wp("3%") }}
    button={{
      height: hp("6%"),
      backgroundColor: "#f1f1f1",
      borderRadius: wp("2%"),
    }}
    buttonText={{
      fontSize: wp("4%"),
      color: "#333",
      fontWeight: "600",
    }}
  />
  <Button
    title="Buy Now"
    onPress={() => {}}
    wrapper={{ flex: 1 }}
    button={{
      height: hp("6%"),
      backgroundColor: "#55C364",
      borderRadius: wp("2%"),
    }}
    buttonText={{
      fontSize: wp("4%"),
      color: "#fff",
      fontWeight: "600",
    }}
  />
</View>



    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
  },
  productImage: {
    width: wp('100%'),
    height: hp('35%'),
    backgroundColor: '#f5f5f5',
  },
  stockDot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: wp('5%'),
    marginVertical: hp('1.5%'),
  },
  infoSection: {
    paddingHorizontal: wp('4%'),
  },
  title: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#222',
    marginBottom: hp('0.5%'),
  },
  starRow: {
    flexDirection: 'row',
    gap: wp('1.5%'),
  },
  rating: {
    color: 'green',
    fontSize: wp('4%'),
    marginRight: wp('1%'),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    gap: wp('3%'),
  },
  mrp: {
    fontSize: wp('3.5%'),
    textDecorationLine: 'line-through',
    color: '#888',
  },
  price: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  discountBadge: {
    backgroundColor: '#55c364',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('1.5%'),
  },
  discountText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('3%'),
  },
  description: {
    fontSize: wp('3.4%'),
    color: '#555',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  reviewSection: {
    paddingHorizontal: wp('4%'),
  },
  reviewTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    marginBottom: hp('1%'),
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  overallRating: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#55C364',
  },
  reviewInfo: {
    marginLeft: wp('2%'),
  },
  reviewStars: {
    fontSize: wp('4.2%'),
    marginBottom: hp('0.5%'),
    color: '#6FCF97',
  },
  reviewCount: {
    fontSize: wp('3.2%'),
    color: 'gray',
  },
  reviewItem: {
    flexDirection: 'row',
    gap: wp('3%'),
    marginBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1%'),
  },
  reviewerImage: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
  },
  reviewerName: {
    fontWeight: 'bold',
    fontSize: wp('3.5%'),
  },
  reviewerText: {
    fontSize: wp('3.3%'),
    marginTop: hp('0.5%'),
    color: '#333',
  },
  reviewImagesRow: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    gap: wp('2%'),
    paddingHorizontal: wp('4%'),
  },
  reviewImage: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('2%'),
    backgroundColor: '#f1f1f1',
  },
  similarProduct: {
    marginTop: hp('2%'),
  },
  similarTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('1%'),
  },
  productList: {
    paddingLeft: wp('4%'),
    paddingRight: wp('2%'),
  },

  
  bottomActionBar: {
  position: 'absolute',
  bottom: 0,
  width: wp('100%'),
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderColor: '#eee',
  paddingHorizontal: wp('4%'),
  paddingVertical: hp('1.5%'),
},



});
