import trimText from './trim-text';

describe('trim text', () => {
	const longString = `
		Integer congue purus velit, imperdiet dignissim neque imperdiet ut. Sed
		pretium, purus vel facilisis convallis, quam orci molestie diam, sit amet
		viverra sem odio a ligula. Suspendisse in fermentum odio. Proin finibus,
		sapien ut pretium aliquam, mi dolor mollis sem, a consectetur justo tortor
		ac erat. Donec eu aliquet elit, at viverra quam. Curabitur cursus interdum
		sem at eleifend. Aliquam erat volutpat. Praesent tristique tristique cursus.
	`.trim();

	const shortString = `
		Integer congue purus velit, imperdiet dignissim neque imperdiet ut. Sed
		pretium, purus vel facilisis convallis, quam orci molestie diam,
	`.trim();

	it('should return empty string if no value is given', () => {
		const trimmedText = trimText(null);
		expect(trimmedText).toEqual('');
	});

	it('should change the tail if given a tail passed in', () => {
		const trimmedText = trimText(longString, false, 10, ' ...');
		expect(trimmedText).toEqual('Integer co ...');
		expect(trimmedText).toHaveLength(10 + 4);
	});

	it('should not truncate text if the value is less than max', () => {
		const trimmedText = trimText(shortString, false, 1000);
		expect(trimmedText).toEqual(shortString);
	});

	it('should not cut off a word if wordwise is set', () => {
		const trimmedText = trimText(longString, true, 10, ' ...');
		expect(trimmedText).toEqual('Integer ...');
		expect(trimmedText.length).toBeLessThan(10 + 4);
	});
});
