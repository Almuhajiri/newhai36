import React from 'react';
import { Text } from 'react-native';

class Judul extend React.Component{
	render(){
		return(
			<Text style={style.judul}><{this.props.title}</Text>
		)
	}
}

const style = {
	judul:{
		color: '#fff',
		fontSize: 50,
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: '#000'
	}
}

export default Judul;