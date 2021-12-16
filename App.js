import React, {useContext, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from "react-navigation";
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import axios from "axios";
import Route from "./Route";
import {BlogProvider} from "./ContextApi/ApiData";



const App = () => {
    // const [dat, setData] = useState([]);
    // console.log("checkAPidata", dat)
    // console.log("api test", dat)
    // const getApidata = async () => {
    //     try {
    //         await axios.get('https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/getform').then((response) => {
    //             console.log("checkAPIRESPONSE", response.data[0].form_fields.flowdata);
    //             setData(response.data[0].form_fields.flowdata)
    //         })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    //
    // useEffect(() => {
    //     getApidata();
    // }, [dat]);
    //
    //
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    // const refRBSheet = useRef();
    //

    return (
        <BlogProvider>
            <Route/>
        </BlogProvider>


    //
    //     <SafeAreaView forceInset={{bottom: 'never'}} style={{backgroundColor: "#635ECD"}}>
    //         <View style={{height: "100%", width: "100%", backgroundColor: ""}}>
    //
    //             <View style={{
    //                 height: 56,
    //                 width: "100%",
    //                 justifyContent: "center",
    //                 backgroundColor: "#635ECD",
    //                 alignItems: "center"
    //             }}>
    //                 <Text style={{fontSize: 20, fontFamily: "Poppins-Bold", color: "white"}}>
    //                     Basic Info form
    //                 </Text>
    //             </View>
    //
    //             <View style={{flex: 1, backgroundColor: "white", borderTopStartRadius: 20, borderTopEndRadius: 20}}>
    //
    //
    //                 <FlatList
    //                     style={{backgroundColor: "white", marginHorizontal: 20}}
    //                     data={dat}
    //                     keyExtractor={item => item.id}
    //                     renderItem={({item, index}) => {
    //                         return (
    //                             <View style={{marginTop: 20}}>
    //                                 {item.name === "Bank" ?
    //
    //                                     <View style={{backgroundColor: "white", marginHorizontal: 25}}>
    //                                         <TextInput.Icon style={{marginTop: 12}}
    //                                                         name={() => <FontAwesome color="black" name="bank"
    //                                                                                  size={15}/>}/>
    //                                         <Text style={{
    //                                             marginLeft: 40,
    //                                             fontSize: 20,
    //                                             fontFamily: "Poppins-Bold",
    //                                             color: "black"
    //                                         }}>
    //                                             Bank Details
    //                                         </Text>
    //                                         <TextInput style={{backgroundColor: "white"}} textContentType={"password"}
    //                                                    activeOutlineColor="gray" placeholder={item.name}
    //                                                    label={item.name} mode="outlined">
    //
    //                                         </TextInput>
    //                                     </View> :
    //                                     <TextInput textContentType="password" style={{backgroundColor: "white"}}
    //                                                keyboardType={item.placeHolder === "CNIC" ? "phone-pad" : "email-address"}
    //                                                activeOutlineColor="gray" label={item.label} mode="outlined">
    //                                     </TextInput>
    //                                 }
    //                             </View>
    //
    //                         );
    //                     }}
    //                 />
    //                 <View style={{height: "14%", backgroundColor: "white"}}>
    //                     <View style={{
    //                         backgroundColor: "white", shadowColor: "#000",
    //                         shadowRadius: 2,
    //                         shadowOffset: {
    //                             width: 0,
    //                             height: -3,
    //                         },
    //                         shadowOpacity: 0.32,
    //
    //
    //                     }}>
    //                         <View style={{
    //                             flexDirection: "row",
    //                             backgroundColor: "white",
    //                             justifyContent: "space-around",
    //                             marginTop: 20
    //                         }}>
    //                             <TouchableOpacity style={{
    //                                 alignItems: "center",
    //                                 justifyContent: "center",
    //                                 height: 50,
    //                                 width: 59,
    //                                 backgroundColor: "#F6F6F6",
    //                                 borderRadius: 50,
    //                             }}>
    //                                 <TextInput.Icon onPress={() => navigation.navigate("BottomNavigation")}
    //                                                 name={() => <Ionicons color="#8083A3" name="ios-chevron-back"
    //                                                                       size={20}/>}/>
    //                             </TouchableOpacity>
    //                             <TouchableOpacity onPress={() => refRBSheet.current.open()} style={{
    //                                 alignItems: "center",
    //                                 justifyContent: "center",
    //                                 height: 46,
    //                                 width: "55%",
    //                                 backgroundColor: "#635ECD",
    //                                 borderRadius: 50,
    //                             }}>
    //                                 <Text style={{fontFamily: "Inter-Bold", fontSize: 16, color: "white"}}>
    //                                     Submit
    //                                 </Text>
    //                             </TouchableOpacity>
    //                             <TouchableOpacity style={{
    //                                 alignItems: "center",
    //                                 justifyContent: "center",
    //                                 height: 46,
    //                                 width: 59,
    //                                 backgroundColor: "#F6F6F6",
    //                                 borderRadius: 50,
    //                             }}>
    //                                 <TextInput.Icon onPress={() => alert("working")}
    //                                                 name={() => <Feather color="#8083A3" name="info" size={20}/>}/>
    //                             </TouchableOpacity>
    //                             <SafeAreaView>
    //
    //
    //                                 <RBSheet
    //
    //                                     ref={refRBSheet}
    //                                     closeOnDragDown={true}
    //                                     closeOnPressMask={false}
    //                                     customStyles={{
    //                                         wrapper: {
    //                                             backgroundColor: "transparent"
    //                                         },
    //                                         draggableIcon: {
    //                                             backgroundColor: "#000"
    //                                         }
    //                                     }}
    //                                     height={443}
    //                                 >
    //                                     <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>
    //
    //                                         <View style={{
    //                                             height: 252,
    //                                             backgroundColor: "white",
    //                                             marginHorizontal: 60,
    //                                             marginTop: 50,
    //                                             alignItems: "center"
    //                                         }}>
    //
    //                                             <MaterialCommunityIcon name={"checkbox-marked-circle-outline"}
    //                                                                    color="#87FC70" size={100}/>
    //
    //                                             <Text style={{
    //                                                 color: "#3CC13B",
    //                                                 fontFamily: "Poppins-Bold",
    //                                                 fontSize: 23,
    //                                                 marginTop: 15
    //                                             }}>
    //                                                 SUCCESS
    //                                             </Text>
    //                                             <Text style={{
    //                                                 color: "black",
    //                                                 fontFamily: "Poppins-Regular",
    //                                                 fontSize: 17,
    //                                                 marginTop: 15,
    //                                                 textAlign: "center"
    //                                             }}>
    //                                                 Video Uploaded Successfully
    //                                             </Text>
    //
    //
    //                                         </View>
    //                                         <View style={{
    //                                             flex: 1,
    //                                             alignItems: "center",
    //                                             marginTop: 40,
    //                                             backgroundColor: "white"
    //                                         }}>
    //
    //                                             <TouchableOpacity
    //                                                 onPress={() => navigation.navigate("BottomNavigation")} style={{
    //                                                 height: 50,
    //                                                 width: 234,
    //                                                 backgroundColor: "#635ECD",
    //                                                 alignItems: "center",
    //                                                 justifyContent: "center",
    //                                                 borderRadius: 40
    //                                             }}>
    //
    //                                                 <Text style={{
    //                                                     color: "white",
    //                                                     fontFamily: "Poppins-Bold",
    //                                                     fontSize: 14
    //                                                 }}>
    //                                                     Go Back to Home
    //                                                 </Text>
    //                                             </TouchableOpacity>
    //                                         </View>
    //                                     </View>
    //                                 </RBSheet>
    //                             </SafeAreaView>
    //                         </View>
    //                     </View>
    //
    //                 </View>
    //
    //             </View>
    //         </View>
    //     </SafeAreaView>
     )
}
export default App