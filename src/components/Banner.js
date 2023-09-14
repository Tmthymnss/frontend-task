import {Button, Row, Col} from 'react-bootstrap';

export default function Banner() {
	return(
		<Row> 
			<Col className="p-5 text-center">
				<h1> Multiple Store Manager</h1>
				<p> Looking for stores? </p>
				<Button variant="primary"> Check Stores! </Button>
			</Col>
		</Row>
	)
}