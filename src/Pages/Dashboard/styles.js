import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    viewImg: {
        width: '30%',
        height: '100%',
        height: 150,
        backgroundColor: '#559d2f'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: '#559d2f',
        padding: 10,
        width: '70%',
        height: '100%',
        
    },
    name: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,    

    }, 
    desc: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5
    },
    btn: {
        padding: 10,
        color: 'green',
        backgroundColor: 'green',
    }
});

export default styles;
