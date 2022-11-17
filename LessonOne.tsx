import {StatusBar} from 'expo-status-bar';
import {
    FlatList,
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput, Keyboard, ListRenderItem, KeyboardAvoidingView, Platform, TouchableWithoutFeedback
} from 'react-native';
import {useState} from "react";

const {width, height}= Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const PADDING = 20


const titles = ['iphone', 'samsung', 'dns', 'simens', 'mi']
const prices = [50, 60, 70, 90, 100]

type DataType = {
    id: number
    title: string
    price: number
}

const data = new Array(50).fill(null).map((_, index) => ({
    id: index + 1,
    title: titles[index % 5],
    price: prices[index % 5]
}))

export default function LessonOne() {
    const [value, setValue] = useState()

    const renderItem: ListRenderItem<DataType> = ({item,index}) => {
        return (
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
                               style={styles.avoid}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        numColumns={2}
                        stickyHeaderIndices={[0]}
                        ListEmptyComponent={()=> <View><Text>List Empty</Text></View>}
                        ListHeaderComponent={()=> <View><Text>Header Component</Text></View>}
                        ListFooterComponent={()=> <View><Text>Footer Component</Text></View>}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setValue}
                        value={value}
                    />
                    <Text>{value}</Text>
                    <Text>Open up App.tsx to start working on your app!</Text>
                    <ActivityIndicator/>
                    <ActivityIndicator size="large"/>
                    <ActivityIndicator size="small" color="#0000ff"/>
                    <ActivityIndicator size="large" color="#00ff00"/>
                    <Button
                        title="Press me"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                    <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => {
                        }}
                        onLongPress={()=> {
                            Alert.alert('hi')
                        }}
                        delayLongPress={5000}
                    >
                        <Text style={styles.text}>Press Here</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        onChangeText={setValue}
                        value={value}
                        // onPress={Keyboard.dismiss()}
                    />

                    <StatusBar style="auto"/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    avoid: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 60,
        marginBottom: 150
    },
    touchable: {
        width: 200,
        paddingVertical: 15,
        paddingHorizontal: 5,
        backgroundColor: 'red'

    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        width: 200,
        borderColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    item: {
        backgroundColor: 'pink',
        marginVertical: 5,
        width: (WIDTH - PADDING * 2) / 2 - 5,
        height: ((WIDTH - PADDING * 2) / 2) / 2 - 5
    }
});
