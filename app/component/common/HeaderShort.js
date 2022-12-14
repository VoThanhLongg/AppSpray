import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../controller/Constants'

const HeaderShort = ({ name }) => {
    return (
        <View style={styles.tittleHeader}>
            <Text style={styles.title}>{name}</Text>
            <Ionicons name='md-notifications' color='white' size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Constants.font.fontPPBold,
        fontSize: 30,
        color: Constants.color.textButtonColor
    },
    tittleHeader: {
        flexDirection: 'row',
        marginHorizontal: 22,
        justifyContent: 'space-between',
        marginTop: 22,
        alignItems: 'center',
        marginBottom: 17.4
    }
})

export default HeaderShort
