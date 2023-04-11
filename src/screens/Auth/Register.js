import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import {Field, Formik} from 'formik';
import * as yup from 'yup';
import {GreenButton} from '../../components/buttons';
import {TextInput2} from '../../components/inputs';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
    email: yup
    .string()
    .required('Username is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})



const Register = ({navigation})=>{
	const [check1, set1] = useState(false)
	const [check2, set2] = useState(false)
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			<View >
				<View style={{alignItems:'center'}}>
					<View style={{marginVertical: 50}}>
						<Image source={require('../../../assets/logo.png')} style={{width:175, height:139}}/>
						<Image source={require('../../../assets/foodninja.png')} style={{width:188, height:54}} resizeMode="contain"/>
						<Text style={styles.text}>Deliever Favorite Food</Text>
					</View>
					<Text style={styles.login}>
						Sign Up For Free
					</Text>
				</View>
				 <Formik
		           validationSchema={loginValidationSchema}
				   initialValues={{ email: '', password: '' }}
				   onSubmit={values => console.log(values)}
				   style={styles.form}
		          >
		            {({ handleChange, handleBlur, handleSubmit, values }) => (
		              <>

		              <View style={{marginTop:50,width:'100%', alignItems:'center', paddingHorizontal:'5%'}}>


		              <TextInput2
		                  name={"username"}
		                  placeholder={"Anamwp . . "}
		                  handleChange={handleChange('username')}
		                  handleBlur={handleBlur('username')}
		                  value={values.username}
		                  icon={require('../../../assets/icon1.png')}
		                />

			             <TextInput2
		                  name={"email"}
		                  placeholder={"Email Address"}
		                  handleChange={handleChange('email')}
		                  handleBlur={handleBlur('email')}
		                  value={values.email}
		                  type={"email-address"}
		                  icon={require('../../../assets/icon2.png')}
		                />


		                <TextInput2
		                  name={"password"}
		                  placeholder={"Password"}
		                  handleChanget={handleChange('password')}
		                  handleBlur={handleBlur('password')}
		                  value={values.password}
		                  icon={require('../../../assets/icon3.png')}
		                  secure={true}
		                />

		                </View>
						
			            
			          </>
			        )}
			      </Formik>
			      
				  {
					check1 ?
					<TouchableOpacity style={[styles.bottom, {marginBottom:10}]} onPress={()=>set1(!check1)}>
							<View style={[styles.checked, {backgroundColor:'#53E88B',}]}>
							<Image source={require('../../../assets/check.png')} style={{width:12, height:12}} resizeMode='contain'/>
							</View>
							
							<Text style={styles.bText}>Keep me signed in</Text>
					</TouchableOpacity>
					:
					<TouchableOpacity style={[styles.bottom, {marginBottom:10}]} onPress={()=>set1(!check1)}>
							<View style={styles.checked}>
							<Image source={require('../../../assets/check.png')} style={{width:12, height:12}} resizeMode='contain'/>
							</View>
							
							<Text style={styles.bText}>Keep me signed in</Text>
					</TouchableOpacity>
				  }
				  
				  {
					check2 ?
					<TouchableOpacity style={[styles.bottom, {marginBottom:10,}]} onPress={()=>set2(!check2)}>
							<TouchableOpacity style={[styles.checked, {backgroundColor:'#53E88B',}]} onPress={()=>console.log('hiii')}>
							<Image source={require('../../../assets/check.png')} style={{width:12, height:12}} resizeMode='contain'/>
							</TouchableOpacity>
							
							<Text style={styles.bText}>Email Me About Special Pricing</Text>
					</TouchableOpacity>
					:
					<TouchableOpacity style={[styles.bottom, {marginBottom:10}]} onPress={()=>set2(!check2)}>
							<View style={styles.checked}>
							<Image source={require('../../../assets/check.png')} style={{width:12, height:12}} resizeMode='contain'/>
							</View>
							
							<Text style={styles.bText}>Email Me About Special Pricing</Text>
					</TouchableOpacity>
				  }
				  </View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      <GreenButton label = {'Create Account'} onPress={()=>navigation.navigate('Bio1')}/>
				  <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
				  	<Text style={styles.down}>already have an account?</Text>
				  </TouchableOpacity>
				  
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
	text:{
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: 13,
	letterSpacing: 1,
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
		fontWeight: '400',
		textAlign: 'center',
		color: '#09051C'
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
export default Register