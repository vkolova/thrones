import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    pageWrapper: {
        width: '100%',
        height: '100%',
        paddingBottom: 25,
        paddingTop: 35,
        paddingLeft: 50,
        paddingRight: 50,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        resizeMode: 'cover'
    },
    pageNoPadding: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    pageList: {
        width: '100%',
        height: '100%',
        paddingBottom: 25,
        paddingTop: 35,
        paddingLeft: 50,
        paddingRight: 50,
        display: 'flex',
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    pageWithImage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        resizeMode: 'cover'
    },
    btnPrim: {
        minWidth: 170,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 30,
        backgroundColor: '#191919',
        borderRadius: 20,
        color: '#ffffff',
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnPrimText: {
        color: '#ffffff'
    },
    btnPrimIcon: {
        color: '#ffffff'
    },
    link: {

    },
    header: {
        width: '100%',
        paddingTop: 30,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    title: {
        fontSize: 36,
        marginTop: 20
    },
    backIcon: {
        marginLeft: -5,
        fontSize: 36,
    }
});