import React from "react";
import {Image, SafeAreaView, ScrollView, View} from "react-native";
import {Text} from "react-native";
const PeopleInfo =({route})=>{
    const {name, designation} = route.params;

    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center",backgroundColor:"white"}}>

                <ScrollView>
                    <View style={{
                        height: 240,
                        width: 328,
                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        marginHorizontal:10,

                    }}>

                        <View style={{
                            height: 100,
                            width: 100,

                            borderColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 100 / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            marginTop: 30
                        }}>
                            <View style={{
                                height: "100%",
                                width: "100%",
                                borderWidth: 7,
                                borderColor: "rgba(255, 103, 10, 0.5)",
                                borderRadius: 200,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image style={{height: "100%", width: "100%", borderRadius: 200}}
                                       source={require("./Images/buddy2.png")}/>
                            </View>
                        </View>
                        <View style={{marginTop: 9, alignItems:"center"}}>
                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 20, color: "black"}}>
                                {name}
                            </Text>
                            <Text style={{fontSize: 17, fontFamily: "Poppins-Regular",fontWeight:"500", color: "black"}}>
                                {designation}
                            </Text>
                            <Text style={{fontSize: 13, fontFamily: "Poppins-Regular", color: "black", marginTop:2}}>
                                Cutomer Products
                            </Text>
                        </View>
                    </View>

                    <View style={{
                        width: 328,
                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        marginHorizontal:10,

                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>

                        <View>
                            <Text style={{fontSize:18, fontFamily:"Poppins-Bold", marginTop:20,color:"black"}}>
                                About
                            </Text>
                        </View>
                        <View style={{marginTop: 24}}>
                            <Text style={{marginHorizontal:15,fontFamily: "Poppins-Regular", fontSize: 14, color: "black"}}>
                                Sibghatullah Gillani is Front End lead at CompanyX for 2 and half years. He is leading Front End Team for Customer products.

                            </Text>
                        </View>
                        <View style={{justifyContent: "center", marginTop: 10,alignItems:"center"}}>
                            <Text style={{fontSize: 18, fontFamily: "Poppins-Bold", color: "black"}}>
                                Intro Video
                            </Text>
                        </View>
                        <View >
                            <Image style={{height:200, marginBottom:10,width:275,borderRadius:8}} source={require("./Images/check.jpg")}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
)
}

export default PeopleInfo