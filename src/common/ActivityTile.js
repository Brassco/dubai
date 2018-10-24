import React from 'react';
import {View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import { Button, Badge} from 'react-native-elements';

let {width, height} = Dimensions.get('window');

const ActivityTile = (props) => {

    return (
        <View style={{
            width: width*0.42,
            height: width*0.37,
            // margin: 4,
            marginLeft: 4,
            marginRight: 4,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#157'
        }}>
            <ImageBackground
                imageStyle={{
                    borderRadius: 8,
                }}
                style={{
                    padding: 10,
                    width: width*0.40,
                    height: width*0.35,
                    flexDirection: 'column',
                    justifyContent: 'space-between',

                }}
                resizeMode={'stretch'}
                source={props.imageSrc}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    <Badge
                        containerStyle={{
                            paddingTop: 7,
                            paddingBottom: 7,
                            backgroundColor: '#fff'
                        }}>
                        <Text style={{
                            color: '#237ba0',
                            fontSize: width <= 360 ? 13 : 16,
                            fontWeight: '600'
                        }}>
                            Get it Now
                        </Text>
                    </Badge>
                </View>
                <View>
                    <Text style={{
                        color: '#fff',
                        fontSize: width <= 360 ? 16 : 18,
                        fontWeight: '500'
                    }}>
                        {props.title}
                    </Text>
                    <Text style={{
                        marginTop: 10,
                        color: '#fff',
                        fontSize: width <= 360 ? 10 : 11,
                        fontWeight: '400'
                    }}>
                        {props.subTitle}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ActivityTile;