import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Animated,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';
import FastImage from "react-native-fast-image";
import LiquidLike from "./LiquidLike";
import {useNavigation} from "@react-navigation/native";



const { width } = Dimensions.get('screen');

const data = [
    {
        image:
            require('./Images/welcome.gif'),
        backgroundColor: 'white',
        title:"Welcome",

        buttonText:"Continue",
        desc:"This is your onboarding experience"
    },
    {
        image:
            require("./Images/ReadingForm.gif"),
       buttonText:"Continue",
        backgroundColor: 'white',
        title:"Fill Required Forms",
        desc:"There are some forms that you need to fill. Don’t worry we’ll help"
    },
    {
        image:
            require("./Images/GetStarted.gif"),
        backgroundColor: 'white',
        buttonText:"Lets Get Started",
        desc:"Your buddy will introduce and orientate you around the office environment",
        title:"Get to know your buddy"
    },

];

const imageW = width * 0.7;
const imageH = imageW * 1.4;

const ButtonNavigation = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const navigation = useNavigation()
    const keyExtractor = React.useCallback((_, index) => index.toString(), []);
    //Current item index of flatlist
    const [activeIndex, setActiveIndex] = React.useState(0);
    let flatListRef = React.useRef(null);
    const gotoNextPage = () => {
        if (activeIndex + 1 < data.length) {
            // @ts-ignore
            flatListRef.current.scrollToIndex({
                index: activeIndex + 1,
                animated: true,
            });
        }


    };

    const onViewRef = React.useRef(({ viewableItems }: any) => {
        setActiveIndex(viewableItems[0].index);
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    const renderItem = React.useCallback(({ item }) => {
        return (
            <View style={[styles.itemContainer]}>
                <FastImage
                    style={{

                        width: "100%",
                        height: "64%",

                    }}
                    source={item.image}
                />
                <View>
                    <Text style={{fontSize:24, fontFamily:"Poppins-Bold", color:"black"}}>
                    {item.title}
                </Text>
                </View>
                <View style={{marginTop:5, width:233}}>
                    <Text style={{fontSize:14, fontFamily:"Inter-Regular", color:"black", textAlign:"center"}}>
                        {item.desc}
                    </Text>
                </View>

            </View>

        );
    }, []);

    return (
        <View style={[styles.container]}>
            <StatusBar hidden />
            <View style={[StyleSheet.absoluteFillObject]}>
                {data.map((item, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];
                    const colorFade = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });
                    return (
                        <Animated.View
                            key={index}
                            style={[
                                StyleSheet.absoluteFillObject,
                                { backgroundColor: item.backgroundColor, opacity: colorFade },
                            ]}
                        />
                    );
                })}
            </View>
            <Animated.FlatList style={{marginBottom:60} }
                ref={flatListRef}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
            />

            <LiquidLike
                data={data}
                scrollX={scrollX}
                dotSize={8}
                dotSpacing={4}
                lineDistance={7}
                lineHeight={4}
                inActiveDotOpacity={0.2}
                activeDotColor={'black'}
                containerStyle={{ flex: 1 }}
            />


            <View style={[styles.buttonContainer]}>

                {/*<TouchableOpacity*/}
                {/*    style={[styles.button]}*/}
                {/*    onPress={() => gotoPrevPage()}*/}
                {/*>*/}
                {/*    <Text style={[styles.buttonText]}>Previous</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity

                    style={[styles.button]}
                    onPress={() => {

                        if (activeIndex === 2){
                            navigation.navigate("SignIn")
                        }
                        else{
                           gotoNextPage()
                        }
                    }
                    }


                >
                    {activeIndex ===2 ?
                        <Text style={[styles.buttonText]}>Lets Get Started</Text>:

                    <Text style={[styles.buttonText2]}>Continue</Text>
                    }
                </TouchableOpacity>
                {/*<TouchableOpacity style={[styles.button]} onPress={() => skipToStart()}>*/}
                {/*    <Text style={[styles.buttonText]}>Skip</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    itemContainer: {
        flex: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 26,
        justifyContent:"center",
        backgroundColor:"#615CC7",
        borderRadius:50,
        height:50,
        width:240,
    },
    buttonText: {
        alignSelf:"center",
        color: 'white',
        fontFamily:"Inter-Regular",
        fontSize:16,

    },
    buttonText2: {
        alignSelf:"center",
        color: 'white',
        fontFamily:"Inter-Regular",
        fontSize:16,

    },
});

export default ButtonNavigation;

