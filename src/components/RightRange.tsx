import 'bootstrap/dist/css/bootstrap.min.css';
// 1 for generating random number, text box to set first value, text box to set second value, third text box to store result, badge header
import { Form } from 'react-bootstrap';

export const RightRange = (props: { rightNum: number, setRightNum: React.Dispatch<React.SetStateAction<number>> }) => {

	const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value.length === 0){
			props.setRightNum(0);
		}
		else{
			props.setRightNum(parseInt(e.target.value.replace(/[^\d]*/g,"")));
		}
	}

	return(
	<Form>
		<Form.Group className="mb-3" controlId="formBasicLeftOperand">
			<Form.Label>Right Range</Form.Label>
			<Form.Control type="text" placeholder={String(props.rightNum)} value={props.rightNum} onChange={onChangeFunc}/>
			<Form.Text className="text-muted">Right range goes here</Form.Text>
		</Form.Group>
	</Form>);

}