import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// 1 for generating random number, text box to set first value, text box to set second value, third text box to store result, badge header
import { Toast } from 'react-bootstrap';
import { useState } from 'react';


export const ErrorToast = ( props: { errorMsg: string }) => {

	const [show, setShow] = useState<boolean>(true);

	const toggleShow = () => setShow(!show);

	return(

		<Toast show={show} onClose={toggleShow}>

			<Toast.Header>Error</Toast.Header>
			<Toast.Body>{props.errorMsg}</Toast.Body>

		</Toast>

	);

}