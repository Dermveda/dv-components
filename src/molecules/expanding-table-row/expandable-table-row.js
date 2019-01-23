import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import { TableRow, TableCell, ChevronDown, Box } from 'atoms';
import { SlideDown } from 'animations';

const ExpandingBox = styled.div.attrs({
	px: [2, 3, 3],
	py: props => !props.isHidden && [1, 2, 2],
	fontSize: [1, 2]
})`
	${SlideDown};
	${space};
	${fontSize};
`;

export default class ExpandableTableRow extends Component {
	static propTypes = {
		rowAttributes: PropTypes.object,
		cellAttributes: PropTypes.object,
		expandingBoxAttributes: PropTypes.object,
		row: PropTypes.shape({
			rowData: PropTypes.arrayOf(PropTypes.object),
			details: PropTypes.node,
			scrollOnClick: PropTypes.bool,
			scrollTop: PropTypes.int
		}),
		initExpanded: PropTypes.bool
	};

	state = {
		isExpanded: false
	};

	constructor(props) {
		super(props);
		if (this.props.initExpanded) this.state.isExpanded = this.props.initExpanded;
		this.rowRef = React.createRef();
	}

	scrollOnClick = () => {
		window.scrollTo({
			top: this.rowRef.offsetTop - this.props.row.scrollTop,
			behavior: 'smooth'
		});
	};

	render() {
		const { row, rowAttributes, cellAttributes, expandingBoxAttributes } = this.props;
		if (!row) return;
		return (
			<React.Fragment>
				<Box borderBottom="1px solid #F7F7F7" borderTop="1px solid #F7F7F7">
					<TableRow
						{...rowAttributes}
						borderBottom={this.state.isExpanded ? '1px solid #F7F7F7' : null}
						innerRef={ref => (this.rowRef = ref)}
						onClick={() => {
							this.setState({ isExpanded: !this.state.isExpanded });
							if (row.scrollOnClick) this.scrollOnClick();
						}}>
						{row.rowData.map((data = {}, index) => (
							<TableCell key={`row-data-${index}`} {...cellAttributes} center={data.center}>
								{data.content}
							</TableCell>
						))}
						<TableCell {...cellAttributes} key="row-data-arrow" justifyContent="flex-end">
							{row.details ? <ChevronDown isOpen={this.state.isExpanded} p={1} iconSize="xs" /> : null}
						</TableCell>
					</TableRow>
					{row.details ? (
						<ExpandingBox isHidden={!this.state.isExpanded} {...rowAttributes} {...expandingBoxAttributes}>
							{row.details}
						</ExpandingBox>
					) : null}
				</Box>
			</React.Fragment>
		);
	}
}
