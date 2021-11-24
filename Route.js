import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./SignIn";
import Splash from "./Splash";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import All from "./TabNavigation/All";
import Overdue from "./TabNavigation/Overdue";
import Pending from "./TabNavigation/Pending";
import Complete from "./TabNavigation/Complete";
import DiscoveryInfo from "./BottomNavigation/DiscoveryInfo";
import AnimatedScreen from "./AnimatedScreen";
import BasicInfoForm from "./Forms/BasicInfoForm";
import CardViewStack from "./Animation/CardViewStack";
import MyProfile from "./Profile/MyProfile";
import Buddy from "./Profile/Buddy";
import {TouchableOpacity} from "react-native";
import {TextInput} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import EducationalDetails from "./Forms/EducationalDetails";
import AddOtherDetail from "./Forms/AddOtherDetail";
import Video from "./Forms/Video";
import VideoUpload from "./Forms/VideoUpload";
import News from "./BottomNavigation/DiscoverTabs/News";
import People from "./BottomNavigation/DiscoverTabs/People";

const Stack = createNativeStackNavigator();

const Route =()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown:false}} />
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                <Stack.Screen name="AnimatedScreen" component={AnimatedScreen} options={{headerShown:false}} />
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
                <Stack.Screen name="News" component={News} options={{headerShown:false}} />
                <Stack.Screen name="People" component={People} options={{headerShown:false}} />
                <Stack.Screen name="BasicInfoForm" component={BasicInfoForm} options={{headerShown:false}} />
                <Stack.Screen name="Video" component={Video} options={{headerShown:false}} />
                <Stack.Screen name="Buddy" component={Buddy} options={{ title:"Buddy", headerTitleStyle:{fontSize:22, fontFamily:"Poppins-Bold"},headerShown:true, headerTitleAlign:"center",alignItems:"center", headerShadowVisible:false, headerStyle:{backgroundColor:"white",borderBottomWidth: 0}, headerLeft: () => (
                        <TouchableOpacity
                            onPress={()=>alert("Mustafa")}>
                            <TextInput.Icon style={{marginBottom:30}} name={()=> <AntDesign name="arrowleft" color="black" size={20}/>}/>
                        </TouchableOpacity>
                    ),}} />
                <Stack.Screen name="MyProfile" component={MyProfile}  options={{ title:"My Profile", headerTitleStyle:{fontSize:22, fontFamily:"Poppins-Bold"},headerShown:true, headerTitleAlign:"center", headerShadowVisible:false, headerStyle:{backgroundColor:"white",borderBottomWidth: 0}, headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => alert('This is a button!')}
                        >
                            <TextInput.Icon style={{marginBottom:30}} name={()=> <AntDesign name="arrowleft" color="black" size={20}/>}/>
                        </TouchableOpacity>
                    ),}}/>
                <Stack.Screen name="DiscoveryInfo" component={DiscoveryInfo} options={{headerShown:false}} />
                <Stack.Screen name="AddOtherDetail" component={AddOtherDetail} options={{headerShown:false}} />
                <Stack.Screen name="EducationalsDetails" component={EducationalDetails} options={{headerShown:false}} />
                <Stack.Screen name="CardViewAnimation" component={CardViewStack} options={{headerShown:false}} />
                <Stack.Screen name="All" component={All} options={{headerShown:false}} />
                <Stack.Screen name="VideoUpload" component={VideoUpload} options={{headerShown:false}} />
                <Stack.Screen name="Overdue" component={Overdue} options={{headerShown:false}} />
                <Stack.Screen name="Pending" component={Pending} options={{headerShown:false}} />
                <Stack.Screen name="Complete" component={Complete} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Route;
