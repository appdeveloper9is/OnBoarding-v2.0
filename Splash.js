import React, { useEffect } from "react";
import { Text, SafeAreaView, View, ImageBackground, Image } from "react-native";

const Splash = (navigation) => {
    useEffect(() => {
            setTimeout(() => {
                navigation.navigation.replace("AnimatedScreen");
            }, 3000);

        },
    );

    return (
        <SafeAreaView >
            <View style={{justifyContent:"center", height:"100%", width:"100%"}}>
                <Image source={require("./Images/Logo.png")} style={{
                    alignSelf:"center",
                    height:76, width:95,
                }} />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize:36, alignSelf:"center",color:"black", marginTop:33}}>
                    Onboarding
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default Splash;
