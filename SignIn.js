import React, {useState} from "react";
import {KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { TextInput } from 'react-native-paper'
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";


const SignIn=()=>{

    const[check, setCheck] = useState(false)
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const navigation = useNavigation()

    return(

        <SafeAreaView>









            <View style={{height:"100%",width:"100%"}}>
                <Text style={{ fontFamily: 'Poppins-Regular', height:48,fontSize:32, color:"black", marginLeft:57, marginTop:20, marginBottom:72}}>
                        Sign In
                    </Text>

                <View style={{height:52, marginHorizontal:23, marginBottom:25}}>
                    <TextInput onChangeText={email => setEmail(email)} defaultValue={email} activeOutlineColor="gray"  placeholder="Email" label= "Email" mode="outlined">
                    </TextInput>
                </View>
                {check === true?
                    <View style={{height:52, marginHorizontal:23}}>
                        <TextInput onChangeText={password => setPassword(password)} defaultValue={password} activeOutlineColor="gray"  placeholder="Password" label= "Password" mode="outlined" right={<TextInput.Icon name="eye" onPress={()=>setCheck(false
                        )} />}  >
                        </TextInput>
                    </View>:
                    <View style={{height:52, marginHorizontal:23}}>
                        <TextInput onChangeText={password => setPassword(password)} defaultValue={password} activeOutlineColor="gray" secureTextEntry placeholder="Password" label= "Password" mode="outlined" right={<TextInput.Icon  color= "gray" name="eye-off" onPress={()=> setCheck(true)} />}  >
                        </TextInput>
                    </View>
                }
                <View style={{marginLeft: 30, marginTop:20}}>
                    <Text style={{fontSize:20, color:"black", fontFamily:'Inter-Light', marginTop:40}}>
                        Password must contain
                    </Text>
                </View>
                <View style={{marginTop:9, marginLeft:23}}>
                    {password.length >=8 ?
                        <View>
                            <TextInput.Icon name={() => <Ionicons  color="green" name="checkmark-circle" size={25}/>}/>
                        </View> :
                        <View>
                            <TextInput.Icon name={() =>  <Ionicons color="silver" name="checkmark-circle" size={25}/>}/>
                        </View>
                    }
                    <View>
                        <Text style={{fontFamily:"Inter-Regular", color:"#172B4D", fontSize: 16, marginLeft:30}}>
                            Min 8 characters
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:8, marginLeft:23}}>
                    {password.match(/\d+/g) ?
                        <View>
                            <TextInput.Icon name={() => <Ionicons  color="green" name="checkmark-circle" size={25}/>}/>
                        </View> :
                        <View>
                            <TextInput.Icon name={() =>  <Ionicons color="silver" name="checkmark-circle" size={25}/>}/>
                        </View>
                    }
                    <View>
                        <Text style={{fontFamily:"Inter-Regular", color:"#172B4D",fontSize: 16,marginLeft:30}}>
                            At least one number
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:9, marginLeft:23}}>
                    {format.test(password) ?
                        <View>
                            <TextInput.Icon name={() => <Ionicons  color="green" name="checkmark-circle" size={25}/>}/>
                        </View> :
                        <View>
                            <TextInput.Icon name={() =>  <Ionicons color="silver" name="checkmark-circle" size={25}/>}/>
                        </View>
                    }
                    <View>
                        <Text style={{fontFamily:"Inter-Regular", color:"#172B4D",fontSize: 16,marginLeft:30}}>
                            At least one special character
                        </Text>
                    </View>
                </View>
                <View style={{fontSize: 16,marginTop:9, marginLeft:23}}>

                    {/[a-z]/.test(password) && /[A-Z]/.test(password)   ?
                        <View>
                            <TextInput.Icon name={() => <Ionicons  color="green" name="checkmark-circle" size={25}/>}/>
                        </View> :
                        <View>
                            <TextInput.Icon name={() =>  <Ionicons color="silver" name="checkmark-circle" size={25}/>}/>
                        </View>
                    }
                    <View>
                        <Text style={{fontFamily:"Inter-Regular", color:"#172B4D",fontSize: 16,marginLeft:30}}>
                            A mixture of upper & lower case letters
                        </Text>
                    </View>
                </View>



                <View style={{ flex:1,flexDirection:"row", justifyContent:"center",marginBottom:20,alignItems:"flex-end"}}>
                    <View style={{justifyContent:"flex-end"}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("BottomNavigation")} disabled={password.length>8 && password.match(/\d+/g) && format.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)? false:true} style={{
                    backgroundColor: password.length>8 && password.match(/\d+/g) && format.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)?  "#635ECD":"rgba(97, 92, 199, 0.5)",
                   width:320,height:48, borderRadius:50, justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:16,color:"white", fontWeight:"bold",textAlign:"center"}} >
                        Continue
                    </Text>

                </TouchableOpacity>


                </View>
                </View>


            </View>

        </SafeAreaView>
    )


}
export default SignIn
