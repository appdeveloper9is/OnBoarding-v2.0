import React from "react";
import {Image, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Route from "../Route";
import TextInputIcon from "react-native-paper/src/components/TextInput/Adornment/TextInputIcon";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyProfile = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
            <View style={{height: "100%", backgroundColor: "white"}}>
                <ScrollView>
                    <View style={{

                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        alignItems: "center",
                        marginTop: 4,
                        marginHorizontal:"10%",


                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,

                    }}>

                        <View style={{
                            height: 100,
                            width: 100,

                            borderColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 100 / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            marginTop: 30,

                        }}>
                            <View style={{
                                height: "100%",
                                width: "100%",
                                borderWidth: 7,
                                borderColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 200,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image style={{height: "100%", width: "100%", borderRadius: 200,resizeMode:"contain"}}
                                       source={require("../Images/profile.png")}/>
                            </View>
                        </View>
                        <View style={{marginTop: 24}}>
                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 20, color: "black"}}>
                                Jane Doe
                            </Text>
                            <Text style={{fontSize: 10, fontFamily: "Poppins-Regular", color: "black"}}>
                                JR NodeJS Developer
                            </Text>

                        </View>
                        <View style={{justifyContent: "center", marginTop: 22, flex:1}}>
                            <View>
                                <TextInputIcon name={() => <SimpleLineIcons name="phone" color="black"/>}/>
                            </View>
                            <Text style={{height:"100%",fontSize: 12, fontFamily: "Poppins-Regular", marginLeft: 30, color: "black", width:150}}>
                                +92 332 4810428
                            </Text>
                        </View>
                        <View style={{flex:1,justifyContent: "center", marginTop: 22}}>
                            <View>
                                <TextInputIcon name={() => <Fontisto  name="email" color="black"/>}/>
                            </View>
                            <Text style={{fontFamily: "Poppins-Regular",fontSize: 12, marginLeft: 30, color: "black", width:150}}>
                                Janedoe@visionx
                            </Text>
                        </View>
                        <View style={{justifyContent: "center", marginTop: 22}}>
                            <View>
                                <TextInputIcon name={() => <Feather name="map-pin" color="black"/>}/>
                            </View>
                            <Text style={{width: 150, fontSize: 12,fontFamily: "Poppins-Regular", marginLeft: 30, color: "black", marginBottom:20,}}>
                                329, street 9, walton road
                            </Text>
                        </View>
                    </View>
                    <View style={{

                        backgroundColor: "#FFF3E9",
                        marginTop: 24,
                        borderRadius: 20,
                        marginHorizontal:"10%",
                        alignItems: "center",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: "Poppins-Bold",
                                marginTop: 30,
                                color: "black"
                            }}>Buddy</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginHorizontal:"7%"}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Buddy")}>

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
                                        borderWidth: 5,
                                        borderColor: "rgba(255, 103, 10, 0.5)",
                                        borderRadius: 200,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Image style={{height: "100%", width: "100%", borderRadius: 200}}
                                               source={require("../Images/buddy2.png")}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{flex:1,marginTop: 20, marginLeft:"6%"}}>
                                <Text
                                    style={{fontSize: hp('1.8%'), color: "black", fontFamily: "Poppins-Bold", marginBottom: 5}}>
                                    Sibghatullah Gillani
                                </Text>
                                <Text
                                    style={{

                                        fontFamily: "Poppins-Regular",
                                        color: "black",
                                        marginBottom: 5,
                                        fontSize: hp('1.8%')
                                    }}>
                                    Lead Frontend
                                </Text>
                                <Text style={{fontSize: hp('1.8%'), fontFamily: "Poppins-Regular", color: "black"}}>
                                    Cutomer Products
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            width: "60%",
                            marginTop: "5%",
                            marginBottom:"10%"
                        }}>

                            <TouchableOpacity style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50
                            }}>
                                <TextInput.Icon name={() => <SimpleLineIcons name="phone" color="white"/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextInput.Icon name={() => <Feather name="message-circle" color="white"/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextInput.Icon name={() => <Ionicons name="person-add-outline" color="white"/>}/>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{

                        backgroundColor: "#EBF3FF",
                        marginTop: 24,
                        borderRadius: 20,
                        marginHorizontal:"10%",
                        alignItems: "center",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: "Poppins-Bold",
                                marginTop: 30,
                                color: "black"
                            }}>Buddy</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginHorizontal:"7%"}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Buddy")}>

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
                                        borderWidth: 5,
                                        borderColor: "rgba(62, 102, 251, 0.5)",
                                        borderRadius: 200,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Image style={{height: "100%", width: "100%", borderRadius: 200}}
                                               source={require("../Images/buddy2.png")}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{flex:1,marginTop: 20, marginLeft:"6%"}}>
                                <Text
                                    style={{fontSize: hp('1.8%'), color: "black", fontFamily: "Poppins-Bold", marginBottom: 5}}>
                                    Sibghatullah Gillani
                                </Text>
                                <Text
                                    style={{

                                        fontFamily: "Poppins-Regular",
                                        color: "black",
                                        marginBottom: 5,
                                        fontSize: hp('1.8%')
                                    }}>
                                    Lead Frontend
                                </Text>
                                <Text style={{fontSize: hp('1.8%'), fontFamily: "Poppins-Regular", color: "black"}}>
                                    Cutomer Products
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            width: "60%",
                            marginTop: "5%",
                            marginBottom:"10%"
                        }}>

                            <TouchableOpacity style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50
                            }}>
                                <TextInput.Icon name={() => <SimpleLineIcons name="phone" color="white"/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextInput.Icon name={() => <Feather name="message-circle" color="white"/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 36,
                                width: 36,
                                backgroundColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextInput.Icon name={() => <Ionicons name="person-add-outline" color="white"/>}/>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )


}
export default MyProfile