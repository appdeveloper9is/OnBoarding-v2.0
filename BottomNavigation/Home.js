import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import CardViewStack from "../Animation/CardViewStack";
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()
    const data = [
        {
            name: "VisionX just got selected for\n" +
                "P@sha ICT awards",
            email: "1 day passed",

        },
        {
            name: "June Cha",
            email: "june.cha@gmail.com",
            color: "yellow"
        },

        {
            name: "Iida Niskanen",
            email: "iida.niskanen@gmail.com",
            color: "green"

        },
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "red",

        },
        {
            name: "June Cha",
            email: "1 day passed",
            color: "yellow"
        },

        {
            name: "Iida Niskanen",
            email: "1 day passed",
            color: "green"

        },
    ]

    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
            <View style={{height: "100%", backgroundColor: "rgba(99, 94, 205, 1)",}}>
                <View style={{
                    height: "100%",
                    backgroundColor: "white",
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20
                }}>
                    <View style={{height:112, backgroundColor:"white", flexDirection:"row", justifyContent:"center", alignItems:"center",marginHorizontal:30}}>

                        <View style={{
                            height: 100,
                            width: 100,
                            borderColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 100 / 2,
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor: "white",
                        }}>
                            <View style={{
                                height: "100%",
                                width: "100%",
                                borderWidth: 7,
                                borderColor: "rgba(99, 94, 205, 1)",
                                borderRadius: 200,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image style={{height: "100%", width: "100%", borderRadius: 200, marginTop: 4}}
                                       source={require("../Images/Person.png")}/>
                            </View>
                        </View>
                        <View style={{marginLeft: 28, justifyContent:"center"}}>
                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 28, color: "black"}}>
                                Jane Doe
                            </Text>
                            <Text style={{fontSize: 12, fontFamily: "Poppins-Regular", color: "black"}}>
                                JR NodeJS Developer
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{height: "100%", marginTop: 20, borderBottomStartRadius: 20, borderBottomEndRadius: 20}}>
                        <CardViewStack/>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 30,
                            marginHorizontal: 24
                        }}>
                            <Text style={{fontSize: 22, fontFamily: "Poppins-Bold", color: "black"}}>
                                News
                            </Text>
                            <Text style={{fontFamily: "Poppins-Regular", fontWeight: "bold", color: "black"}}>
                                more
                            </Text>
                        </View>
                        <View>
                            <ScrollView>
                                <FlatList style={{height: "100%", marginTop: 4, marginBottom: 20}}
                                          data={data}
                                          keyExtractor={item => item.id}
                                          horizontal={true}
                                          renderItem={({
                                                           item, index
                                                       }) => {
                                              return (
                                                  <TouchableOpacity
                                                      onPress={() => {


                                                          navigation.navigate("DiscoveryInfo")
                                                      }}>
                                                      <View style={{
                                                          backgroundColor: "white",
                                                          borderRadius: 8,
                                                          height: 200
                                                      }}>
                                                          <View style={{justifyContent: "center", marginLeft: 24}}>
                                                              <Image
                                                                  style={{height: 150, width: 260, borderRadius: 24,}}
                                                                  source={require("../Images/check.jpg")}/>
                                                          </View>
                                                          <View style={{
                                                              marginLeft: 28,
                                                              marginTop: 10,
                                                              marginBottom: 13,
                                                              width: 200
                                                          }}>
                                                              <Text style={{
                                                                  fontFamily: "Poppins-Bold",
                                                                  fontSize: 14,
                                                                  color: "black"
                                                              }}>
                                                                  {item.name}
                                                              </Text>
                                                              <Text style={{
                                                                  fontSize: 12,
                                                                  fontFamily: "Poppins-Regular",
                                                                  color: "gray"
                                                              }}>
                                                                  {item.email}
                                                              </Text>
                                                          </View>
                                                      </View>

                                                  </TouchableOpacity>
                                              );
                                          }}
                                />
                            </ScrollView>
                        </View>
                    </View>


                </View>
            </View>
        </SafeAreaView>)
}

export default Home
