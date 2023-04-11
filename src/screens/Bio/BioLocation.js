import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {BackButton, GreenButton, Button1} from '../../components/buttons';


const BioLocation = ({navigation})=>{
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern4.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			
			<View>
			<BackButton onPress={()=>navigation.goBack()}/>
			<View style={{marginHorizontal:'5%'}}>
				<Text style={styles.text1}>
					Set Your Location
				</Text>
				<Text style={styles.text2}>
					This data will be displayed in your account profile for security
				</Text>
			</View>
			
					<View style={styles.view}>
						<View style={{flexDirection:'row', alignItems:'center', marginBottom:30}}>
							<Image source={require('../../../assets/location.png')} style={{width:33, height:33, marginRight:10}}/>
							<Text style={styles.location}>Your Location</Text>
						</View>
						<Button1 text={'Set Location'}/>
					</View>
		              
			</View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      	<GreenButton label = {'Next'} onPress={()=>navigation.navigate('BioSuccess')}/>
			      </View>
			      </ScrollView>
			</ImageBackground>
		</KeyboardAvoidingView>
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
		justifyContent:'center',

	},
	imageContainer:{
		flex:1,
		justifyContent:'center',
	},
	text1:{
	fontFamily: 'BentonSans Bold',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: 25,
	color: '#09051C'

	},
	login:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 20,
		textAlign: 'center',
		color: '#09051C'
	},
	text2:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontSize: 12,
		fontWeight: '400',
		color: '#000'
	},
	textInput:{
		width: '100%',
		padding:10,
		height: 57,
		backgroundColor: '#fff',
		borderColor: '#F4F4F4',
		borderWidth:1,
		// box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.07),
		borderRadius: 15,
		marginBottom:30,
		color:"#000",
		...Platform.select({
	      ios: {
	        shadowColor: '#082463',
	        shadowOffset: {
	          width: 0,
	          height: 1,
	        },
	        shadowOpacity: 0.2,
	        shadowRadius: 1.41,
	      },
	      android: {
	        elevation: 5,
	      },
	    }),
	},
	socials:{
		width:'100%', 
		justifyContent:'space-between', 
		paddingHorizontal:'5%', 
		flexDirection:'row', 
		marginVertical:20
	},
	bText:{
		fontFamily: 'BentonSans Book',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 12,
		textAlign: 'center',
		color: '#000000',
		marginLeft:10
	},
	bottom:{
		flexDirection:'row', 
		alignItems:'center', 
		paddingHorizontal:'5%', 
		
	},
	location:{
		fontFamily: 'BentonSans Medium',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 15,
		color: '#09051C',
	},
	cancel:{
		width: 31,
		height: 31,
		backgroundColor: '#FFFFFF55',
		borderRadius:40,
		alignItems:'center',
		justifyContent:'center',
		top:20,
		right:20
	},
	view:{
		marginVertical:50,
		backgroundColor:'#fff',
		marginHorizontal:'5%',
		borderRadius:10,
		padding:20,
		shadowColor: 'rgba(90, 108, 234, 0.7)',
		...Platform.select({
			ios: {
		shadowColor: 'rgba(90, 108, 234, 0.7)',
			  shadowOffset: {
				width: 0,
				height: 1,
			  },
			  shadowOpacity: 0.2,
			  shadowRadius: 1.41,
			},
			android: {
			  elevation: 50,
			},
		  },),
	},
});
export default BioLocation