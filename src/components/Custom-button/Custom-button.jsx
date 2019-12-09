import React from 'react';
import './styles.scss';


const CustomButton = ({handelChange,children}) => {
	return (
		<button className='custom-button' onClick={() => handelChange()}>
			{children}
		</button>
	)
}

export default CustomButton