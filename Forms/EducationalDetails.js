import React, {useState} from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
} from "react-native";
import {TextInput} from "react-native-paper";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DatePicker from "react-native-date-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from "react-native-elements";
import ToggleSwitch from 'toggle-switch-react-native'
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-navigation";

const EducationalDetails =()=> {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const navigation = useNavigation()
    const data = [
        {label: 'Mustafa', value: '1'},
        {label: 'Item 2', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
        {label: 'Item 5', value: '5'},
        {label: 'Item 6', value: '6'},
        {label: 'Item 7', value: '7'},
        {label: 'Item 8', value: '8'},
    ];

    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [dropdown, setDropdown] = useState(null);
    const [selected, setSelected] = useState([]);
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={{color:"black"}}>{item.label}</Text>
            </View>
        );
    };




    return(
        <SafeAreaView forceInset={{ bottom: 'never'}} style={{backgroundColor:"#635ECD"}}>




            <View style={{height:"100%",width:"100%" ,backgroundColor:"#635ECD"}}>

                <View style={{height:56,width:"100%" ,justifyContent:"center",backgroundColor:"#635ECD",alignItems:"center"}}>
                    <Text style={{fontSize:20, fontFamily:"Poppins-Bold", color:"white"}} >
                        Educational Details
                    </Text>
                </View>

                <View style={{flex:1, backgroundColor: "white", borderTopStartRadius:20, borderTopEndRadius:20}}>

                    <ScrollView>
                        <View style={{marginBottom:30}}>
                            <View style={{height:52,marginTop:33, marginHorizontal:25, backgroundColor:"white"}}>
                                <TextInput  style={{backgroundColor:"white"}} activeOutlineColor="#3E66FB"  placeholder="Degree Title" label= "Degree Title" mode="outlined">
                                </TextInput>
                            </View>
                            <View style={{height:52,marginTop:33, marginHorizontal:25}}>
                                <Dropdown
                                    selectedTextStyle={{color:"black", fontSize:17}}
                                   style={{backgroundColor:"white",borderRadius:3, borderWidth:1,borderColor:"#808084", height:55, paddingLeft:15, paddingRight:5}}
                                    data={data}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="University"
                                   value={dropdown}
                                   placeholderStyle={{color:"#808084", fontSize:17}}
                                    onChange={item => {
                                        setDropdown(item.value);
                                        console.log('selected', item);
                                    }}
                                    renderRightIcon={() => (
                                        <Icon style={styles.icon} name="keyboard-arrow-down" type="materialicons" />
                                    )}
                                    renderItem={item => _renderItem(item)}
                                />

                            </View>
                            <View style={{height:52,marginTop:33, marginHorizontal:25, backgroundColor:"white"}}>
                                <Dropdown
                                    selectedTextStyle={{color:"black", fontSize:17}}
                                    style={{backgroundColor:"white",borderRadius:3, borderWidth:1,borderColor:"#808084", height:55, paddingLeft:15, paddingRight:5}}
                                    data={data}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="City"
                                    value={dropdown}
                                    placeholderStyle={{color:"#808084", fontSize:17}}
                                    onChange={item => {
                                        setDropdown(item.value);
                                        console.log('selected', item);
                                    }}
                                    renderRightIcon={() => (
                                        <Icon style={styles.icon} name="keyboard-arrow-down" type="materialicons" />
                                    )}
                                    renderItem={item => _renderItem(item)}
                                />

                            </View>
                            <View style={{height:52,marginTop:33, marginHorizontal:25}}>
                                <Dropdown
                                    selectedTextStyle={{color:"black", fontSize:17}}
                                    style={{backgroundColor:"white",borderRadius:3, borderWidth:1,borderColor:"#808084", height:55, paddingLeft:15, paddingRight:5}}
                                    data={data}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Country"
                                    value={dropdown}
                                    placeholderStyle={{color:"#808084", fontSize:17}}
                                    onChange={item => {
                                        setDropdown(item.value);
                                        console.log('selected', item);
                                    }}
                                    renderRightIcon={() => (
                                        <Icon style={styles.icon} name="keyboard-arrow-down" type="materialicons" />
                                    )}
                                    renderItem={item => _renderItem(item)}
                                />

                            </View>
                            <View style={{height:52,marginTop:33, marginHorizontal:25}}>
                                <TextInput style={{backgroundColor:"white"}} activeOutlineColor="#3E66FB" right={<TextInput.Icon name={()=> <SimpleLineIcons onPress={()=>setOpen(true)} name="calendar" color="black" size={18}  />}/>} placeholder="Enter or pick date" label= "Enter or pick date" mode="outlined">
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

                            <View style={{flex:1, backgroundColor:'white', marginTop:33}}>
                                <View style={{flexDirection:"row", justifyContent:"space-between", marginRight:20}}>
                                    <Text style={{fontSize:16, fontFamily:"Poppins-Regular",marginLeft:24, color:"black"}}>
                                        Presently Studying
                                    </Text>
                                    <ToggleSwitch

                                        isOn={toggle}
                                        circleColor="white"
                                        onColor="lightgreen"
                                        offColor="#8083A3"
                                        labelStyle={{ color: "black" }}
                                        size="small"
                                        onToggle={isOn => setToggle(isOn)}
                                    />
                                </View>

                                    <View style={{height:52,marginTop:16, marginHorizontal:25}}>
                                        <Dropdown
                                            selectedTextStyle={{color:"black", fontSize:17}}
                                            style={{backgroundColor:"white",borderRadius:3, borderWidth:1,borderColor:"#808084", height:55, paddingLeft:15, paddingRight:5}}
                                            data={data}
                                            labelField="label"
                                            valueField="value"
                                            placeholder="Country"
                                            value={dropdown}
                                            placeholderStyle={{color:"#808084", fontSize:17}}
                                            onChange={item => {
                                                setDropdown(item.value);
                                                console.log('selected', item);
                                            }}
                                            renderRightIcon={() => (
                                                <Icon style={styles.icon} name="keyboard-arrow-down" type="materialicons" />
                                            )}
                                            renderItem={item => _renderItem(item)}
                                        />

                                    </View>


                            </View>
                        </View>
                    </ScrollView>

                    <View style={{height:"14%", backgroundColor:"white"}}>
                        <View style={{backgroundColor:"white",shadowColor: "#000",
                            shadowRadius:2,
                            shadowOffset: {
                                width:0,
                                height: -3,
                            },
                            shadowOpacity: 0.32,


                        }}>
                            <View style={{flexDirection:"row", backgroundColor:"white", justifyContent:"space-around", marginTop:20 }}>
                                <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                    <TextInput.Icon onPress={()=>navigation.navigate("AddOtherDetail")} name={() => <Ionicons  color="#8083A3" name="ios-chevron-back" size={20}/>}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> navigation.navigate("AddOtherDetail")}  style={{alignItems:"center",justifyContent:"center",height:46, width:"55%",backgroundColor:"#635ECD", borderRadius:50,}}>
                                    <Text style={{fontFamily:"Inter-Bold", fontSize:16, color:"white"}}>
                                      Submit
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems:"center",justifyContent:"center",height:46, width:59,backgroundColor:"#F6F6F6", borderRadius:50,}}>
                                    <TextInput.Icon onPress={()=>alert("working")} name={() => <Feather  color="#8083A3" name="info" size={20}/>}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>


            </View>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
        borderColor:"black"
    },
    dropdown: {
        height:52,
        color:"green",
        borderRadius:5,
        borderColor:"black",
        backgroundColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 10,
    },
    dropdown2: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        marginTop: 20,
        padding: 8,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        color:"blue",
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        color:"black",
        flex: 1,
        fontSize: 16,
    },
});

export default EducationalDetails;