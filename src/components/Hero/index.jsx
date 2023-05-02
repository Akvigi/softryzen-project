import React from 'react';
import PropTypes from 'prop-types';
import {Btn, Container, Head, HeroCont, Icon, SecText} from './styled';
import ic from '../../images/icons.svg';

const Hero = ({refTo}) => (
	<HeroCont ref={refTo}>
		<Container>
			<Head>The Sky Is The Limit</Head>
			<SecText>We provide world class financial assistance</SecText>
			<Btn>
				<Icon>
					<use href={ic + '#angle'}/>
				</Icon>
          Read More
			</Btn>
		</Container>
	</HeroCont>
);

Hero.propTypes = {
	refTo: PropTypes.object.isRequired,
};

export default Hero;
