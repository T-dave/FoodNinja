import React, {useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';


export const TextInput1 = ({values, handleBlur, handleChange, placeholder, name, type, secure})=>{
	return(
					<TextInput
		                  name={name}
		                  placeholder={placeholder}
		                  placeholderTextColor="#3B3B3B"
		                  style={[styles.textInput, {backgroundColor:'#fff',flex:1, height:'100%', color:'#000', padding:10}]}
		                  onChangeText={handleChange}
		                  onBlur={handleBlur}
		                  keyboardType={type}
		                  secureTextEntry={secure}
		                />
		)
}

export const TextInput2 = ({values, handleBlur, handleChange, placeholder, name, type, secure, icon, green})=>{
	const [secureText, setSecure] = useState(secure)
	return(			
				<TouchableOpacity style={[styles.textInput, {flexDirection:'row', alignItems:'center', paddingHorizontal:10,}]}>
					{icon && (
						<Image source ={icon} style={{width:24, height:24, marginRight:10}}/>
					)}
					
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
						{green ?
							<Image source ={require('../../assets/icon5.png')} style={{width:24, height:24}} resizeMode='contain'/>
							:
							<Image source ={require('../../assets/icon4.png')} style={{width:24, height:24}} resizeMode='contain'/>
						}
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
		shadowColor: 'rgba(90, 108, 234, 0.7)',
		...Platform.select({
	      ios: {
	        shadowColor: 'rgba(90, 108, 234, 0.7)',
	        shadowOffset: {
	          width: 0,
	          height: 1,
	        },
	        shadowRadius: 50,
	      },
	      android: {
	        elevation: 50,
	      },
	    }),
	},
});