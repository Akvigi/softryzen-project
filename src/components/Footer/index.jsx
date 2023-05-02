import React from 'react';

import {Footer, Icon, IconIn, IconYT, Link, LinkCont} from './styled';
import ic from '../../images/icons.svg';

const index = () => (
	<Footer>
		<LinkCont>
			<Link href='https://uk-ua.facebook.com'>
				<Icon>
					<use href={ic + '#facebook' } />
				</Icon>
			</Link>
			<Link href='https://twitter.com/home'>
				<Icon>
					<use href={ic + '#twitter' } />
				</Icon>
			</Link>
			<Link href='https://www.youtube.com'>
				<IconYT>
					<use href={ic + '#youtube' } />
				</IconYT>
			</Link>
			<Link href='https://www.linkedin.com'>
				<IconIn>
					<use href={ic + '#linkedin' } />
				</IconIn>
			</Link>
		</LinkCont>
		<p>Copyright © 2021 - FinanceLedger</p>
	</Footer>
);

export default index;
