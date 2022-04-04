import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../SlideShow/SlideShow'
import styled from 'styled-components';
import cargopants from '../../img/cargo-pants.png';
import gorramarron from '../../img/gorra-marron.png';
import remerablack from '../../img/remera-black.png';


const SlideShowContainer = () => {
	return (
		<main>
			<Slideshow controles={true}>
				<Slide>
					<a href="">
						<img src={cargopants} alt=""/>
					</a>
				</Slide>
				<Slide>
					<a href="">
						<img src={gorramarron} alt=""/>
					</a>
				</Slide>
				<Slide>
					<a href="">
						<img src={remerablack} alt=""/>
					</a>
				</Slide>
			</Slideshow>

		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default SlideShowContainer;