const pluckProps = (footerProps, props) =>
	Object.keys(props)
		.filter(x => footerProps.includes(x))
		.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {});

const renderFooter = (footerProps, article, buildFooter) => {
	const renderProps = pluckProps(footerProps, article);
	return buildFooter(renderProps);
};

export default renderFooter;
