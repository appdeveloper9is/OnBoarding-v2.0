import React, {useRef, useState} from "react";
import {Button, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DatePicker from 'react-native-date-picker'
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {Icon} from "react-native-elements";


const BasicInfoForm = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const refRBSheet = useRef();


    return (
        <SafeAreaView forceInset={{bottom: 'never'}} style={{backgroundColor: "#635ECD"}}>
            <View style={{height: "100%", width: "100%", backgroundColor: ""}}>
                <View style={{
                    height: 56,
                    width: "100%",
                    justifyContent: "center",
                    backgroundColor: "#635ECD",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: 20, fontFamily: "Poppins-Bold", color: "white"}}>
                        Basic Info form
                    </Text>
                </View>

                <View style={{flex: 1, backgroundColor: "white", borderTopStartRadius: 20, borderTopEndRadius: 20}}>

                    <ScrollView>
                        <View style={{marginBottom: 30}}>

                            <View style={{height: 52, marginTop: 33, marginHorizontal: 25}}>
                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="#3E66FB"
                                           placeholderTextColor="#808084" placeholder="Name" label="Name"
                                           mode="outlined">
                                </TextInput>
                            </View>
                            <View style={{height: 52, marginTop: 33, marginHorizontal: 25, backgroundColor: "white"}}>
                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="#3E66FB"
                                           placeholder="Fathers Name" label="Fathers Name" mode="outlined">
                                </TextInput>
                            </View>
                            <View style={{height: 52, marginTop: 33, marginHorizontal: 25}}>
                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="#3E66FB"
                                           placeholder="CNIC" label="CNIC" mode="outlined">
                                </TextInput>
                            </View>
                            <View style={{height: 52, marginTop: 33, marginHorizontal: 25}}>
                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="#3E66FB"
                                           right={<TextInput.Icon
                                               name={() => <SimpleLineIcons onPress={() => setOpen(true)}
                                                                            name="calendar" color="black"
                                                                            size={18}/>}/>}
                                           placeholder="Enter or pick date" label="Enter or pick date" mode="outlined">
                                    <DatePicker
                                        modal
                                        open={open}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpen(false)
                                            setDate(date)
                                        }}
                                        onCancel={() => {
                                            setOpen(false)
                                        }}/>
                                </TextInput>
                            </View>
                            <View style={{height: 52, marginTop: 33, marginHorizontal: 25}}>
                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="gray"
                                           placeholder="Email" label="Email" mode="outlined">
                                </TextInput>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'white', marginTop: 53}}>
                                <View style={{backgroundColor: "white", marginHorizontal: 25}}>

                                    <TextInput.Icon style={{marginTop: 12}}
                                                    name={() => <FontAwesome color="black" name="bank" size={15}/>}/>
                                    <Text style={{
                                        marginLeft: 40,
                                        fontSize: 20,
                                        fontFamily: "Poppins-Bold",
                                        color: "black"
                                    }}>
                                        Bank Details
                                    </Text>
                                </View>
                                <View style={{height: 52, marginTop: 16, marginHorizontal: 25}}>
                                    <TextInput style={{backgroundColor: "white"}} activeOutlineColor="gray"
                                               placeholder="Email" label="Email" mode="outlined">
                                    </TextInput>
                                </View>
                                <View style={{height: 52, marginTop: 33, marginHorizontal: 25}}>
                                    <TextInput style={{backgroundColor: "white"}} activeOutlineColor="gray"
                                               placeholder="Email" label="Email" mode="outlined">
                                    </TextInput>
                                </View>


                            </View>
                        </View>
                    </ScrollView>
                    <View style={{height: "14%", backgroundColor: "white"}}>
                        <View style={{
                            backgroundColor: "white", shadowColor: "#000",
                            shadowRadius: 2,
                            shadowOffset: {
                                width: 0,
                                height: -3,
                            },
                            shadowOpacity: 0.32,


                        }}>
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: "white",
                                justifyContent: "space-around",
                                marginTop: 20
                            }}>
                                <TouchableOpacity style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: 46,
                                    width: 59,
                                    backgroundColor: "#F6F6F6",
                                    borderRadius: 50,
                                }}>
                                    <TextInput.Icon onPress={() => navigation.navigate("BottomNavigation")}
                                                    name={() => <Ionicons color="#8083A3" name="ios-chevron-back"
                                                                          size={20}/>}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: 46,
                                    width: "55%",
                                    backgroundColor: "#635ECD",
                                    borderRadius: 50,
                                }}>
                                    <Text style={{fontFamily: "Inter-Bold", fontSize: 16, color: "white"}}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: 46,
                                    width: 59,
                                    backgroundColor: "#F6F6F6",
                                    borderRadius: 50,
                                }}>
                                    <TextInput.Icon onPress={() => this.RBSheet.open()}
                                                    name={() => <Feather color="#8083A3" name="info" size={20}/>}/>
                                </TouchableOpacity>



                                    <RBSheet

                                        ref={refRBSheet}
                                        closeOnDragDown={true}
                                        closeOnPressMask={false}
                                        customStyles={{
                                            wrapper: {
                                                backgroundColor: "transparent"
                                            },
                                            draggableIcon: {
                                                backgroundColor: "#000"
                                            }
                                        }}
                                        height={400}
                                    >
                                        <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>

                                            <View style={{
                                                height: 252,
                                                backgroundColor: "white",
                                                marginHorizontal: 60,
                                                marginTop: 50,
                                                alignItems: "center"

                                            }}>

                                                <MaterialCommunityIcon name={"checkbox-marked-circle-outline"}
                                                                       color="#87FC70" size={100}/>

                                                <Text style={{
                                                    color: "#3CC13B",
                                                    fontFamily: "Poppins-Bold",
                                                    fontSize: 23,
                                                    marginTop: 15
                                                }}>
                                                    SUCCESS
                                                </Text>
                                                <Text style={{
                                                    color: "black",
                                                    fontFamily: "Poppins-Regular",
                                                    fontSize: 18,
                                                    marginTop: 15,
                                                    textAlign: "center"
                                                }}>
                                                    Video Uploaded Successfully
                                                </Text>


                                            </View>

                                                <View
                                                    style={{flex: 1, alignItems: "center", justifyContent:"center"}}>

                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate("BottomNavigation")} style={{
                                                        height: 50,
                                                        width: 234,
                                                        backgroundColor: "#635ECD",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        borderRadius: 40,
                                                        marginBottom:"15%"
                                                    }}>

                                                        <Text style={{
                                                            color: "white",
                                                            fontFamily: "Poppins-Bold",
                                                            fontSize: 14
                                                        }}>
                                                            Go Back to Home
                                                        </Text>

                                                    </TouchableOpacity>
                                                </View>

                                        </View>
                                    </RBSheet>
                                    <RBSheet

                                        ref={ref => {
                                            this.RBSheet = ref;
                                        }}
                                        closeOnDragDown={true}
                                        closeOnPressMask={false}
                                        customStyles={{
                                            wrapper: {
                                                backgroundColor: "transparent"
                                            },
                                            draggableIcon: {
                                                backgroundColor: "#000"
                                            }
                                        }}
                                        height={600}
                                    >
                                        <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>

                                            <View style={{
                                                height: 331,
                                                backgroundColor: "white",
                                                marginHorizontal: 60,
                                                marginTop: 30,
                                                alignItems: "center",
                                            }}>

                                                <Feather name={"info"} color="#3E66FB" size={100}/>

                                                <Text style={{
                                                    color: "black",
                                                    fontFamily: "Poppins-Regular",
                                                    fontSize: 18,
                                                    marginTop: 15,
                                                    textAlign: "center"
                                                }}>
                                                    This is a video intro in whic you are required to introduce your
                                                    self in a short 90 second video. {"\n\n"}

                                                    Make it interesting by adding a little back story. Starting with a
                                                    little history and the things you have worked on your strengths and
                                                    how you fit into VisionX
                                                </Text>


                                            </View>
                                            <View style={{
                                                flex: 1,
                                                alignItems: "center",
                                                marginTop: 40,
                                                justifyContent: "flex-end",
                                                marginBottom: "15%"
                                            }}>


                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate("BottomNavigation")} style={{
                                                    height: 50,
                                                    width: 234,
                                                    backgroundColor: "#635ECD",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: 40
                                                }}>

                                                    <Text style={{
                                                        color: "white",
                                                        fontFamily: "Poppins-Bold",
                                                        fontSize: 14
                                                    }}>
                                                        Go Back to Home
                                                    </Text>

                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </RBSheet>

                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </SafeAreaView>

    )
}
export default BasicInfoForm;