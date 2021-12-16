import React, {useContext} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import ProgressCircle from "react-native-progress-circle";
import {useNavigation} from "@react-navigation/native";
import BlogContext from "../ContextApi/ApiData";


const Pending =()=> {
    const navigation = useNavigation()
    const {data} = useContext(BlogContext)
    return(

        <View style={{height:"100%", backgroundColor:"#F0F4FD"}}>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item,index}) => {
                    return (

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("BasicInfoForm",{
                                    name: item.form_name,

                                })
                            }}>
                            {item.form_status === "PENDING" ?
                                <View style={{
                                    flexDirection: "row",
                                    backgroundColor: "white",
                                    borderRadius: 8,
                                    marginTop: 10,
                                    height: 72,
                                    marginHorizontal: 22
                                }}>

                                    <View style={{justifyContent: "center", marginLeft: 22, alignItems: "center"}}>
                                        <ProgressCircle
                                            percent={70}
                                            radius={25}
                                            borderWidth={5}
                                            color={"#FFB84D"}
                                            shadowColor="#F2F2F7"
                                            bgColor="#fff"
                                        >
                                        </ProgressCircle>


                                    </View>
                                    <View style={{
                                        marginLeft: 28,
                                        height: "100%",
                                        width: 220,
                                        justifyContent: "center",
                                        borderRadius: 8
                                    }}>
                                        <Text style={{fontFamily: "Poppins-Bold", fontSize: 16, color: "black"}}>
                                            {item.form_name}
                                        </Text>
                                        <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", color: "black"}}>
                                            2 days ago
                                        </Text>
                                    </View>
                                </View>: null}
                        </TouchableOpacity>
                    );
                }}
            />
        </View>

    )
}
export default Pending