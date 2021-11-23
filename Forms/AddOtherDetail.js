import React from "react";
import {Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import TextInputIcon from "react-native-paper/src/components/TextInput/Adornment/TextInputIcon";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";

const AddOtherDetail =()=>{
    const navigation = useNavigation()

    return(
        <SafeAreaView forceInset={{ bottom: 'never'}}  style={{backgroundColor:"#635ECD"}}>




        <View style={{height:"100%",width:"100%" ,backgroundColor:"#635ECD"}}>
            <View style={{height:56,width:"100%" ,justifyContent:"center",backgroundColor:"#635ECD",alignItems:"center"}}>
                <Text style={{fontSize:20, fontFamily:"Poppins-Bold", color:"white"}} >
                    Educational Details
                </Text>
            </View>

            <View style={{flex:1, backgroundColor: "white", borderTopStartRadius:20, borderTopEndRadius:20}}>

                <ScrollView>
                    <View style={{marginBottom:10}}>
                        <View style={{
                            height: 168,
                            paddingLeft:20,
                            shadowColor: "#000",
                            backgroundColor: "white",
                            borderRadius: 6,
                            marginTop: 40,
                            marginHorizontal:20,
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            }}>

                            <View style={{marginTop: 22, marginRight: 40}}>
                                <View>
                                    <TextInputIcon name={() => <FontAwesome name="graduation-cap" color="black"/>}/>
                                </View>
                                <Text style={{fontSize: 15, fontFamily: "Poppins-Bold", marginLeft: 25, color: "black"}}>
                                    Bachelor of Computer Science
                                </Text>
                            </View>
                            <View style={{marginRight: 40, marginTop:5}}>
                                <View>
                                    <TextInputIcon name={() => <FontAwesome name="university" color="black"/>}/>
                                </View>
                                <Text style={{fontSize: 13, fontFamily: "Poppins-Regular", marginLeft: 25, color: "#808084"}}>
                                    National University of Sciences and Technology
                                </Text>
                            </View>
                            <View style={{ marginRight: 40,marginTop:3}}>
                                <View>
                                    <TextInputIcon name={() => <MaterialCommunityIcon name="google-maps" color="black" />}/>
                                </View>
                                <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", marginLeft: 25, color: "black", marginTop:5}}>
                                   Islamabad
                                </Text>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "4%", marginHorizontal:10}}>
                                <Text style={{color:"black",fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>
                                    Sep 2016 - Sep 2020
                                </Text>
                               <Text style={{color:"#635ECD", fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>1050/1100</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{
                        height: 168,
                        paddingLeft:20,
                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 6,
                        marginTop: 10,
                        marginHorizontal:20,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>

                        <View style={{marginTop: 22, marginRight: 40}}>
                            <View>
                                <TextInputIcon name={() => <FontAwesome name="graduation-cap" color="black"/>}/>
                            </View>
                            <Text style={{fontSize: 15, fontFamily: "Poppins-Bold", marginLeft: 25, color: "black"}}>
                                Bachelor of Computer Science
                            </Text>
                        </View>
                        <View style={{marginRight: 40, marginTop:5}}>
                            <View>
                                <TextInputIcon name={() => <FontAwesome name="university" color="black"/>}/>
                            </View>
                            <Text style={{fontSize: 13, fontFamily: "Poppins-Regular", marginLeft: 25, color: "#808084"}}>
                                National University of Sciences and Technology
                            </Text>
                        </View>
                        <View style={{ marginRight: 40,marginTop:3}}>
                            <View>
                                <TextInputIcon name={() => <MaterialCommunityIcon name="google-maps" color="black" />}/>
                            </View>
                            <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", marginLeft: 25, color: "black", marginTop:5}}>
                                Islamabad
                            </Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "4%", marginHorizontal:10}}>
                            <Text style={{color:"black",fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>
                                Sep 2016 - Sep 2020
                            </Text>
                            <Text style={{color:"#635ECD", fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>1050/1100</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 168,
                        paddingLeft:20,
                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 6,
                        marginTop: 20,
                        marginHorizontal:20,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>

                        <View style={{marginTop: 22, marginRight: 40}}>
                            <View>
                                <TextInputIcon name={() => <FontAwesome name="graduation-cap" color="black"/>}/>
                            </View>
                            <Text style={{fontSize: 15, fontFamily: "Poppins-Bold", marginLeft: 25, color: "black"}}>
                                Bachelor of Computer Science
                            </Text>
                        </View>
                        <View style={{marginRight: 40, marginTop:5}}>
                            <View>
                                <TextInputIcon name={() => <FontAwesome name="university" color="black"/>}/>
                            </View>
                            <Text style={{fontSize: 13, fontFamily: "Poppins-Regular", marginLeft: 25, color: "#808084"}}>
                                National University of Sciences and Technology
                            </Text>
                        </View>
                        <View style={{ marginRight: 40,marginTop:3}}>
                            <View>
                                <TextInputIcon name={() => <MaterialCommunityIcon name="google-maps" color="black" />}/>
                            </View>
                            <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", marginLeft: 25, color: "black", marginTop:5}}>
                                Islamabad
                            </Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "4%", marginHorizontal:10}}>
                            <Text style={{color:"black",fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>
                                Sep 2016 - Sep 2020
                            </Text>
                            <Text style={{color:"#635ECD", fontFamily:"Poppins-Regular", fontSize:12, fontWeight:"bold"}}>1050/1100</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{height:"14%", backgroundColor:"white"}}>
                    <View style={{backgroundColor:"white",shadowColor: "#000",
                        shadowRadius:2,
                        shadowOffset: {
                            width:0,
                            height: -3,
                        },
                        shadowOpacity: 0.32,


                    }}>
                        <View style={{flexDirection:"row", backgroundColor:"white", justifyContent:"space-around", marginTop:20 }}>
                            <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                <TextInput.Icon onPress={()=>navigation.navigate("BottomNavigation")} name={() => <Ionicons  color="#8083A3" name="ios-chevron-back" size={20}/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate("EducationalsDetails")}  style={{alignItems:"center",justifyContent:"center",height:46, width:"55%",backgroundColor:"#635ECD", borderRadius:50,}}>
                                <Text style={{fontFamily:"Inter-Bold", fontSize:16, color:"white"}}>
                                    Add Details
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                <TextInput.Icon onPress={()=>alert("working")} name={() => <Feather  color="#8083A3" name="info" size={20}/>}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

        </SafeAreaView>)
}
export default AddOtherDetail