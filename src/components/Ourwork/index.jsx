import React from 'react';
import PropTypes from 'prop-types';
import {Head} from 'components/common/styled';
import {Gallery, Img, Item, OurWork, TextCont, TopText} from './styled';
import data from './data';

const OWork = ({refTo, setModal}) => (
	<OurWork ref={refTo}>
		<TextCont>
			<TopText>This is what we do</TopText>
			<Head>Business Cases</Head>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
		</TextCont>
		<Gallery>
			{data.map(({jsrc, jsrcx2, wsrc, wsrcx2, alt}, index) => <Item key={alt}>
				<picture onClick={() => setModal({jsrc, jsrcx2, wsrc, wsrcx2, alt, index})}>
					<source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
					<source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
					<Img src={jsrc} alt={alt} loading='lazy'/>
				</picture>
			</Item>)}
		</Gallery>
	</OurWork>
);

OWork.propTypes = {
	refTo: PropTypes.object.isRequired,
	setModal: PropTypes.func.isRequired,
};

export default OWork;
