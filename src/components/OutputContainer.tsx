import 'bootstrap/dist/css/bootstrap.min.css';
// 1 for generating random number, text box to set first value, text box to set second value, third text box to store result, badge header
import { Form } from 'react-bootstrap';

export const OutputContainer = (props: {randomResult: number}) => {

	return(
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicRandNumResult">
					<Form.Label>Random Number Result</Form.Label>
					<Form.Control type="text" placeholder="random number generated goes here" style={{textAlign: 'center'}} value={props.randomResult} readOnly/>
					<Form.Text className="text-muted">
						Result will be an integer
					</Form.Text>
				</Form.Group>
			</Form>
		</>
	);


}