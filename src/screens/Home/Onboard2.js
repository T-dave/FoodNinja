import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {GreenButton} from '../../components/buttons';


const Onboard2 = ({navigation})=>{
	return(
		<View style ={styles.container}>
				<Image source ={require('../../../assets/pattern3.png')} style={{width:'100%', height:'50%', marginVertical:50}} resizeMode="contain"/>
				<View style ={{flex:1, width:'100%', alignItems:'center', justifyContent:'space-between'}}>
					<View style ={{paddingHorizontal:50, alignItems:'center'}}>
						<Text style={styles.text1}>Food Ninja is Where Your tasty Food Lives</Text>
						<Text style={styles.text2}>Enjoy a fast and smooth food delivery at your doorstep</Text>
					</View>
					<GreenButton label = {'Next'} onPress={()=>navigation.navigate('LogIn')}/>
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
		width:157,
		height:57,
		backgroundColor:'#53E88B',
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
export default Onboard2