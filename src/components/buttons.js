import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export const GreenButton = ({label, onPress})=>{
	return(
					<TouchableOpacity style = {styles.button1} onPress={onPress}>
						<Text style = {styles.bText1}>{label}</Text>
					</TouchableOpacity>
		)
}

export const BackButton = ({label, onPress})=>{
	return(
					<TouchableOpacity style = {styles.backButton} onPress={onPress}>
						<Image source ={require('../../assets/back.png')} style={{width:10, height:16.36,}}/>
					</TouchableOpacity>
		)
}

export const Payments = ({platform})=>{
	return(
		<TouchableOpacity style ={styles.payments}>
			{platform === 1 ?
			<Image style={{width:86, height:23}} source={require('../../assets/paypal.png')} resizeMode='contain'/>
			:
			platform === 2 ?
			<Image style={{width:60, height:60}} source={require('../../assets/visa.png')} resizeMode='contain'/>
			:
			<Image style={{width:83, height:32}} source={require('../../assets/payoneer.png')} resizeMode='contain'/>		
			}
		</TouchableOpacity>
	)
	
}

export const PicButton = ({source, text})=>{
	return(
		<TouchableOpacity style ={[styles.payments, {height:129}]}>
			<Image style={{width:50, height:50, margin:5}} source={source} resizeMode='contain'/>
			<Text style={styles.picText}>{text}</Text>
		</TouchableOpacity>
	)
	
}

export const Button1 = ({text})=>{
	return(
		<TouchableOpacity style ={styles.button2}>
			<Text style={styles.bText2}>{text}</Text>
		</TouchableOpacity>
	)
	
}

const styles = StyleSheet.create({
	button1:{
		width:157,
		height:57,
		backgroundColor:'#15BE77',
		marginBottom:20,
		borderRadius:15,
		alignItems:'center',
		justifyContent:'center'
	},
	bText1:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 16,
		color: '#FFFFFF'
	},
	bText2:{
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		color: '#09051C'
	},
	backButton:{
		backgroundColor: '#F9A84D10',
		borderRadius: 15,
		width:45,
		height:45,
		alignItems:'center',
		justifyContent:'center',
		margin:'5%',
	},
	picText:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 14,
		color: '#000000'
	},
	payments:{
		width: '100%',
		alignItems:'center',
		justifyContent:'center',
		height: 73,
		backgroundColor: '#fff',
		borderRadius: 15,
		marginBottom:30,
		shadowColor: 'rgba(90, 108, 234, 0.7)',
		...Platform.select({
	      ios: {
	        shadowColor: 'rgba(90, 108, 234, 0.7)',
	        shadowOffset: {
	          width: 0,
	          height: 1,
	        },
	        shadowRadius: 50,
	      },
	      android: {
	        elevation: 50,
	      },
	    }),
	},
	button2:{
		width:'100%',
		height: 57,
		backgroundColor: '#F6F6F6',
		borderRadius: 15,
		alignItems:'center',
		justifyContent:'center',
		shadowColor: 'rgba(90, 108, 234, 0.7)',
		...Platform.select({
	      ios: {
	        shadowColor: 'rgba(90, 108, 234, 0.7)',
	        shadowOffset: {
	          width: 0,
	          height: 1,
	        },
	        shadowRadius: 50,
	      },
	      android: {
	        elevation: 30,
	      },
	    }),
	}
});