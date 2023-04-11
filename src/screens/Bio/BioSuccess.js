import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {BackButton, GreenButton, Button1} from '../../components/buttons';


const BioSuccess = ({navigation})=>{
	return(
		<KeyboardAvoidingView style ={styles.container}>
			
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern.png')}>
			<ScrollView contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
			
			<View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                <Image source={require('../../../assets/success.png')} style={{width:172, height:162}}/>
                <Text style={styles.congrats}>Congrats</Text>
                <Text style={styles.text}>Your Profile Is Ready To Use</Text>
			</View>

			      <View style={{justifyContent:'center', alignItems:'center'}}>
			      	<GreenButton label = {'Try Order'} onPress={()=>navigation.navigate('PinType')}/>
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
    congrats:{
        fontFamily: 'BentonSans Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 30,
        textAlign: 'center',
        color:'#53E88B',
        margin:10,
    },
    text:{
        fontFamily: 'BentonSans Bold',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 23,
        textAlign: 'center',
        color: '#09051C',
    },
	login:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 20,
		textAlign: 'center',
		color: '#09051C'
	},
	
	bottom:{
		flexDirection:'row', 
		alignItems:'center', 
		paddingHorizontal:'5%', 
		
	},
});
export default BioSuccess