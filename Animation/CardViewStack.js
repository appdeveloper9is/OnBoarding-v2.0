import React, {Component} from 'react';
import {PanResponder, Animated, View, Text, TouchableOpacity} from 'react-native';

class CardViewStack extends Component {
    constructor(props) {

        super(props);
        this.state = {
            cardsPan: new Animated.ValueXY(),
            cardsStackedAnim: new Animated.Value(0),
            currentIndex: true,
        };

                this.cardsPanResponder = PanResponder.create( {
                onStartShouldSetPanResponder: () => true,
                onStartShouldSetPanResponderCapture: () => false,
                onMoveShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponderCapture: () => true,
                onPanResponderMove: ( event, gestureState ) => {


                },
                onPanResponderTerminationRequest: () => false,
                onPanResponderRelease: ( event, gestureState ) => {
                    // bring the translationX back to 0

                    let x = gestureState.dx;
                    let y = gestureState.dy;
                    if (Math.abs(x) > Math.abs(y)) {
                        if (x >= 0) {

                            Animated.timing( this.state.cardsPan, {
                                toValue: 0,
                                duration: 300,
                            } ).start();
                            // will be used to interpolate values in each view
                            Animated.timing( this.state.cardsStackedAnim, {

                                toValue: 1,
                                duration: 300,
                            } ).start( () => {
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
            } )
    }

    render() {


        const colors = ['red', '#009688', 'red'];
        console.log("hacker", this.state.cardsStackedAnim)

        return (



            <View style={{height: "25%", backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>

                <Animated.View
                    style={{
                        width: 300, height: 160,
                        position: 'absolute',
                        borderRadius: 20,
                        backgroundColor: "black",
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
                        width: 300, height: 150,
                        position: 'absolute',
                        borderRadius: 20,
                        backgroundColor: "red",
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

                    <Animated.View style={{height:"100%", width:"100%", backgroundColor:"rgba(99, 94, 205, 1)", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                            <TouchableOpacity onPress={()=> alert("working")} style={{ height:50, width:50}}>
                                <Text>
                                 check
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>:
                        <Animated.View style={{height:"100%", width:"100%", backgroundColor:"black", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                            <TouchableOpacity onPress={()=> alert("working")} style={{ height:50, width:50}}>
                                <Text>
                                    check
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                    }
                </Animated.View>
            </View>
        );
    }
}

export default CardViewStack;