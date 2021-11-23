import React from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {header} from "yarn/lib/cli";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";

const VideoUpload =()=>{
    const navigation = useNavigation()

    return(
        <SafeAreaView forceInset={{ bottom: 'never'}}  style={{backgroundColor:"#635ECD"}}>
        <View style={{height:"100%",width:"100%" ,backgroundColor:"#635ECD"}}>
            <View style={{height:56,width:"100%" ,justifyContent:"center",backgroundColor:"#635ECD",alignItems:"center"}}>
                <Text style={{fontSize:20, fontFamily:"Poppins-Bold", color:"white"}} >
                    Intro Video Upload
                </Text>
            </View>

            <View style={{flex:1, backgroundColor: "white", borderTopStartRadius:20, borderTopEndRadius:20}}>

                <ScrollView>

                    <View style={{
                        height: 314,
                        shadowColor: "#000",
                        backgroundColor: "white",
                        borderRadius: 20,
                        marginTop: 50,
                        marginHorizontal:40,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Image source={require("../Images/check.jpg")} style={{height:"70%", width:"100%", borderRadius:20}}/>
                        <View style={{flex:1, backgroundColor:"white", flexDirection:"row",justifyContent:"space-between", marginHorizontal:20, marginTop:30}}>
                            <View>
                                <Text style={{color:"black", fontSize:16, fontFamily:"Poppins-Bold"}}> My Intro.MP4</Text>
                                <Text style={{color:"#808084", fontSize:14, fontFamily:"Poppins-Regular", marginLeft:3}}>1:02</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:36, width:36,backgroundColor:"#FF6254", borderRadius:50}}>
                                    <TextInput.Icon onPress={()=>alert("working")} name={() => <AntDesign  color="white" name="delete" size={20}/>}/>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </View>
                    <View style={{height:"100%", width:"100%", backgroundColor:"white", alignItems:"center", marginTop:20}}>
                        <View>
                            <Text style={{fontSize:13, color:"black",textAlign:"center", width:244, fontFamily:"Poppins-Regular"}}>
                                One video has been uploaded. If you are satisfied then tap on submit otherwise change the submiited file </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{height:66, width:232, justifyContent:"center", alignItems:"center", backgroundColor:"#F5F7FF", borderRadius:10, marginVertical:40}}>

                                <Text style={{fontSize:14, color:"#635ECD", fontFamily:"Poppins-Regular"}}>
                                    Change Submitted video
                                </Text>


                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View style={{height:"14%", backgroundColor:"white"}}>
                    <View style={{backgroundColor:"white",shadowColor: "#000",
                        shadowRadius:2,
                        shadowOffset: {
                            width:0,
                            height: -3,},
                        shadowOpacity: 0.32,


                    }}>
                        <View style={{flexDirection:"row", backgroundColor:"white", justifyContent:"space-around", marginTop:20 }}>
                            <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                <TextInput.Icon onPress={()=>navigation.navigate("Video")} name={() => <Ionicons  color="#8083A3" name="ios-chevron-back" size={20}/>}/>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{alignItems:"center",justifyContent:"center",height:46, width:"55%",backgroundColor:"#635ECD", borderRadius:50,}}>
                                <Text style={{fontFamily:"Inter-Bold", fontSize:16, color:"white"}}>
                                    Submit
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
        </SafeAreaView>
    )
}

export default VideoUpload