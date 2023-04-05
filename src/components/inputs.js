import React, {useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';


export const TextInput1 = ({values, handleBlur, handleChange, placeholder, name, type, secure})=>{
	return(
					<TextInput
		                  name={name}
		                  placeholder={placeholder}
		                  placeholderTextColor="#3B3B3B"
		                  style={[styles.textInput, {padding:10}]}
		                  onChangeText={handleChange}
		                  onBlur={handleBlur}
		                  keyboardType={type}
		                  secureTextEntry={secure}
		                />
		)
}

export const TextInput2 = ({values, handleBlur, handleChange, placeholder, name, type, secure, icon})=>{
	const [secureText, setSecure] = useState(secure)
	return(			
				<TouchableOpacity style={[styles.textInput, {flexDirection:'row', alignItems:'center', paddingHorizontal:10,}]}>
					<Image source ={icon} style={{width:24, height:24, marginRight:10}}/>
					<TextInput
		                  name={name}
		                  placeholder={placeholder}
		                  placeholderTextColor="#3B3B3B"
		                  style={{backgroundColor:'#fff',flex:1, height:'100%', color:'#000'}}
		                  onChangeText={handleChange}
		                  onBlur={handleBlur}
		                  keyboardType={type}
		                  secureTextEntry={secureText}
		                />
		            {secure === true && (
		            	<TouchableOpacity onPress={()=>setSecure(!secureText)}>
		            	<Image source ={require('../../assets/icon4.png')} style={{width:24, height:24}}/>
		            	</TouchableOpacity>
		            )}    
		        </TouchableOpacity>        
		)
}

const styles = StyleSheet.create({
	
	textInput:{
		width: '100%',
		
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
});