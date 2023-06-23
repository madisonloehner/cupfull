import * as Font from "expo-font";

export const useFonts = async () => {

  await Font.loadAsync({
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    RobotoMono: require("../assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf"),
  });
};