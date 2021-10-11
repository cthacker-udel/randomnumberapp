import 'bootstrap/dist/css/bootstrap.min.css';
// 1 for generating random number, text box to set first value, text box to set second value, third text box to store result, badge header
import { Container, Row, Col, Badge, Button, Spinner } from 'react-bootstrap';
import { OutputContainer } from './OutputContainer';
import { LeftRange } from './LeftRange';
import { RightRange } from './RightRange';
import { GenNumButton } from './GenNumButton';
import { useState, useEffect } from 'react';
import { ErrorToast } from './ErrorToast';

export const MainPage = () => {

	const [leftNum, setLeftNum] = useState<number>(0);
	const [rightNum, setRightNum] = useState<number>(0);
	const [randomResult, setRandomResult] = useState<number>(0);
	const [errorMessage,setErrorMessage] = useState<string>('');
	const [toggleError,setToggleError] = useState<boolean>(false);
	const [generating, setGenerating] = useState<boolean>(false);

	const verify = (): boolean => {

		console.log(rightNum <= leftNum);
		if(rightNum < leftNum){
			setErrorMessage('Left Range must be less than Right Range, not greater than or equal to');
			setToggleError(true);
			setTimeout(() => {
				if(leftNum < 10){
					setLeftNum(0);
				}
				else{
					setLeftNum(parseInt(String(leftNum).substring(0,String(leftNum).length-1)));
				}
			},4000);
			setTimeout(() => {
				setToggleError(false);
			},5000);
			return false;
		}
		else if(rightNum === 0){
			setErrorMessage('Right range should not be set to 0');
			setToggleError(true);
			setTimeout(() => {
				setToggleError(false);
			},5000);
			return false;
		}
		else{
			return true;
		}

	};

	const genFunction = (): void => {

		const result = verify();
		if(!result){
			return;
		}
		else{
			setGenerating(true);
			setTimeout(() => {
				const min = Math.ceil(leftNum);
				const max = Math.floor(rightNum);
				const randomRes = Math.floor(Math.random() * (max-min) + min);
				setRandomResult(randomRes);
				setGenerating(false);
			},4000);
		}

	}

	const genSpinner = () => {

		return(

			<Spinner animation="border" as="span" size="sm" role="status" aria-hidden="true">
				Generating
			</Spinner>

		);

	}

	return(
		<>
			<Container>
				<Row>
					<Col>
						<LeftRange leftNum={leftNum} setLeftNum={setLeftNum}/>
					</Col>
					<Col>
						<RightRange rightNum={rightNum} setRightNum={setRightNum}/>
					</Col>
				</Row>
				<Row>
					<Col style={{textAlign: 'center'}}>
						<OutputContainer randomResult={randomResult}/>
					</Col>
				</Row>
				<br />
				<br />
				<Row>
					<Col style={{textAlign: 'center' }}>
						{generating? genSpinner(): <Button onClick={genFunction}>Generate Random Number</Button>}
					</Col>
				</Row>
				<Row>
					<Col style={{textAlign: 'center'}}>
						{ toggleError && <ErrorToast errorMsg={errorMessage} />}
					</Col>
				</Row>
			</Container>
		</>
	);

}