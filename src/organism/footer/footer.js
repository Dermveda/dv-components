import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sys from 'system-components';
import { fontSize } from 'utils';
import { color, space, themeGet } from 'styled-system';
import { HiddenText, Icon } from 'atoms';
import { InlineForm } from 'molecules';

const makeFooterSectionTitle = sys({
	color: 'gray.medium',
	m: 0,
	mb: 2,
	fontWeight: 700,
	letterSpacing: '.03rem'
});

const FooterSectionTitle = styled(makeFooterSectionTitle).attrs({
	fontSize: [0, 1]
})`
	${fontSize};
	text-transform: uppercase;
`;

const FooterLinkContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const FooterLink = styled(Link).attrs({
	pb: 1,
	color: 'gray.dark'
})`
	${space};
	${color};
	font-weight: 500;
`;

const FooterExternalLink = styled.a.attrs({
	pb: 1,
	color: 'gray.dark'
})`
	${space};
	${color};
	font-weight: 500;
`;

const FooterLinkSectionContainer = styled.div.attrs({
	mx: [-2, -3, -4]
})`
	${space};
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
`;

const FooterLinkSection = styled.div.attrs({
	my: 3,
	mx: [2, 3, 4]
})`
	${space};
`;

const FooterContainer = styled.footer.attrs({
	bg: 'gray.light',
	p: [2, 4, 5]
})`
	${space};
	${color};
`;

const FooterBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;

	& > header {
		flex: 1;
	}

	& > div {
		flex: 2 800px;
	}
`;

const FooterHeader = styled.header.attrs({
	m: [3, 2]
})`
	max-width: 300px;
	min-width: 150px;
	${space};
`;

const FooterLegal = styled.div.attrs({
	fontSize: 0,
	color: 'grey.medium',
	pt: 4
})`
	${fontSize};
	${color};
	${space};
	margin-top: auto;
`;

const NoStyleLink = styled.a`
	display: inline-block;
	margin: 12px 4px;
	flex: 1 50px;

	& > svg {
		color: ${themeGet('colors.gray.medium', '#717171')} !important;
	}

	&:hover > svg {
		color: ${themeGet('colors.primary.main', '#717171')} !important;
	}
`;

const FlexBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-top: 12px;
`;

const ImageLink = styled(Link)`
	outline: none;
	text-decoration: none;
`;

const NewsLetterContainer = styled.div.attrs({ pt: 4 })`
	${space};
`;

export default class Footer extends Component {
	renderSocial = () => this.props.social.map(x => (
		<NoStyleLink key={x.name} href={x.href} target="_blank" rel="noopener noreferrer">
			<HiddenText>{x.text}</HiddenText>
			<Icon name={x.name} aria-hidden />
		</NoStyleLink>
	))

	render() {
		const { imageAttributes, footerLinks, newsLetter, renderLegal, social, success, loading } = this.props;
		return (
			<FooterContainer>
				<FooterBox>
					<FooterHeader>
						<ImageLink to="/">
							<img {...imageAttributes} />
						</ImageLink>
						<FlexBox>
							{this.renderSocial()}
						</FlexBox>
					</FooterHeader>
					<div>
						<FooterLinkSectionContainer>
							{footerLinks && (
								footerLinks.map((list, index) => (
									<FooterLinkSection key={index}>
										<FooterSectionTitle>{list.title}</FooterSectionTitle>
										<FooterLinkContainer>
											{list.links.map(item => item.to ? (
												<FooterLink to={item.to} key={item.to}>
													{item.text}
												</FooterLink>
											) : (
												<FooterExternalLink
													href={item.href}
													key={item.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.text}
												</FooterExternalLink>
											)
											)}
										</FooterLinkContainer>
									</FooterLinkSection>
								))
							)}
						</FooterLinkSectionContainer>
						{newsLetter && (
							<NewsLetterContainer>
								<FooterSectionTitle>{newsLetter.title}</FooterSectionTitle>
								<div style={{ paddingBottom: '8px' }}>{newsLetter.message}</div>
								<InlineForm
									onSubmit={newsLetter.onSubmit}
									buttonText={newsLetter.buttonAttributes.text}
									buttonAttributes={newsLetter.buttonAttributes}
									inputAttributes={newsLetter.inputAttributes}
									isPromise={newsLetter.isPromise}
									success={newsLetter.success}
									loading={newsLetter.loading}
								/>
							</NewsLetterContainer>
						)}
						{renderLegal && (
							<FooterLegal>
								{renderLegal()}
							</FooterLegal>
						)}
					</div>
				</FooterBox>
			</FooterContainer>
		);
	}
}
