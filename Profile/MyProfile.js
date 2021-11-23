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

const MyProfile = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center",backgroundColor:"white"}}>
                <ScrollView>
                <View style={{
                    height: 410,
                    width: 328,
                    shadowColor: "#000",
                    backgroundColor: "white",
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 4,
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
                        <Image source={require("../Images/Person.png")} style={{
                            height: 96,
                            width: 96,
                            borderWidth: 6,
                            padding: 20,
                            marginTop: 35,
                            borderColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 96 / 2
                        }}/>
                    </View>
                    <View style={{marginTop: 24}}>
                        <Text style={{fontFamily: "Poppins-Bold", fontSize: 28, color: "black"}}>
                            Jane Doe
                        </Text>
                        <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", color: "black"}}>
                            JR NodeJS Developer
                        </Text>

                    </View>
                    <View style={{justifyContent: "center", marginTop: 22, marginRight: 30}}>
                        <View>
                            <TextInputIcon name={() => <SimpleLineIcons name="phone" color="black"/>}/>
                        </View>
                        <Text style={{fontSize: 16, fontFamily: "Poppins-Regular", marginLeft: 30, color: "black"}}>
                            +92 332 4810428
                        </Text>
                    </View>
                    <View style={{justifyContent: "center", marginTop: 22, marginRight: 30}}>
                        <View>
                            <TextInputIcon name={() => <Fontisto name="email" color="black"/>}/>
                        </View>
                        <Text style={{fontFamily: "Poppins-Regular", marginLeft: 30, color: "black"}}>
                            Janedoe@visionx.io
                        </Text>
                    </View>
                    <View style={{justifyContent: "center", marginTop: 22, marginRight: 30}}>
                        <View>
                            <TextInputIcon name={() => <Feather name="map-pin" color="black"/>}/>
                        </View>
                        <Text style={{width: 140, fontFamily: "Poppins-Regular", marginLeft: 30, color: "black"}}>
                            329, street 9, walton road
                        </Text>
                    </View>
                </View>
                <View style={{
                    height: 241,
                    width: 328,
                    backgroundColor: "#FFF3E9",
                    marginTop: 24,
                    borderRadius: 20,
                    marginHorizontal:10,
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
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Buddy")}>


                        <Image source={require("../Images/Person.png")} style={{
                            height: 90,
                            width: 90,
                            borderWidth: 3,
                            padding: 20,
                            marginTop: 35,
                            borderColor: "rgba(255, 103, 10, 0.5)",
                            borderRadius: 96 / 2
                        }}/>
                        </TouchableOpacity>
                        <View style={{marginLeft: 20, marginTop: 20}}>
                            <Text style={{fontSize: 16, color: "black", fontFamily: "Poppins-Bold", marginBottom: 5}}>
                                Sibghatullah Gillani
                            </Text>
                            <Text
                                style={{fontSize: 16, fontFamily: "Poppins-Regular", color: "black", marginBottom: 5}}>
                                Lead Frontend
                            </Text>
                            <Text style={{fontSize: 16, fontFamily: "Poppins-Regular", color: "black"}}>
                                Cutomer Products
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly", width: "60%", marginTop: "2%"}}>

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
                    height: 254,
                    width: 328,
                    backgroundColor: "#EBF3FF",
                    marginTop: 24,
                    marginHorizontal:10,
                    borderRadius: 20,
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
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={require("../Images/Person.png")} style={{
                            height: 90,
                            width: 90,
                            borderWidth: 3,
                            padding: 20,
                            marginTop: 35,
                            borderColor: "rgba(62, 102, 251, 0.5)",
                            borderRadius: 96 / 2
                        }}/>
                        <View style={{marginLeft: 20, marginTop: 20}}>
                            <Text style={{fontSize: 16, color: "black", fontFamily: "Poppins-Bold", marginBottom: 5}}>
                                Sibghatullah Gillani
                            </Text>
                            <Text
                                style={{fontSize: 16, fontFamily: "Poppins-Regular", color: "black", marginBottom: 5}}>
                                Lead Frontend
                            </Text>
                            <Text style={{fontSize: 16, fontFamily: "Poppins-Regular", color: "black"}}>
                                Cutomer Products
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly", width: "60%", marginTop: "2%"}}>

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