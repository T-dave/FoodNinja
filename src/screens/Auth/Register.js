import React, {useEffect} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
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
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			<View style={{alignItems:'center',}}>
				<View style={{marginVertical: 50}}>
					<Image source={require('../../../assets/logo.png')} style={{width:175, height:139}}/>
					<Image source={require('../../../assets/foodninja.png')} style={{width:188, height:54}} resizeMode="contain"/>
					<Text style={styles.text}>Deliever Favorite Food</Text>
				</View>
				<Text style={styles.login}>
					Sign Up For Free
				</Text>
				 <Formik
		           validationSchema={loginValidationSchema}
				   initialValues={{ email: '', password: '' }}
				   onSubmit={values => console.log(values)}
				   style={styles.form}
		          >
		            {({ handleChange, handleBlur, handleSubmit, values }) => (
		              <>

		              <View style={{marginTop:50,width:'100%', alignItems:'center', paddingHorizontal:'10%'}}>


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
			      </View>
			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      <GreenButton label = {'Create Account'} onPress={()=>navigation.navigate('Home')}/>
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
		paddingHorizontal:'10%', 
		flexDirection:'row', 
		marginVertical:20
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
	    }),
	 }
});
export default Register