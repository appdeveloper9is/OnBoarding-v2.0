import React, {useContext, useEffect, useRef, useState} from "react";
import {Button, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {FlatList} from "react-native";
import BlogContext from "../ContextApi/ApiData";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DatePicker from "react-native-date-picker";


const BasicInfoForm = ({route}) => {

    const hack = [
        {
            "date_of_joining": "2021-12-25",
            "form_status": "COMPLETE",
            "employee_form_mapping_id": 30,
            "employee_id": 16,
            "form_id": 3,
            "form_data": null,
            "status": "COMPLETE",
            "user_id": 15,
            "due_date": "2021-12-22T00:00:00.000Z",
            "created_at": "2021-12-03T07:17:18.591Z",
            "updated_at": "2021-12-03T07:17:18.591Z",
            "form_name": "Education Detail",
            "form_fields": [
                {
                    "name": "Highest Degree",
                    "type": "text",
                    " placeholder": "Highest Degree",
                    "label": "Name"
                },
                {
                    "name": "Descilpline",
                    "type": "text",
                    "placeholder": "Descilpline",
                    "label": "DESCIPLINE"
                },
                {
                    "name": "CGPA",
                    "type": "text",
                    "placeholder": "CGPA/MARKS",
                    "label": "CGPA/MARKS"
                }
            ]
        },
        {
            "date_of_joining": "2021-12-25",
            "form_status": "PENDING",
            "employee_form_mapping_id": 28,
            "employee_id": 16,
            "form_id": 1,
            "form_data": null,
            "status": "PENDING",
            "user_id": 15,
            "due_date": "2021-12-22T00:00:00.000Z",
            "created_at": "2021-12-03T07:17:17.980Z",
            "updated_at": "2021-12-03T07:17:17.980Z",
            "form_name": "Basic info form",
            "form_fields": [
                {
                    "name": "Name",
                    "type": "text",
                    " placeholder": "Name",
                    "label": "Name"
                },
                {
                    "name": "Father Name",
                    "type": "text",
                    "placeholder": "Father Name",
                    "label": "Father Name"
                },
                {
                    "name": "Pick Date",
                    "type": "date",
                    "placeholder": "TEst",
                    "label": "Test"
                }
            ]
        },
        {
            "date_of_joining": "2021-12-25",
            "form_status": "OVERDUE",
            "employee_form_mapping_id": 29,
            "employee_id": 16,
            "form_id": 2,
            "form_data": null,
            "status": "PENDING",
            "user_id": 15,
            "due_date": "2021-01-01T00:00:00.000Z",
            "created_at": "2021-12-03T07:17:18.273Z",
            "updated_at": "2021-12-03T07:17:18.273Z",
            "form_name": "Bank Detail",
            "form_fields": [
                {
                    "title": "BANK DETAILS"
                },
                {
                    "name": "title",
                    "type": "text",
                    "placeholder": "TITLE",
                    "label": "TITLE"
                },
                {
                    " name": "bank",
                    "type": "text",
                    "placeholder": "BANK",
                    "label": "BANK"
                },
                {
                    " name": "branch",
                    "type": "text",
                    "placeholder": "BRANCH NAME",
                    "label": "BRANCH"
                },
                {
                    " name": "Account-Type",
                    "type": "text",
                    "placeholder": "ACCOUNT TYPE",
                    "label": "ACCOUNT"
                }
            ]
        }
    ]

    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const {name} = route.params;
    const refRBSheet = useRef();
    const {data} = useContext(BlogContext)
    const [selected, setSelected] = useState("");
    const [check, setcheck] = useState(false)
    const [itemName, setItemName] = useState("");
    const [state, setState] = useState()
    const [save, setSave] = useState([])

    const addValue=()=>{
     console.log("sasa", save)
    }

    const changeValue =(text, index)=>{
        setItemName(text)
        setSave([...save, {name:itemName}])

    }
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
                        {name}
                 </Text>
                </View>

                <View style={{flex: 1, backgroundColor: "white", borderTopStartRadius: 20, borderTopEndRadius: 20}}>
                                 <FlatList
                                            style={{backgroundColor: "white", marginHorizontal: 20}}
                                            data={hack}
                                            keyExtractor={item => item.id}
                                            renderItem={({item, index}) => {

                                                return (

                                                    <View style={{marginTop: 20}}>
                                                        { item.form_name === name ?
                                                            item.form_fields.map((c, i) =>

                                                                        <View style={{
                                                                            backgroundColor: "white",
                                                                            marginHorizontal: 10
                                                                        }}>

                                                                            {c.type === "text" ?
                                                                                <TextInput
                                                                                style={{
                                                                                    backgroundColor: "white",
                                                                                    marginBottom: 20,
                                                                                }}
                                                                                onChangeText={text => changeValue(text, i )}
                                                                                activeOutlineColor="gray"
                                                                                placeholder={c.name}
                                                                                label={c.name} mode="outlined">
                                                                            </TextInput>:
                                                                            null}
                                                                            {c.type === "password" ?
                                                                                <TextInput
                                                                                    style={{
                                                                                        backgroundColor: "white",
                                                                                        marginBottom: 20
                                                                                    }}
                                                                                    activeOutlineColor="gray"
                                                                                    placeholder={c.name}
                                                                                    secureTextEntry={true}
                                                                                    label={c.name} mode="outlined">
                                                                                </TextInput>:
                                                                                null}
                                                                            {c.type === "date" ?
                                                                                <TextInput style={{backgroundColor: "white"}} activeOutlineColor="#3E66FB"
                                                                                           onFocus={()=>setOpen(true)}
                                                                                           value={check === true ? date.getDate() + "-" + (date.getMonth() + 1) + "-" +  date.getFullYear() :
                                                                                               selected}
                                                                                           right={<TextInput.Icon
                                                                                               name={() => <SimpleLineIcons
                                                                                                                            name="calendar" color="black"
                                                                                                                            size={25}/>}/>}

                                                                                           placeholder="Enter or pick date" label="Enter or pick date" mode="outlined">


                                                                                    <DatePicker style={{}}

                                                                                                modal
                                                                                                open={open}
                                                                                                mode={"date"}
                                                                                                date={date}
                                                                                                textColor="black"
                                                                                                onConfirm={(date) => {

                                                                                                    setOpen(false)
                                                                                                    setDate(date)
                                                                                                    setcheck(true)
                                                                                                }}
                                                                                                onCancel={() => {
                                                                                                    setOpen(false)
                                                                                                }}/>
                                                                                </TextInput>:
                                                                                null}
                                                                            {c.type === "switch" ?
                                                                                <TextInput
                                                                                    style={{
                                                                                        backgroundColor: "white",
                                                                                        marginBottom: 20
                                                                                    }}
                                                                                    activeOutlineColor="gray"
                                                                                    placeholder={c.name}
                                                                                    label={c.name} mode="outlined">
                                                                                </TextInput>:
                                                                                null}
                                                                            {c.type === "checkbox" ?
                                                                                <TextInput
                                                                                    style={{
                                                                                        backgroundColor: "white",
                                                                                        marginBottom: 20
                                                                                    }}
                                                                                    activeOutlineColor="gray"
                                                                                    placeholder={c.name}
                                                                                    label={c.name} mode="outlined">
                                                                                </TextInput>:
                                                                                null}
                                                                        </View>) :
                                                                null
                                                            }
                                                        </View>
                                                );

                                            }}
                                        />
                    <ScrollView>
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
                                <TouchableOpacity onPress={()=> addValue()} style={{
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