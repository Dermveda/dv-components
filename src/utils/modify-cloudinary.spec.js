import modifyCloudinary from './modify-cloudinary';

describe('modify cloudinary urls', () => {
	const url = 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg';

	it('should insert objects into the cloudinary url', () => {
		const expectedResult = 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit,h_500,g_auto/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg';
		const options = {
			h: 500,
			g: 'auto'
		};

		const result = modifyCloudinary(url, options);
		expect(result).toEqual(expectedResult);
	});

	it('should overwrite settings if they exist', () => {
		const expectedResult = 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_280,c_limit,h_500,g_auto/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg';
		const options = {
			h: 500,
			g: 'auto',
			w: '280'
		};

		const result = modifyCloudinary(url, options);
		expect(result).toEqual(expectedResult);
	});
});
