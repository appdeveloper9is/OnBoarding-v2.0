import React, {useContext, useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import ProgressCircle from 'react-native-progress-circle'
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import BlogContext from "../ContextApi/ApiData";


const All = ({route}) => {
    const navigation = useNavigation()
    const {data} = useContext(BlogContext)


    return (

        <View style={{height: "100%", backgroundColor: "#F0F4FD"}}>

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    return (

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("BasicInfoForm",{
                                    name: item.form_name,

                                })
                            }}>
                            {item.form_status === "COMPLETE" ?
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: "white",
                                borderRadius: 8,
                                marginTop: 10,
                                height: 72,
                                marginHorizontal: 22
                            }}>

                                <View style={{justifyContent: "center", marginLeft: 22, alignItems: "center"}}>
                                    <AntDesign name={"checkcircle"} size={45} color={"#00C2B2"}/>


                                </View>
                                <View style={{
                                    marginLeft: 28,
                                    height: "100%",
                                    width: 220,
                                    justifyContent: "center",
                                    borderRadius: 8,

                                }}>
                                    <Text style={{fontFamily: "Poppins-Bold", fontSize: 16, color: "black"}}>
                                        {item.form_name}
                                    </Text>
                                    <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", color: "black"}}>
                                        2 days ago
                                    </Text>
                                </View>
                            </View>: null}
                            {item.form_status === "OVERDUE" ?
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
                                            color={"red"}
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

export default All