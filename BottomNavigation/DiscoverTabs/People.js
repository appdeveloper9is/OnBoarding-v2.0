import React from "react";
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const People =()=>{
    const navigation = useNavigation()
    const data = [
        {
            name: "James Torff",
            email: "Full Stack developer",


        },
        {
            name: "Tekken Tournament held at VisionX",
            email: "2 days ago",
            },

        {
            name: "Tekken Tournament held at VisionX",
            email: "1 day ago",


        },
        {
            name: "Video",
            email: "1 day ago",


        },
        {
            name: "Buddy Info",
            email: "1 day passed",


        },
        {
            name: "Video",
            email: "1 day passed",
        },

    ]


    return(

        <SafeAreaView >
            <View style={{height:"100%", width:"100%", backgroundColor:"white", shadowRadius:  2,shadowColor: "#000",
            }}>
                <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                    <View

                        style={{
                            backgroundColor: '#fff',
                            width: "100%",
                            height: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity:  0.4,
                            shadowRadius: 3,
                            elevation: 5,
                        }}
                    />

                </View>

                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => {
                        return (

                            <TouchableOpacity
                                onPress={() => {
                                navigation.navigate("MyProfile")

                                }}>
                                <View style={{flexDirection:"row" , backgroundColor:"white", borderRadius:8, marginTop:0, marginLeft:20, height:72, width:365}}>
                                    <View style={{justifyContent:"center"}}>
                                        <Image source={require("../DiscoverTabs/Images/check.jpg")} style={{height:48,width:48, borderRadius:24}}/>
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
        </SafeAreaView>
    )
}

export default People