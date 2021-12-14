import React, {useContext, useEffect, useState} from "react";
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import BlogContext from "../../ContextApi/ApiData";

const People = () => {
    const navigation = useNavigation()
   const {dat} = useContext(BlogContext)
    return (

        <SafeAreaView>
            <View style={{
                height: "100%", width: "100%", backgroundColor: "white", shadowRadius: 2, shadowColor: "#000",
            }}>
                <View style={{overflow: 'hidden', paddingBottom: 5}}>
                    <View

                        style={{
                            backgroundColor: '#fff',
                            width: "100%",
                            height: 1,
                            shadowColor: '#000',
                            shadowOffset: {width: 1, height: 1},
                            shadowOpacity: 0.4,
                            shadowRadius: 3,
                            elevation: 5,
                        }}
                    />

                </View>

                <FlatList

                    data={dat}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => {
                        return (

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("PeopleInfo", {
                                        name: item.employee_name,
                                        designation: item.designation,
                                    })

                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    backgroundColor: "white",
                                    borderRadius: 8,
                                    marginTop: 0,
                                    height: 72,
                                    marginHorizontal:"10%"

                                }}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={require("../DiscoverTabs/Images/check.jpg")}
                                               style={{height: 48, width: 48, borderRadius: 24}}/>
                                    </View>
                                    <View style={{
                                        marginLeft: 28,
                                        backgroundColor: "white",
                                        height: "100%",
                                        justifyContent: "center"
                                    }}>
                                        <Text style={{
                                            lineHeight: 16 * 1.5,
                                            fontFamily: "Poppins-Bold",
                                            fontSize: 16,
                                            color: "black",
                                            width: "100%",
                                            justifyContent: "center"
                                        }}>
                                            {item.employee_name}
                                        </Text>
                                        <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", color: "black"}}>
                                            {item.designation}
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