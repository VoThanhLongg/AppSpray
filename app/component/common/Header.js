import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from '../../controller/Constants'

const Header = ({ name }) => {
    return (
        <>
            <View style={styles.tittleHeader}>
                <Text style={styles.title}>{name}</Text>
                <Ionicons name='md-notifications' color='white' size={30} />
            </View>
            <View style={styles.contentBox}>
                <View style={styles.point}>
                    <Image source={Constants.image.icRuby} style={{ marginLeft: 11.3 }} />
                    <View style={styles.nexusPoint}>
                        <Text style={styles.amountPoint}>23.254</Text>
                        <Text style={styles.unitPoint}>Nexus Point</Text>
                    </View>
                </View>
                <View style={styles.equiv}>
                    <Text style={styles.textEquiv}>Equiv: </Text>
                    <Text style={styles.textAed}>AED</Text>
                </View>
            </View>
        </>
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
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 17.4
    },
    point: {
        marginHorizontal: 16,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Constants.color.backgroundBelow,
        borderRadius: 15,
        alignItems: 'center'
    },
    amountPoint: {
        fontSize: 20,
        fontFamily: Constants.font.fontPPBold
    },
    unitPoint: {
        fontSize: 10,
        fontFamily: Constants.color.fontPPBold,
        position: 'absolute',
        marginTop: 20
    },
    equiv: {
        flexDirection: 'row',
        backgroundColor: Constants.color.backgroundBelow,
        borderRadius: 15,
        marginRight: 15.5,
        marginLeft: 105.5,
        marginTop: 10.6,
        height: 32,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nexusPoint: {
        marginRight: 18.6,
        alignItems: 'flex-end'
    },
    textEquiv: {
        marginLeft: 11,
        fontSize: 12,
        fontFamily: Constants.font.fontPPBold,
        color: Constants.color.darkBlue
    },
    textAed: {
        marginRight: 19,
        fontSize: 15,
        fontFamily: Constants.font.fontPPBold
    }
})

export default Header
