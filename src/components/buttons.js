import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export const GreenButton = ({label, onPress})=>{
	return(
					<TouchableOpacity style = {styles.button} onPress={onPress}>
						<Text style = {styles.bText}>{label}</Text>
					</TouchableOpacity>
		)
}

const styles = StyleSheet.create({
	button:{
		width:157,
		height:57,
		backgroundColor:'#15BE77',
		marginBottom:20,
		borderRadius:15,
		alignItems:'center',
		justifyContent:'center'
	},
	bText:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 16,
		color: '#FFFFFF'
	}
});