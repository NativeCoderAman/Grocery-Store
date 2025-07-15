This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Button from "./Button";

const { width } = Dimensions.get("window");


const ProductCard = ({ image, title, quantity, price, mrp, Cstyle, onAddToCart }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={[styles.card, Cstyle]}>
            <TouchableOpacity style={styles.iconWrapper} onPress={toggleFavorite}>
                <Icon name="heart" size={20} color={isFavorite ? "red" : "#ccc"} />
            </TouchableOpacity>

            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.txtContainer}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Text style={styles.quantity}>{quantity}</Text>

                <View style={styles.priceAddRow}>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>${price}</Text>
                        <Text style={styles.mrp}>${mrp}</Text>
                    </View>

                    <Button
                        title="Add"
                        wrapper={{
                            width:80,
                            marginLeft:4
                        }}
                        button={{
                            height:40,
                                                       
                        }}
                       
                    />
                </View>
            </View>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: 160,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        // elevation: 1,
        // marginRight: 10,
        marginBottom: 10,
        position: "relative",
    },
    iconWrapper: {
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 1,
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        resizeMode: "contain",
    },
    txtContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 13,
        fontWeight: "600",
        color: "#333",
    },
    quantity: {
        fontSize: 11,
        color: "gray",
        marginVertical: 2,
    },
    priceAddRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },
    priceRow: {
        // flexDirection: "row",
        alignItems: "center",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    mrp: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: "line-through",
        marginLeft: 6,
    },
    button: {
        backgroundColor: "#55C364",
        width: 60,
        height: 28,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 11,
    },
});
