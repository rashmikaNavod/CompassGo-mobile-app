//නමෝ බුද්ධාය
import LoginScreen from "@/components/screen/LoginScreen";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const App = () => {
	const [fontsLoaded, fontError] = useFonts({
		"Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
		"Outfit-Semibold": require("../assets/fonts/Outfit-SemiBold.ttf"),
		"Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<SafeAreaView>
			<LoginScreen />
		</SafeAreaView>
	);
};

export default App;
