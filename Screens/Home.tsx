import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    ListRenderItem,
    FlatList,
    Image, ScrollView,
} from "react-native";
import {Rating} from "react-native-ratings";

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const PADDING = 10

const items = ['Winter coat', 'Warm hat', 'Gloves', 'Blanket', 'Fairy lights']
const shopNames = ['Grace', 'Levi', 'Kelly', 'Lorem', 'Vibes']
const prices = ['500 ₽', '600 ₽', '700 ₽', '900 ₽', '1000 ₽']
const imgItems = [
    "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/23/66/358121_9734_XXL.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-winter-hats-1663960249.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572286952-1860071_522_f.jpg",
    "https://m.media-amazon.com/images/I/91XxeQfdVuL.jpg",
    "https://img.joomcdn.net/802c7e249f8ad2e0e20fdcfb72e939c9d89f22b9_original.jpeg"

]

const  grades = [5,4,5,4,5]

const deliveryDates = ['the next day', 'on November 30','tomorrow', 'on December 1', 'the next day' ]

type DataType = {
    id: number
    imgItem: string
    price: number
    shopName: string
    item: string
    grade: number
    deliveryDate: string

}

const data = new Array(50).fill(null).map((_, index) => ({
    id: index + 1,
    imgItem: imgItems[index % 5],
    price: prices[index % 5],
    shopName: shopNames[index % 5],
    item: items[index % 5],
    grade: grades[index % 5],
    deliveryDate: deliveryDates[index % 5]
}))


const Home = () => {
    const renderItem: ListRenderItem<DataType> = ({item}) => {
        return (
            <View style={styles.item}>
                <Image
                    style={{width: '100%', height: '75%'}}
                    source={ {uri: item.imgItem}}/>
                <View style={styles.itemTextContainer}>
                    <Text style={{fontWeight:'bold'}}>{item.price}</Text>
                <Text>{item.shopName}</Text>
                <Text style={styles.grayText}>{item.item}</Text>
                    <Rating
                        type='custom'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        imageSize={10}
                        style={{ paddingVertical: 5, alignSelf: 'flex-start'}}
                    />
                <Text style={styles.grayText}>{item.deliveryDate}</Text>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container
            // height: '100%',
            // backgroundColor: "blue",
            // justifyContent: "center",
            // alignItems: "center"
        }
        >
            <TextInput
                style={styles.input}
                // onChangeText={setValue}
                // value={value}
            />
            <ScrollView >
            <View style={styles.qrContainer}>
                <View style={styles.qrTextContainer}>
                <Text style={styles.qrText}>QR-CODE FOR DELIVERIES</Text>
                <Text style={styles.showCodeText}>show this code to our employee
                    <Text style={styles.numberCodeText}>324</Text>
                </Text>
                </View>
                <Image
                    style={{width:80, height: 80}}
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKgmfKEMbsxqE4WwPeUQDYeqb619rnPvUnciLyJG_WLWKw5S7t6qRHlw0AcH7PcbRnQY&usqp=CAU"}}/>
            </View>
                <Text  style={styles.forYouText}>SELECTED FOR YOU</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                // stickyHeaderIndices={[0]}
                ListEmptyComponent={() => <View><Text>List Empty</Text></View>}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
            </ScrollView>
        </View>
    );
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        // marginBottom: 5
    },
    touchable: {
        width: 200,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: 'red'

    },
    input: {
        borderWidth: 1,
        width: WIDTH - PADDING * 2,
        borderColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 15,
        marginBottom: 10
    }
    ,
    item: {
        backgroundColor: 'white',
        marginVertical: 5,
        width: (WIDTH - PADDING * 2) / 2 - 5,
        // height: ((WIDTH - PADDING * 2) / 2) / 2 - 5
        height: (WIDTH - PADDING * 2) - 5,
        borderRadius: 15
    },
    img: {
        width: '100%',
        height: '75%',
        resizeMode: "contain"
    },
    itemTextContainer: {
        marginLeft: 5
    },
    grayText: {
        color: 'gray'
    },
    qrContainer: {
        // flex:1
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 10,
        paddingVertical: 10
},
    qrTextContainer: {
        width: '70%'
    },
    qrText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    showCodeText: {
        fontSize: 12,
        color: 'gray',
        letterSpacing: 5
    },
    numberCodeText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: 'black'
    },
    forYouText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: 'purple'
    }
});