import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
	return (
		<View className="flex items-center justify-center mt-10">
			<Image
				className="w-[200px] h-[32px] object-contain"
				source={require("../../assets/images/compassGo-logo.png")}
			/>
			<Image
				className="w-[100%] h-[280px] object-cover mt-5"
				source={require("../../assets/images/bg.png")}
			/>
			<View className="p-5">
				<Text className="text-2xl font-bold text-center mt-5">
					Find Your Next Destination.
				</Text>
				<Text className="text-base font-regular text-center mt-4 text-gray-500">
					Explore uncharted paths. Discover hidden gems. Make every journey
					unforgettable with CompassGo
				</Text>
				<TouchableOpacity
					className="bg-blue-500 p-4 flex mt-10 rounded-full"
					onPress={() => console.log("button click")}
				>
					<Text className="text-white text-center font-semibold text-base ">
						Login with Google
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginScreen;
