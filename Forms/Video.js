import React, {useState} from "react";
import {Button, Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";


const Video=()=>{

    const navigation = useNavigation()

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return(
        <SafeAreaView forceInset={{ bottom: 'never'}}  style={{backgroundColor:"#635ECD"}}>
        <View style={{height:"100%",width:"100%" ,backgroundColor:"#635ECD", justifyContent:"center"}}>

                <View style={{height:56,width:"100%" ,justifyContent:"center",backgroundColor:"#635ECD",alignItems:"center"}}>
                    <Text style={{fontSize:20, fontFamily:"Poppins-Bold", color:"white"}} >
                        Intro Video Upload
                    </Text>
                </View>

                <View style={{flex:1, backgroundColor: "white", borderTopStartRadius:20, borderTopEndRadius:20}}>

                    <ScrollView>

                        <View style={{marginBottom:30}}>

                            <View>
                                <Image style={{height: 350,borderTopLeftRadius:20,width:"100%", borderTopRightRadius:20}} source={require("../Images/check.jpg")}/>
                            </View>

                        </View>
                        <View style={{
                            height: 300,
                            width: 233,
                            shadowColor: "#000",
                            backgroundColor: "white",
                            borderRadius: 20,
                           alignSelf:"center"

                        }}>

                            <View style={{justifyContent:"center", alignItems:"center"}}>
                                <Text style={{fontSize:14,width:266, fontFamily:"Poppins-Regular",fontWeight:"bold", marginTop:20,color:"black",textAlign:"center"}}>
                                    No video uploaded. Please  upload one from the options given below
                                </Text>

                            </View>


                            <View style={{backgroundColor:"#635ECD", flexDirection:"row", marginTop:20, borderRadius:10, justifyContent:"center"}}>
                                <View style={{marginTop:10, justifyContent:"center", }}>
                                    <TextInput.Icon style={{marginLeft:40, marginBottom:16}} name={()=> <Feather name="aperture" color="white" size={20}/>}/>

                                </View>
                                <TouchableOpacity style={{height:66, width:233,justifyContent:"center", alignItems:"center", borderRadius:10}}
                                    onPress={() => alert('This is a button!')}
                                >
                                    <Text style={{color:"white", fontFamily:"Poppins-Regular", fontSize:12,fontWeight:"bold"}}>
                                       Make your own
                                    </Text>


                                </TouchableOpacity>

                            </View>
                            <View style={{backgroundColor:"#635ECD", flexDirection:"row", marginTop:20, borderRadius:10, justifyContent:"center"}}>
                                <View style={{marginTop:10, justifyContent:"center", }}>
                                    <TextInput.Icon style={{marginLeft:40, marginBottom:16}} name={()=> <Entypo name="mobile" color="white" size={20}/>}/>

                                </View>
                                <TouchableOpacity style={{height:66, width:233,justifyContent:"center", alignItems:"center", borderRadius:10}}
                                                  onPress={() => alert('This is a button!')}
                                >
                                    <Text style={{color:"white", fontFamily:"Poppins-Regular", fontWeight:"bold" , fontSize:12}}>
                                        Upload form device
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
                                    <TextInput.Icon onPress={()=>navigation.navigate("BottomNavigation")} name={() => <Ionicons  color="#8083A3" name="ios-chevron-back" size={20}/>}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> navigation.navigate("VideoUpload")} style={{alignItems:"center",justifyContent:"center",height:46, width:"55%",backgroundColor:"#635ECD", borderRadius:50,}}>

                                    <Text style={{fontFamily:"Inter-Bold", fontSize:16, color:"white"}}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                    <TextInput.Icon onPress={()=>navigation.navigate("BottomNavigation")} name={() => <Feather  color="#8083A3" name="info" size={20}/>}/>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </View>
        </View>
        </SafeAreaView>
    )
}
export default Video;