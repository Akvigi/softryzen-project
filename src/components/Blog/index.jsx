import React from 'react';
import PropTypes from 'prop-types';
import {Blog, TextContainer, Img, Container, BtnBlog} from './styled';
import {Head, SecTextBot, SecTextTop} from 'components/common/styled';
import jsrc from '../../images/home/blog.jpg';
import jsrcx2 from '../../images/home/blog@2x.jpg';
import wsrc from '../../images/home/blog.webp';
import wsrcx2 from '../../images/home/blog@2x.webp';

const BlogS = ({refTo}) => (
	<Blog ref={refTo}>
		<Container>
			<picture>
				<source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
				<source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
				<Img src={jsrc} alt='coffee`s with books' loading='lazy'/>
			</picture>
			<TextContainer>
				<SecTextTop>April 16 2020</SecTextTop>
				<Head>Blog Post One</Head>
				<SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
				<BtnBlog>Read Our Blog</BtnBlog>
			</TextContainer>
		</Container>
	</Blog>
);

BlogS.propTypes = {
	refTo: PropTypes.object.isRequired,
};

export default BlogS;
