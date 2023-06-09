import React from 'react';
import {Icon, IconIn, IconYT} from '../common/styled';

import {Footer, Link, LinkCont} from './styled';
import ic from '../../images/icons.svg';

const index = () => (
	<Footer>
		<LinkCont>
			<Link
				href='https://uk-ua.facebook.com'
				target='_blank'
				aria-label='Link to our facebook page'>
				<Icon>
					<use href={ic + '#facebook' } />
				</Icon>
			</Link>
			<Link
				href='https://twitter.com/home'
				target='_blank'
				aria-label='Link to our twitter page'>
				<Icon>
					<use href={ic + '#twitter' } />
				</Icon>
			</Link>
			<Link
				href='https://www.youtube.com'
				target='_blank'
				aria-label='Link to our youtube page'>
				<IconYT>
					<use href={ic + '#youtube' } />
				</IconYT>
			</Link>
			<Link
				href='https://www.linkedin.com'
				target='_blank'
				aria-label='Link to our linkedin page'>
				<IconIn>
					<use href={ic + '#linkedin' } />
				</IconIn>
			</Link>
		</LinkCont>
		<p>Copyright © 2021 - FinanceLedger</p>
	</Footer>
);

export default index;
