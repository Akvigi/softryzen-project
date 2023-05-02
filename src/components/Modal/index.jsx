import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import {AltCont, Close, Icon, Img, LeftCont, ModalWindow, Next, Overlay, PlacehCont, Placeholder, Prev, RightCont} from './styled';

import ic from '../../images/icons.svg';
import placeholder from '../../images/gallery/loading.gif';
import close from '../../images/gallery/close.png';
import data from 'components/Ourwork/data';

const modal = document.querySelector('#portal');

const Modal = ({jsrc, jsrcx2, wsrc, wsrcx2, alt, unshowModal, indexData, getPrevios, getNext}) => {
	const [loading, setLoading] = useState(true);
	const esc = useCallback(
		e => {
			if (e.code === 'Escape') {
				unshowModal();
			}
		},
		[unshowModal],
	);
	const onPrev = () => {
		getPrevios();
		setLoading(true);
	};

	const onNext = () => {
		getNext();
		setLoading(true);
	};

	useEffect(() => {
		window.addEventListener('keydown', esc);

		return () => {
			window.removeEventListener('keydown', esc);
		};
	}, [esc]);

	const onBackClick = e => {
		if (e.currentTarget === e.target) {
			unshowModal();
		}
	};

	return createPortal(
		<Overlay onClick = {onBackClick}>
			<ModalWindow>
				{indexData < data.length - 1 && <LeftCont>
					<Prev onClick={onNext}>
						<Icon>
							<use href={ic + '#left'} />
						</Icon>
					</Prev>
				</LeftCont>}
				<picture>
					<source srcSet={`${wsrc} 1x`} type='image/webp' media='(max-width: 640px)'/>
					<source srcSet={`${wsrcx2} 2x`} type='image/webp' />
					<source srcSet={`${jsrc} 1x`} type='image/jpg' media='(max-width: 640px)'/>
					<source srcSet={`${jsrcx2} 2x`} type='image/jpg' />
					<Img
						src={jsrc}
						alt={alt}
						style={loading ? {opacity: 0, border: 'none', position: 'absolute'} : {opacity: 1}}
						onLoad={() => setLoading(false)} />
				</picture>
				{!loading && <AltCont><p>{alt}</p><p>Page: {indexData + 1} of 6</p></AltCont>}
				{indexData > 0 && <RightCont>
					<Next onClick={onPrev}>
						<Icon>
							<use href={ic + '#right'} />
						</Icon>
					</Next>
				</RightCont>}
				{!loading && <Close onClick={unshowModal}>
					<img src={close} alt='close'/>
				</Close>}
			</ModalWindow>
			{loading && <PlacehCont><Placeholder src={placeholder} alt='Загрузка...' /></PlacehCont>}
		</Overlay>, modal,
	);
};

Modal.propTypes = {
	jsrc: PropTypes.string.isRequired,
	jsrcx2: PropTypes.string,
	wsrc: PropTypes.string,
	wsrcx2: PropTypes.string,
	alt: PropTypes.string.isRequired,
	indexData: PropTypes.number.isRequired,
	getPrevios: PropTypes.func.isRequired,
	getNext: PropTypes.func.isRequired,
	unshowModal: PropTypes.func.isRequired,
};
export default Modal;
