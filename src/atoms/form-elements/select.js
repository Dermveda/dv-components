import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import { space, themeGet } from 'styled-system';
import { Icon, ChevronDown } from 'atoms';

const lightGray = themeGet('colors.gray.light', '#f7f7f7');
const mediumGray = themeGet('colors.gray.medium', '#717171');
const darkGray = themeGet('colors.gray.dark', '#2b2b2b');

const ClearIcon = styled(Icon).attrs({
	p: 2,
	mx: 2,
	my: 1
})`
	${space};
	display: flex;
	color: ${mediumGray};
	border-radius: 100%;
	overflow: visible !important;
    box-sizing: content-box;

	&:hover {
		background-color: ${lightGray};
		color: ${darkGray};
	}
`;

const ClearIndicator = ({ innerProps: { ref, ...restInnerProps } }) => (
	<div {...restInnerProps} ref={ref}>
		<ClearIcon name='close' iconSize='sm' />
	</div>
);

ClearIndicator.propTypes = { innerProps: PropTypes.object };

const DropdownIndicator = ({ innerProps: { ref, ...restInnerProps }, selectProps: { menuIsOpen } }) => (
	<div {...restInnerProps} ref={ref}>
		<ChevronDown iconSize="sm" isOpen={menuIsOpen} />
	</div>
);

DropdownIndicator.propTypes = {
	innerProps: PropTypes.object,
	selectProps: PropTypes.shape({ menuIsOpen: PropTypes.bool })
};

const MultiValueIcon = styled(Icon)`
	overflow: visible !important;
	box-sizing: content-box;
`;

const MultiValueRemove = ({ innerRef, ...props }) => (
	<div ref={innerRef} {...props}>
		<MultiValueIcon name='close' iconSize='xs' />
	</div>
);

MultiValueRemove.propTypes = { innerRef: PropTypes.object };

const Select = ({ options, gray, ...attrs }) => {
	const styles = {
		control: base => ({
			...base,
			background: gray ? lightGray : 'white',
			borderRadius: 0,
			color: mediumGray,
			outline: 0,
			boxShadow: 'none',
			borderColor: gray ? lightGray : mediumGray
		}),
		container: base => ({
			...base,
			outline: 0,
			borderColor: gray ? lightGray : mediumGray
		}),
		multiValue: base => ({
			...base,
			fontSize: '95%',
			lineHeight: 1,
			padding: '8px',
			background: lightGray
		}),
		multiValueLabel: base => ({
			...base,
			fontSize: '95%',
			color: mediumGray
		}),
		input: base => ({
			...base,
			color: mediumGray
		}),
		multiValueRemove: (base, state) => ({
			...base,
			background: state.isHovered ? '#f7f7f7' : 'transparent'
		})
	};

	return (
		<ReactSelect
			styles={styles}
			components={{ ClearIndicator, DropdownIndicator, MultiValueRemove }}
			options={options}
			{...attrs}
		/>
	);
};

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	})).isRequired,
	gray: PropTypes.boolean
};

Select.defaultProps = {
	gray: false
};

export default Select;
