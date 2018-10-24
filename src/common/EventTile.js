import React from 'react';
import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');
let fontSize = width <= 360 ? 11 : 14;
const EventTile = (props) => {
console.log(width);
    return (
        <View>
            <ImageBackground
                imageStyle={{
                    borderRadius: 8,
                }}
                style={{
                    margin: 4,
                    width: width*0.28,
                    height: width*0.18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={props.imageSrc}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    source={props.iconSrc}
                />
                <Text style={{
                    color: '#fff',
                    fontSize: fontSize,
                    fontWeight: '500'
                }}>
                    {props.title}
                </Text>
            </ImageBackground>
        </View>
    )
}

export default EventTile;