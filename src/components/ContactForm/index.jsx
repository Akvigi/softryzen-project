import React, {useState} from 'react';
import {Btn, Container, Contact, Form, Head, Img, Input, Icon, InpCont} from './styled';
import PropTypes from 'prop-types';

import jsrc from '../../images/home/contact.jpg';
import jsrcx2 from '../../images/home/contact@2x.jpg';
import wsrc from '../../images/home/contact.webp';
import wsrcx2 from '../../images/home/contact@2x.webp';
import ic from '../../images/icons.svg';

import Notiflix from 'notiflix';

const ContactForm = ({refTo}) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState(false);

	const onEmChange = text => {
		setError(false);
		setEmail(text);
	};

	const validateEmail = em => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(em);
	};

	const resetForm = () => {
		setEmail('');
		setName('');
	};

	const submitForm = (e, n, em) => {
		e.preventDefault();
		resetForm();
		if (em === '' || em === null || em === undefined) {
			setError('This is a required field');
			return;
		}

		if (!validateEmail(em)) {
			setError('This is not a valid email');
			return;
		}

		Notiflix.Notify.success('We will contact you in future! Stay tuned!');
		console.log('email:', em, 'name:', n);
	};

	return (
		<Contact ref={refTo}>
			<Container>
				<picture>
					<source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
					<source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
					<Img src={jsrc} alt='coffee`s with books' loading='lazy'/>
				</picture>
				<Form onSubmit={e => submitForm(e, name, email)}>
					<Head>Request Callback</Head>
					<Input value={name}
						onChange={e => setName(e.currentTarget.value)}
						placeholder='Enter your name' />
					<InpCont>
						{error && <Icon>
							<use href={ic + '#worning'} />
						</Icon>}
						<Input value={email}
							type='email'
							style={error ? {border: '1px solid red'} : {}}
							onChange={e => onEmChange(e.currentTarget.value)}
							placeholder={error ? error : 'Enter email*'} />
					</InpCont>
					<Btn type='submit'>Send</Btn>
				</Form>
			</Container>
		</Contact>
	);
};

ContactForm.propTypes = {
	refTo: PropTypes.object.isRequired,
};

export default ContactForm;
