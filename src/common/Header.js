import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

const Header = (props) => {
console.log(props)
    return (
        <View
            display={props.display ? 'flex' : 'none'}
            style={{
            width: width,
            height: 100,
            position: 'absolute',
            zIndex: 100,
            top: 0
        }}>
            <View
                display={props.display ? 'flex' : 'none'}
                style={{
                    backgroundColor: '#e4e4e4',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    paddingRight: 15,
            }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        // marginLeft: 10,
                        color: '#237ba0',
                        fontSize: width <= 360 ? 30 : 38,
                        fontWeight: '500'
                    }}>
                        Dubai
                    </Text>
                    <View style={{
                        borderRadius: 12,
                        borderColor: '#237ba0',
                        borderWidth: 1,
                        padding: 2,
                        marginLeft: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                        <Text  style={{
                            color: '#237ba0',
                            fontSize: width <= 360 ? 11 : 14,
                        }}>
                            Change City
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: width*0.15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require('../images/icons/mapIcnWhite.png')}
                    />
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require('../images/icons/searchIcnWhite.png')}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header;