import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {GreenButton} from '../../components/buttons';


const Onboard = ({navigation})=>{
	return(
		<View style ={styles.container}>
				<Image source ={require('../../../assets/pattern2.png')} style={{width:'100%', height:'50%', marginVertical:50}} resizeMode="contain"/>
				<View style ={{flex:1, width:'100%', alignItems:'center', justifyContent:'space-between'}}>
					<View style ={{paddingHorizontal:50, alignItems:'center'}}>
						<Text style={styles.text1}>Find your tasty Food here</Text>
						<Text style={styles.text2}>Here You can find a Chef or dish for every taste and color. Enjoy!</Text>
					</View>
					<GreenButton label = {'Next'} onPress={()=>navigation.navigate('Onboard2')}/>
				</View>
		</View>
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
		alignItems:'center',
	},
	imageContainer:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	text2:{
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: 13,
	letterSpacing: 1,
	color: '#09051C',
	textAlign:'center',

	},
	text1:{
	fontFamily: 'BentonSans Bold',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: 22,
	color: '#09051C',
	textAlign:'center',
	marginBottom:20
	},
	button:{
		height:57,
		backgroundColor:'#53E88B',
		marginBottom:20,
		borderRadius:15,
		alignItems:'center',
		justifyContent:'center',
		paddingHorizontal:30,
		paddingVertical:20
	},
	bText:{
		fontFamily: 'BentonSans Bold',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 16,
		color: '#FFFFFF'
	}
});
export default Onboard