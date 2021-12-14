import React from "react";
import {Image, SafeAreaView, Text, View, ScrollView, TouchableOpacity} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import {TextInput} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";


const Buddy = () => {
    return (

        <SafeAreaView style={{backgroundColor: "white"}}>
            <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>

                <ScrollView>
                    <View style={{

                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",


                    }}>

                        <View style={{
                            height: 110,
                            width: 110,

                            borderColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 110 / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",

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
                                       source={require("../Images/buddy2.png")}/>
                            </View>
                        </View>
                        <View style={{marginTop: 9, alignItems: "center"}}>
                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 20, color: "black"}}>
                                Sibghatullah Gillani
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: "Poppins-Regular",
                                fontWeight: "500",
                                color: "black"
                            }}>
                                Lead Frontend
                            </Text>
                            <Text style={{fontSize: 13, fontFamily: "Poppins-Regular", color: "black", marginTop: 2}}>
                                Cutomer Products
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 20}}>

                        <TouchableOpacity style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: 50,
                            width: 50,
                            backgroundColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 50
                        }}>
                            <TextInput.Icon name={() => <SimpleLineIcons name="phone" color="white" size={20}/>}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{

                            height: 50,
                            width: 50,
                            marginLeft: 20,
                            backgroundColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <TextInput.Icon name={() => <Feather name="message-circle" color="white" size={20}/>}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 50,
                            width: 50,
                            marginLeft: 20,
                            backgroundColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <TextInput.Icon name={() => <Ionicons name="person-add-outline" color="white" size={20}/>}/>
                        </TouchableOpacity>

                    </View>

                    <View style={{

                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        marginHorizontal: "10%",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>

                        <View>
                            <Text style={{fontSize: 18, fontFamily: "Poppins-Bold", marginTop: 20, color: "black"}}>
                                About
                            </Text>

                        </View>
                        <View style={{marginTop: 24}}>
                            <Text style={{
                                marginHorizontal: 15,
                                fontFamily: "Poppins-Regular",
                                fontSize: 14,
                                color: "black"
                            }}>
                                Sibghatullah Gillani is Front End lead at CompanyX for 2 and half years. He is leading
                                Front End Team for Customer products.
                            </Text>
                        </View>
                        <View style={{justifyContent: "center", marginTop: 10, alignItems: "center"}}>
                            <Text style={{fontSize: 18, fontFamily: "Poppins-Bold", color: "black"}}>
                                Intro Video
                            </Text>
                        </View>
                        <View style={{height: 40, width: 70}}>
                            <Image style={{height: "100%", width: "100%", borderRadius: 8}}
                                   source={require("../Images/check.jpg")}/>

                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default Buddy