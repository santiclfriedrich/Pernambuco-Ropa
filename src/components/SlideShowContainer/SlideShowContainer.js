import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../SlideShow/SlideShow'
import styled from 'styled-components';
import cargopants from '../../img/cargo-pants.png';
import gorramarron from '../../img/gorra-marron.png';
import remerablack from '../../img/remera-black.png';


const SlideShowContainer = () => {
	return (
		<main>
			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={cargopants} alt=""/>
					</a>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={gorramarron} alt=""/>
					</a>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={remerablack} alt=""/>
					</a>
				</Slide>
			</Slideshow>

			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={cargopants} alt=""/>
					</a>
	
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={gorramarron} alt=""/>
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