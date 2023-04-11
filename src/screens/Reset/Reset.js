import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {BackButton, GreenButton, Button1} from '../../components/buttons';
import {TextInput2} from '../../components/inputs';
import {Field, Formik} from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
const Reset = ({navigation})=>{
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern4.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			
			<View>
			<BackButton onPress={()=>navigation.goBack()}/>
			<View style={{marginHorizontal:'5%'}}>
				<Text style={styles.text1}>
					Reset your password here
				</Text>
				<Text style={styles.text2}>
					Input a strong password
				</Text>
			</View>
				
				<Formik
		           validationSchema={loginValidationSchema}
				   initialValues={{ password: '', cpassword:'' }}
				   onSubmit={values => console.log(values)}
				   style={styles.form}
		          >
		            {({ handleChange, handleBlur, handleSubmit, values }) => (
		              <>
                      <View style={{marginVertical:50, marginHorizontal:'5%'}}>
						<TextInput2
							name={"password"}
							placeholder={"New password"}
							handleChanget={handleChange('password')}
							handleBlur={handleBlur('password')}
							value={values.password}
							green={true}
							secure={true}
							/>
						<TextInput2
							name={"cpassword"}
							placeholder={"Confirm password"}
							handleChanget={handleChange('password')}
							handleBlur={handleBlur('password')}
							value={values.password}
							secure={true}
							/>
                      </View>      
					</>
			        )}
			      </Formik>
				
					
					
		              
			</View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      	<GreenButton label = {'Next'} onPress={()=>navigation.navigate('ResetSuccess')}/>
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
export default Reset