import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView} from "react-native";
import {SearchBar} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import News from "./DiscoverTabs/News";
import People from "./DiscoverTabs/People";
import BlogContext from "../ContextApi/ApiData";



const Tab = createMaterialTopTabNavigator();


const Discover = () => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const navigation = useNavigation()
    const {dat} = useContext(BlogContext)
    const {hack, setHack} = useContext(BlogContext)

    useEffect(() => {
        setMasterDataSource(dat)
    }, []);


    const searchFilterFunction = (text) => {

        if (text) {

            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={{height: "100%", backgroundColor: "white"}}>
            <View style={{height: "100%", backgroundColor: "rgba(99, 94, 205, 1)",}}>
                <View style={{
                    height: "100%",
                    backgroundColor: "white",
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20
                }}>
                    <View style={{
                        backgroundColor: "white", shadowColor: "#000",
                    }}>
                        <Text style={{
                            fontFamily: "Poppins-Bold",
                            fontSize: 28,
                            marginLeft: 25,
                            marginTop: 19,
                            color: "black"
                        }}>
                            Discover
                        </Text>
                        <SearchBar
                            inputContainerStyle={{backgroundColor: '#F9F9FC',}}
                            showLoading={false}

                            containerStyle={{
                                backgroundColor: 'white',
                                marginHorizontal: 15,
                                borderWidth: 0,
                                shadowColor: "#000",
                                borderBottomColor: 'transparent',
                                borderTopColor: 'transparent'
                            }}
                            clearIcon={true}
                            onClearText={() => console.log('onClearText')}
                            onChangeText={(text) => searchFilterFunction(text)}
                            onClear={(text) => searchFilterFunction('')}
                            placeholder='Search..'
                            cancelButtonTitle='Cancel'
                            round
                            searchIcon={{size: 24}}
                            value={search}
                        />
                    </View>

                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: {
                            height: 20,
                            fontSize: 12,
                            fontFamily: "Inter-Bold",
                            color: "black",
                            textTransform: "none",
                            fontWeight: "bold",
                        }
                    }} style={{
                        backgroundColor: "white", borderBottomEndRadius: 20, borderBottomStartRadius: 20
                    }}>
                        <Tab.Screen name="News" component={News}/>
                        <Tab.Screen name="People" component={People}/>
                    </Tab.Navigator>
                </View>
            </View>
        </SafeAreaView>)
}

export default Discover
