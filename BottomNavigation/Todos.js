import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import All from "../../../Downloads/OnboardingApp2.0/TabNavigation/All";
import Overdue from "../../../Downloads/OnboardingApp2.0/TabNavigation/Overdue";
import Pending from "../../../Downloads/OnboardingApp2.0/TabNavigation/Pending";
import Complete from "../../../Downloads/OnboardingApp2.0/TabNavigation/Complete";
import {useNavigation} from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator();
const Todos =()=>{
    const navigation = useNavigation()
    const [progressValue, setProgressValue] = useState(20)
    return(
        <SafeAreaView style={{height:"100%", backgroundColor:"white"}}>
            <View style={{height:"100%", backgroundColor:"rgba(99, 94, 205, 1)"}}>
            <View style={{height:"100%", backgroundColor:"white", borderBottomEndRadius:20,borderBottomStartRadius:20}}>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                    <View style={progressStyles.containerStyle}>
                    <View
                        style={[
                            progressStyles.innerStyle,{width: progressValue +"%"},
                        ]}
                    />
                    <Text style={progressStyles.label}>
                        {progressValue}%
                    </Text>
                    <Text style={progressStyles.label1}>
                        18/23
                    </Text>
                </View>
                    <View style={{justifyContent:"center", marginTop:10}}>
                        <TouchableOpacity  onPress={()=> navigation.navigate("MyProfile")}>
                            <Image  source={require("../Images/Person.png")} style={{ height:36, width:36,marginLeft:12, borderRadius:40/2}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Tab.Navigator screenOptions={{tabBarLabelStyle:{

                        fontSize:12,paddingTop:20, fontFamily:"Inter-Bold", color:"black", textTransform:"none", fontWeight:"bold",
                        }}} style={{backgroundColor:"white", borderBottomEndRadius:20,borderBottomStartRadius:20}}>
                        <Tab.Screen  name="All" component={All} />
                        <Tab.Screen name="Overdue" component={Overdue} />
                        <Tab.Screen name="Pending" component={Pending} />
                        <Tab.Screen name="Complete" component={Complete} />
                </Tab.Navigator>
            </View>
                </View>
        </SafeAreaView>)
}
const progressStyles = StyleSheet.create({
    containerStyle: {
        marginTop:10,
        width:280,
        height: 40,
        padding:4,
        borderRadius: 30,
        justifyContent: "center",
        backgroundColor:"#F2F2F7",


    },
    innerStyle:{
        width: "100%",
        height: 31,
        borderRadius: 16,
        backgroundColor:"#635ECD",
    },
    label:{
        fontSize:22,
        color: "white",
        position: "absolute",
        zIndex: 1,
        marginLeft:10,
        paddingLeft:16,
        alignSelf: "flex-start",
    },
    label1:{
        fontSize:14,
        color: "#828282",
        position: "absolute",

        zIndex: 1,
        paddingRight:10,
        alignSelf: "flex-end"
    }
});
export default Todos
