import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

const Footer = () => {
    let {container, itemsContainer} = styles;
    return(
        <View style={container}>
            <View style={{
                height: 20
            }}>

            </View>
            <View style={itemsContainer}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../images/icons/cityIcnActive.png')}
                    />
                    <Text style={{
                        fontSize: 11,
                        color: '#237ba0'
                    }}>
                        My City
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../images/icons/likesIcn.png')}
                    />
                    <Text style={{
                        fontSize: 11,
                        color: '#a0a2a7'
                    }}>
                        Favorites
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={{
                            width: width*0.18,
                            height: width*0.18,
                        }}
                        source={require('../images/footer_button.png')}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../images/icons/notifsIcn.png')}
                    />
                    <Text style={{
                        fontSize: 11,
                        color: '#a0a2a7'
                    }}>
                        Notifications
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../images/icons/profileIcn.jpg')}
                    />
                    <Text style={{
                        fontSize: 11,
                        color: '#a0a2a7'
                    }}>
                        Profile
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: {
        position: 'absolute',
        zIndex: 100,
        bottom:0,
        backgroundColor:'transparent',
        // backgroundColor:'#159',
        width: width,
        height: 20,
    },
    itemsContainer: {
        backgroundColor:'#fff',
        width: width,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10
    }
}

export default Footer;