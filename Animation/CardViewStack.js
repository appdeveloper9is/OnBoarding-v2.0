import React, {Component, useState} from 'react';
import {PanResponder, Animated, View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';

class CardViewStack extends Component {
    constructor(props) {

        super(props);
        this.state = {
            cardsPan: new Animated.ValueXY(),
            cardsStackedAnim: new Animated.Value(0),
            currentIndex: true,
        };

        this.cardsPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => false,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: (event, gestureState) => {


            },
            onPanResponderTerminationRequest: () => false,
            onPanResponderRelease: (event, gestureState) => {
                // bring the translationX back to 0

                let x = gestureState.dx;
                let y = gestureState.dy;
                if (Math.abs(x) > Math.abs(y)) {
                    if (x >= 0) {

                        Animated.timing(this.state.cardsPan, {
                            toValue: 0,
                            duration: 300,
                        }).start();
                        // will be used to interpolate values in each view
                        Animated.timing(this.state.cardsStackedAnim, {

                            toValue: 1,
                            duration: 300,
                        }).start(() => {
                                // reset cardsStackedAnim's value to 0 when animation ends
                                this.state.cardsStackedAnim.setValue(0);
                                // increment card position when animation ends
                                this.setState({
                                    currentIndex: this.state.currentIndex === false,
                                });


                            }
                        );


                    }
                }

            },
        })
    }

    render() {

        return (
            <View style={{justifyContent: "center", alignItems: "center"}}>

                <Animated.View
                    style={{
                        width: 300, height: 180,
                        position: 'absolute',
                        borderRadius: 20,
                        backgroundColor: this.state.currentIndex === false ? "#1AD5FD" : "#FFBB54",
                        zIndex: 1,
                        bottom: this.state.cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [20, 0]
                        }),
                        transform: [{
                            scale: this.state.cardsStackedAnim.interpolate({
                                inputRange: [0, 1], outputRange: [0.90, 1.0]
                            })
                        }],
                        opacity: this.state.cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [0.6, 1]
                        }),

                    }}>
                </Animated.View>

                <Animated.View

                    {...this.cardsPanResponder.panHandlers}
                    style={{
                        width: 300, height: 170,
                        position: 'absolute',
                        borderRadius: 20,

                        zIndex: this.state.cardsStackedAnim.interpolate({
                            inputRange: [0, 0.5, 1], outputRange: [3, 2, 0]
                        }),
                        bottom: this.state.cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [0, 40]
                        }),
                        opacity: this.state.cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [1, 0.3]
                        }),
                        transform: [
                            {translateX: this.state.cardsPan.x},
                            {
                                scale: this.state.cardsStackedAnim.interpolate({
                                    inputRange: [0, 1], outputRange: [1, 0.80]
                                })
                            },
                        ],
                    }}

                >
                    {this.state.currentIndex === false ?

                        <Animated.View style={{
                            backgroundColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            shadowColor: "rgba(255, 101, 8, 0.79)",

                            elevation: 5,
                        }}>
                            <LinearGradient colors={["#FFBB54", "#FD9053"]} style={{
                                height: "100%", width: "100%", borderRadius: 20, shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 3,
                                shadowColor: "rgba(255, 153, 0, 1)",

                                elevation: 5,
                            }}>
                                <View style={{alignItems: "center", marginTop: 12}}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontFamily: "Poppins-Regular",
                                        marginTop: 8,
                                        color: "white"
                                    }}>
                                        Buddy
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <View style={{height: 96, marginHorizontal: 12, flexDirection: "row"}

                                    }>
                                        <View style={{height: 95, width: 95}}>
                                            <Image source={require("../Images/buddy2.png")}
                                                   style={{height: "100%", width: "100%", borderRadius: 96 / 2}}/>
                                        </View>
                                        <View style={{flex: 1, justifyContent: "center", paddingLeft: 10}}>
                                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 14, color: "white"}}>
                                                Sibghatullah Gillani
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Regular",
                                                fontSize: 14,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                Lead Frontend
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Regular",
                                                fontSize: 14,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                Cutomer Products
                                            </Text>

                                        </View>

                                    </View>

                                </View>

                            </LinearGradient>
                        </Animated.View> :

                        <Animated.View style={{
                            backgroundColor: "rgba(99, 94, 205, 1)",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            shadowColor: "#1AD5FD",

                            elevation: 5,
                        }}>
                            <LinearGradient colors={["#1AD5FD", "#286DFC"]} style={{
                                height: "100%", width: "100%", borderRadius: 20, shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 3,
                                shadowColor: "rgba(255, 153, 0, 1)",

                                elevation: 5,
                            }}>
                                <View style={{alignItems: "center", marginTop: 10}}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontFamily: "Poppins-Regular",
                                        marginTop: 7,
                                        color: "white"
                                    }}>
                                        Progress OverView
                                    </Text>
                                </View>
                                <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        width: "87%",
                                        alignItems: "center",
                                        justifyContent: "space-around"
                                    }

                                    }>
                                        <View style={{}}>
                                            <CircularProgress
                                                value={67}
                                                radius={45}
                                                textColor={'#ecf0f1'}
                                                maxValue={100}
                                                valueSuffix={'%'}
                                                titleColor={'white'}
                                                activeStrokeColor={'#635ECD'}
                                                inActiveStrokeColor={'white'}
                                                inActiveStrokeWidth={10}
                                                activeStrokeWidth={10}
                                            />

                                        </View>
                                        <View style={{justifyContent: "center"}}>
                                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 12, color: "white"}}>
                                                OverDue
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Bold",
                                                fontSize: 12,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                Pending
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Bold",
                                                fontSize: 12,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                Complete
                                            </Text>

                                        </View>
                                        <View style={{justifyContent: "center", alignItems: "center"}}>
                                            <Text style={{fontFamily: "Poppins-Bold", fontSize: 12, color: "white"}}>
                                                5
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Bold",
                                                fontSize: 12,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                12
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Poppins-Bold",
                                                fontSize: 12,
                                                color: "white",
                                                marginTop: 5
                                            }}>
                                                14
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>
                        </Animated.View>
                    }
                </Animated.View>
            </View>
        );
    }
}

export default CardViewStack;