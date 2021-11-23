import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import ProgressCircle from "react-native-progress-circle";
import {useNavigation} from "@react-navigation/native";


const Complete =()=>{

    const navigation=useNavigation()

    const data = [
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "green",

        },
        {
            name: "Educational Details",
            email: "Intro Video",
            color: "yellow"},

        {
            name: "Buddy Info",
            email: "1 day passed",
            color:"green"

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },
    ]
    return(

        <View style={{height:"100%", backgroundColor:"#F0F4FD"}}>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item,index}) => {
                    return (

                        <TouchableOpacity
                            onPress={() => {
                                if(index ===0 ){
                                    navigation.navigate("BasicInfoForm")
                                }
                                if(index ===1 ){
                                    navigation.navigate("AddOtherDetail")
                                }
                                if(index ===2){
                                    navigation.navigate("Buddy")
                                }
                                if(index ===3){
                                    navigation.navigate("Video")
                                }

                            }}>
                            <View style={{flexDirection:"row" , backgroundColor:"white", borderRadius:8, marginTop:10,  height:72,marginHorizontal:22}}>
                                <View style={{justifyContent:"center", marginLeft:22}}>
                                    <ProgressCircle
                                        percent={30}
                                        radius={25}
                                        borderWidth={5}
                                        color={item.color}
                                        shadowColor="#F2F2F7"
                                        bgColor="#fff"
                                    >
                                    </ProgressCircle>
                                </View>
                                <View style={{ marginLeft:28, backgroundColor:"white", height:"100%",width:220, justifyContent:"center"}}>
                                    <Text style={{lineHeight:16*1.5,fontFamily:"Poppins-Bold", fontSize:16, color:"black", width:"100%", justifyContent:"center"}}>
                                        {item.name}
                                    </Text>
                                    <Text style={{fontSize:12, fontFamily:"Poppins-Regular",color:"black"}}>
                                        {item.email}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>

    )
}


export default Complete