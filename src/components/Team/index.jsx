import React from 'react';
import {Img, Item, Job, Link, Name, Overlay, Team, TeamGallery, TextCont, TopSecText, Wrapp} from './styled';
import {Head} from 'components/common/styled';
import {Icon, IconIn, IconYT} from '../common/styled';

import ic from '../../images/icons.svg';
import data from './data';

const index = () => (
	<Team>
		<TextCont>
			<TopSecText>Who we are</TopSecText>
			<Head>Our Professional Team</Head>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
		</TextCont>
		<TeamGallery>
			{data.map(({jsrc, jsrcx2, wsrc, wsrcx2, name, job}) => (
				<Item key={name}>
					<Wrapp>
						<picture>
							<source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
							<source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
							<Img src={jsrc} alt={job} loading='lazy'/>
						</picture>
						<Overlay>
							<Link href='https://uk-ua.facebook.com' target='_blank'>
								<Icon>
									<use href={ic + '#facebook' } />
								</Icon>
							</Link>
							<Link href='https://twitter.com/home' target='_blank'>
								<Icon>
									<use href={ic + '#twitter' } />
								</Icon>
							</Link>
							<Link href='https://www.youtube.com' target='_blank'>
								<IconYT>
									<use href={ic + '#youtube' } />
								</IconYT>
							</Link>
							<Link href='https://www.linkedin.com' target='_blank'>
								<IconIn>
									<use href={ic + '#linkedin' } />
								</IconIn>
							</Link>
						</Overlay>
					</Wrapp>
					<Name>{name}</Name>
					<Job>{job}</Job>

				</Item>))}
		</TeamGallery>
	</Team>
);

export default index;
