import React from 'react';
import {View, Image, Text, Dimensions, ImageBackground} from 'react-native';
import {Avatar} from "react-native-elements";

let {width} = Dimensions.get('window');

const MessageComponent = (props) => {
    return (
        <View style={{
            borderRadius: 10,
            backgroundColor: "#fff",
            // width: width,
            flexDirection: 'row',
            margin: 5,
            marginLeft: 30,
            marginRight: 20,
            padding: 10
        }}>
            <View style={{
                flex: 2,
                alignItems: 'center',
            }}>
                <Avatar
                    rounded
                    small
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                />
                <Text style={{
                    color: '#c0c2c2'
                }}>
                    5h
                </Text>
            </View>
            <View style={{
                flex: 9,
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 20,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <Text style={{
                            fontWeight: '500',
                            color: '#237ba0',
                            fontSize: width <= 360 ? 10 : 13,
                        }}>
                            Osama Alnajjar
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={{
                                width: 17,
                                height: 20
                            }}
                            source={require('../images/icons/oval5.png')}
                        />
                        <Text style={{
                            fontWeight: '500',
                            color: '#237ba0',
                            fontSize: width <= 360 ? 9 : 12,
                        }}>
                            McDonalds
                        </Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#12202d'
                    }}>
                        Very interesting things are happening now in Alothaim Mall... Come Now!!!
                    </Text>
                </View>
                {
                    props.image &&
                    <View style={{
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                        <Image
                            style={{
                                borderRadius: 6,
                                width: '100%',
                                height: width*0.38,
                            }}
                            resizeMode={'stretch'}
                            source={props.image}
                        />
                    </View>
                }
                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <View style={{
                            marginLeft: 3,
                            marginRight: 3,
                            flexDirection: 'row'
                        }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                source={require('../images/icons/line15.png')}
                            />
                            <Text style={{
                                fontWeight: '500',
                                color: '#237ba0',
                                fontSize: width <= 360 ? 11 : 13,
                            }}>
                                11
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: 3,
                            marginRight: 8,
                            flexDirection: 'row'
                        }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                                source={require('../images/icons/likeIcn.png')}
                            />
                            <Text style={{
                                fontWeight: '500',
                                color: '#237ba0',
                                fontSize: width <= 360 ? 11 : 13,
                            }}>
                                234
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20
                            }}
                            source={require('../images/icons/stroke1.png')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MessageComponent;