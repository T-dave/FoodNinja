import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {BackButton, GreenButton, PicButton} from '../../components/buttons';




const BioPhoto2 = ({navigation})=>{
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern4.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			
			<View>
			<BackButton onPress={()=>navigation.goBack()}/>
			<View style={{marginHorizontal:'5%'}}>
				<Text style={styles.text1}>
					Upload Your Photo Profile
				</Text>
				<Text style={styles.text2}>
					This data will be displayed in your account profile for security
				</Text>
			</View>
			
					<View style={{alignItems:'center', justifyContent:'center', marginVertical:40}}>
						<ImageBackground source={require('../../../assets/photo1.png')} style={{width:245, height:238, borderRadius:22, alignItems:'flex-end'}}>
							<TouchableOpacity style={styles.cancel} onPress={()=>navigation.goBack()}>
								<Image source={require('../../../assets/x.png')} style={{width:12.88, height:12.88, zIndex:1}}/>
							</TouchableOpacity>
						</ImageBackground>
					</View>
		              
			</View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      	<GreenButton label = {'Next'} onPress={()=>navigation.navigate('BioLocation')}/>
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
	checked:{
		width: 22,
		height: 22,
		alignItems:'center',
		justifyContent:'center',
		borderWidth: 1,
		borderColor:'#F4F4F4',
		borderRadius: 15,
	},
	down:{
		fontFamily: 'BentonSans Medium',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 12,
		color:'#53E88B',
		textAlign: 'center',
		textDecorationLine: 'underline',
		textDecorationColor:'#53E88B',
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
	 socialView:{
	 	backgroundColor: '#fff',
		borderColor: '#F4F4F4',
		// box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.07);
		borderRadius: 15,
		alignItems:'center',
		justifyContent:'center',
		padding:15,
		flexDirection:'row',
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
	    },),

	 }
});
export default BioPhoto2