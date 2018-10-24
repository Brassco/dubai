import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, Dimensions, ScrollView, Platform} from 'react-native';
import { Button, Badge, Avatar } from 'react-native-elements';
import ActivityTile from './common/ActivityTile';
import MessageComponent from './common/MessageComponent';
import EventTile from './common/EventTile';
import Footer from './common/Footer';
import Header from './common/Header';

let {width, height} = Dimensions.get('window');

class MainScreen extends Component {

    constructor(){
        super()
        this.state={
            showHeader: false,
            activities: [
                {
                    id: '0',
                    title: 'Aljanadriyah Festival',
                    subTitle: '3 Tickets Remaining',
                    image: require('../src/images/festival.jpeg')
                },
                {
                    id: '1',
                    title: 'Riyadh Party',
                    subTitle: '3 Tickets Remaining',
                    image: require('../src/images/party.jpeg')
                },
                {
                    id: '2',
                    title: 'Aljanadriyah Festival',
                    subTitle: '3 Tickets Remaining',
                    image: require('../src/images/festival.jpeg')
                },
                {
                    id: '3',
                    title: 'Riyadh Party',
                    subTitle: '3 Tickets Remaining',
                    image: require('../src/images/party.jpeg')
                },
            ]
        }
    }

    renderActivities() {
        return this.state.activities.map( item => {
            console.log(item)
            return (
                <ActivityTile
                    key={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    imageSrc={item.image}
                />
            )
        })

    }

    render() {

        let {sectionContainer, sectionTitleContainer,
            headerImage, contentContainer, headerBange,
            headerIconsContainer, headerIcon, headerTitle,
            sectionTitle, badgeContainer, eventsSectionContainer,
            eventsSectionRow, sliderContainer
        } = styles;

        return (
            <View>
                <View style={contentContainer}>
                    <ScrollView
                        onScroll={(event) => {
                            this.setState({
                                showHeader: event.nativeEvent.contentOffset.y >= height*0.25
                            })
                        }}
                    >
                        <View style={[
                            sectionContainer,
                            {
                                height: height*0.25,
                            }
                        ]}>
                            <ImageBackground
                                style={headerImage}
                                resizeMode={'stretch'}
                                source={require('./images/dubai_night.jpg')}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start'
                                    }}>
                                        <View style={headerBange}>
                                            <Text  style={{
                                                color: '#fff',
                                                fontSize: 14,
                                            }}>
                                                Change City
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={headerIconsContainer}>
                                        <Image
                                            style={headerIcon}
                                            source={require('../src/images/icons/mapIcnWhite.png')}
                                        />
                                        <Image
                                            style={headerIcon}
                                            source={require('../src/images/icons/searchIcnWhite.png')}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent: 'flex-start'
                                }}>
                                    <Text style={headerTitle}>
                                        Dubai
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={[
                            sectionContainer,
                            {
                                height: height*0.35,
                            }
                        ]}>
                            <View style={sectionTitleContainer}>
                                <View style={sectionTitle}>
                                    <Text style={{
                                        color: '#888b90'
                                    }}>
                                        What is in Dubai
                                    </Text>
                                </View>
                                <View style={badgeContainer}>
                                    <Badge
                                        containerStyle={{
                                            backgroundColor: '#22799e'
                                        }}>
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: 12,
                                        }}>
                                            Hotels
                                        </Text>
                                    </Badge>
                                </View>
                            </View>
                            <View style={eventsSectionContainer}>
                                <View style={eventsSectionRow}>
                                    <EventTile
                                        title={'Entertainment'}
                                        iconSrc={require('../src/images/icons/tourIcn.png')}
                                        imageSrc={require('../src/images/party.jpeg')}
                                    />
                                    <EventTile
                                        title={'Events'}
                                        iconSrc={require('../src/images/icons/eventIcn.png')}
                                        imageSrc={require('../src/images/events.jpg')}
                                    />
                                    <EventTile
                                        title={'Restaurants'}
                                        iconSrc={require('../src/images/icons/restIcn.png')}
                                        imageSrc={require('../src/images/restaurants.jpg')}
                                    />
                                </View>
                                <View style={eventsSectionRow}>
                                    <EventTile
                                        title={'Breackfast'}
                                        iconSrc={require('../src/images/icons/burger-icon-white.png')}
                                        imageSrc={require('../src/images/breackfast.jpg')}
                                    />
                                    <EventTile
                                        title={'masajid'}
                                        iconSrc={require('../src/images/icons/masjidIcn.png')}
                                        imageSrc={require('../src/images/masajid.jpg')}
                                    />
                                    <EventTile
                                        title={'Coffe Cup'}
                                        iconSrc={require('../src/images/icons/coffeeIcn.png')}
                                        imageSrc={require('../src/images/coffe.jpg')}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[
                            sectionContainer,
                            {
                                backgroundColor: '#f6f6f6',
                                height: height*0.35,
                            }
                        ]}>
                            <View style={[
                                    sectionTitleContainer,
                                    {
                                        height: 40
                                    }
                                ]}>
                                <View style={sectionTitle}>
                                    <Text style={{
                                        color: '#888b90'
                                    }}>
                                        Active now in your city
                                    </Text>
                                </View>
                            </View>
                            <View style={sliderContainer}>
                                <ScrollView
                                    horizontal={true}
                                    style={{flex:1}}>
                                    {
                                        this.renderActivities()
                                    }
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#f6f6f6",
                            flex: 1,
                            width: width
                        }}>
                            <View style={sectionTitleContainer}>
                                <View style={sectionTitle}>
                                    <Text style={{
                                        color: '#888b90'
                                    }}>
                                        People in your city
                                    </Text>
                                </View>
                            </View>
                            <MessageComponent />
                            <MessageComponent
                                image={require('../src/images/party.jpeg')}
                            />
                            <MessageComponent />
                        </View>
                    </ScrollView>
                </View>
                <Header display={this.state.showHeader}/>
                <Footer />
            </View>
        )
    }
}

const styles = {
    sectionContainer: {
        width: width,
        height: height*0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
    },
    tileImageStyle: {
        margin: 4,
        width: width*0.28,
        height: width*0.18,
        borderRadius: 12
    },
    contentContainer: {
        height: height-100,
        width: width,
        margin: 0,
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerImage: {
        width: width,
        height: height*0.25,
        padding: 20,
        justifyContent: 'space-between'
    },
    headerBange: {
        borderRadius: 12,
        borderColor: '#fff',
        borderWidth: 1,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerIconsContainer: {
        width: width*0.15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerIcon: {
        width: 20,
        height: 20,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 38,
        fontWeight: '500'
    },
    sectionTitle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    badgeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    eventsSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: width,
        paddingLeft: 20,
        paddingRight: 20,
    },
    eventsSectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sliderContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 5,
        paddingLeft: 15
    }
}

export default MainScreen;