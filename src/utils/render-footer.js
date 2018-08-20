const pluckProps = (footerProps, props) =>
	Object.keys(props)
		.filter(x => footerProps.includes(x))
		.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {});

const renderFooter = (footerProps, article, renderFooter) => {
	const renderProps = pluckProps(footerProps, article);
	return renderFooter(renderProps);
};

export default renderFooter;
