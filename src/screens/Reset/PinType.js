import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {BackButton, GreenButton, Button1} from '../../components/buttons';


const PinType = ({navigation})=>{
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern4.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			
			<View>
			<BackButton onPress={()=>navigation.goBack()}/>
			<View style={{marginHorizontal:'5%'}}>
				<Text style={styles.text1}>
                    Enter 4-digit Verification code
				</Text>
				<Text style={styles.text2}>
                    Code send to +6282045**** . This code will expired in 01:30
				</Text>
			</View>
				<View style={{marginVertical:50}}>
					<View style={styles.view}>
							<Image style={{width:40, height:40, marginRight:20}} source={require('../../../assets/sms.png')}/>
							<View>
								<Text style={styles.sms}>Via sms:</Text>
								<View style={{flexDirection:'row', alignItems:'flex-end'}}>
									<Text style={{color:'#000', fontWeight:'700'}}>xxxx xxxx</Text>
									<Text style={styles.num}> 4235</Text>
								</View>
								
							</View>
							
						</View>

						<View style={styles.view}>
							<Image style={{width:40, height:40, marginRight:20}} source={require('../../../assets/mail.png')}/>
							<View>
								<Text style={styles.sms}>Via email:</Text>
								<View style={{flexDirection:'row', alignItems:'flex-end'}}>
									<Text style={{color:'#000', fontWeight:'700'}}>xxxx xxxx</Text>
									<Text style={styles.num}> @gmail.com</Text>
								</View>
								
							</View>
							
						</View>
				</View>
					
					
		              
			</View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      	<GreenButton label = {'Next'} onPress={()=>navigation.navigate('Pin')}/>
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
    pin:{
        fontFamily: 'BentonSans Medium',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 33,
        textAlign: 'center',
        color: '#09051C',

    },
	sms:{
		fontFamily: 'BentonSans Regular',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 16,
		color: '#828282',
		marginBottom:10,
	},
	num:{
		fontFamily: 'Manrope',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 16,
		color: '#09051C',
	},
	view:{
		marginBottom:20,
		backgroundColor:'#fff',
		marginHorizontal:'5%',
		borderRadius:10,
		padding:20,
		flexDirection:'row',
		alignItems:'center',
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
export default PinType