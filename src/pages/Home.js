import {Container} from 'react-bootstrap';
import Banner from '../components/Banner.js';
import Highlights from '../components/Highlights.js';



export default function	Home() {
	return(
		<>
        <Container>
			<Banner/>
          <Highlights/>
        </Container> 
		</>

	)
}