import React, {useEffect} from 'react';
import { View, ImageBackground, Text, StyleSheet, Image } from 'react-native';


const HomeScreen = ({navigation})=>{
	useEffect(
		()=>{
			setTimeout(()=>navigation.navigate('Onboard'), 3000)
		}, [])
	return(
		<View style ={styles.container}>
			<ImageBackground style={styles.imageContainer} source ={require('../../../assets/pattern.png')}>
				<Image source={require('../../../assets/logo.png')} style={{width:175, height:139}}/>
				<Image source={require('../../../assets/foodninja.png')} style={{width:188, height:54}} resizeMode="contain"/>
				<Text style={styles.text}>Deliever Favorite Food</Text>
			</ImageBackground>
		</View>
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
	},
	imageContainer:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	text:{
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: 13,
	letterSpacing: 1,
	color: '#09051C'

	}
});
export default HomeScreen