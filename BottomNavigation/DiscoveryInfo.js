import React from "react";
import FastImage from 'react-native-fast-image'

import {Image, ImageBackground, SafeAreaView, ScrollView, Text, View} from "react-native";
import {TouchableOpacity} from "react-native";
import {TextInput} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";


const DiscoveryInfo=()=>{
    const navigation = useNavigation()

    return(
                <ScrollView>
                    <View style={{height:"100%", width:"100%"}}>

                        <FastImage source={require("../Images/check.jpg")} style={{height:384, width:"100%"}}>
                            <View>
                                <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:50, width:50,backgroundColor:"white", borderRadius:50/2,marginTop:30, marginLeft:20}}>
                                    <TextInput.Icon onPress={()=>navigation.navigate("BottomNavigation")} name={() => <AntDesign  color="black" name="arrowleft" size={20}/>}/>
                                </TouchableOpacity>
                            </View>
                        </FastImage>
                        <View style={{height:"100%", justifyContent:"center", flexDirection:"row", marginHorizontal:24,marginTop:25}}>
                            <View>
                                <Text style={{color:"black", fontFamily:"Poppins-Bold", fontSize:20}}>
                                VisionX just got selected for
                                P@sha ICT awards
                                </Text>
                            <Text style={{color:"black", fontSize:16, fontFamily:"Inter-Regular"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lectus risus orci sit accumsan auctor. Integer vitae elementum arcu et etiam aenean in. Non quam justo, eget adipiscing. Blandit netus pellentesque at mauris ac ut consectetur. Purus ipsum dis nunc risus suspendisse fermentum, ultrices egestas. Neque mi cursus nec malesuada et rhoncus. Faucibus felis, placerat vel consectetur velit et nibh. Magna commodo vitae turpis massa ipsum ut sagittis amet, justo.
                                Libero, ac vel nunc, pretium fringilla. Scelerisque pretium vel congue libero neque, ultrices interdum. Non, eget in diam et sagittis. Eu in venenatis odio eu ornare sed. Enim fermentum gravida facilisis maecenas fringilla diam at proin arcu. Vitae at pretium massa pellentesque tincidunt eget. Etiam nibh nulla ornare turpis senectus. Volutpat id porta metus elit vitae. In facilisi faucibus ridiculus consectetur sociis.
                            </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>)
}
export default DiscoveryInfo