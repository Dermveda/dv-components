import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import { TableRow, TableCell, ChevronDown } from 'atoms';
import { SlideDown } from 'animations';

const ExpandingBox = styled.div.attrs({
	px: [2, 3, 3],
	fontSize: [1, 2]
})`
	${SlideDown};
	${space};
	${fontSize};
`;

const Box = styled.div.attrs({
	py: [1, 2, 2]
})`
	${space};
`;

export default class ExpandableTableRow extends Component {
	static propTypes = {
		rowAttributes: PropTypes.object,
		cellAttributes: PropTypes.object,
		expandingBoxAttributes: PropTypes.object,
		row: PropTypes.shape({
			rowData: PropTypes.arrayOf(PropTypes.object),
			details: PropTypes.node
		}),
		initExpanded: PropTypes.bool
	};

	state = {
		isExpanded: false
	};

	constructor(props) {
		super(props);
		if (this.props.initExpanded) this.state.isExpanded = this.props.initExpanded;
	}

	render() {
		const { row, rowAttributes, cellAttributes, expandingBoxAttributes } = this.props;
		if (!row) return;
		return (
			<React.Fragment>
				<TableRow {...rowAttributes} borderBottom="1px solid #F7F7F7" onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
					{row.rowData.map((data = {}, index) => (
						<TableCell key={`row-data-${index}`} {...cellAttributes} center={data.center}>
							{data.content}
						</TableCell>
					))}
					<TableCell {...cellAttributes} key="row-data-arrow" justifyContent="flex-end">
						{row.details ? <ChevronDown isOpen={this.state.isExpanded} p={1} iconSize="sm" /> : null}
					</TableCell>
				</TableRow>
				{row.details ? (
					<ExpandingBox isHidden={!this.state.isExpanded} {...rowAttributes} {...expandingBoxAttributes}>
						<Box>{row.details}</Box>
					</ExpandingBox>
				) : null}
			</React.Fragment>
		);
	}
}
