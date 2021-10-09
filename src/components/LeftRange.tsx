import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form } from 'react-bootstrap';
// 1 for generating random number, text box to set first value, text box to set second value, third text box to store result, badge header

export const LeftRange = (props: { leftNum: number, setLeftNum: React.Dispatch<React.SetStateAction<number>> }) => {

	const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value.length === 0){
			props.setLeftNum(0);
		}
		else{
			props.setLeftNum(parseInt(e.target.value.replace(/[^\d]*/g,"")));
		}
	}


	return(
	<Form>
		<Form.Group className="mb-3" controlId="formBasicLeftOperand">
			<Form.Label>Left Range</Form.Label>
			<Form.Control type="text" placeholder={String(props.leftNum)} value={props.leftNum} onChange={onChangeFunc} />
			<Form.Text className="text-muted">Left range goes here</Form.Text>
		</Form.Group>
	</Form>);

}