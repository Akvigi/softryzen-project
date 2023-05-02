import React, {useCallback, useEffect, useState} from 'react';
import logo from '../../images/icons.svg';
import {Link, LogoCont, GrText, LogoImg, Header, Container} from './styled';
import {throttle} from 'lodash';
import PropTypes from 'prop-types';

const HeaderSect = ({goToHero, goToAbout, goToWork, goToBlog, goToContact}) => {
	const [back, setBack] = useState(window.scrollY > 70);

	const onScroll = useCallback(
		() => {
			const userWidth = window.innerWidth;
			const minimumPxToScroll = userWidth < 767 ? 120 : 70;
			if (window.scrollY > minimumPxToScroll) {
				setBack(true);
			} else if (window.scrollY < minimumPxToScroll) {
				setBack(false);
			}
		},
		[],
	);

	useEffect(() => {
		window.addEventListener('scroll', throttle(onScroll, 500));
	}, [onScroll]);

	return (
		<Header style={back ? {background: 'black', opacity: 0.8} : {background: 'transparent'}}>
			<Container>
				<LogoCont>
					<LogoImg >
						<use href={logo + '#book'}/>
					</LogoImg>

					<GrText>Finance</GrText> Ledger
				</LogoCont>
				<div>
					<Link onClick={goToHero} href='#home'>Home</Link>
					<Link onClick={goToAbout} href='#aboutus'>About</Link>
					<Link onClick={goToWork} href='#cases'>Cases</Link>
					<Link onClick={goToBlog} href='#blog'>Blog</Link>
					<Link onClick={goToContact} href='#contact'>Contact</Link>
				</div>
			</Container>
		</Header>
	);
};

HeaderSect.propTypes = {
	goToHero: PropTypes.func.isRequired,
	goToWork: PropTypes.func.isRequired,
	goToAbout: PropTypes.func.isRequired,
	goToBlog: PropTypes.func.isRequired,
	goToContact: PropTypes.func.isRequired,
};

export default HeaderSect;
