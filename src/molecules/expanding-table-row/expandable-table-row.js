import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import { TableRow, TableCell, ChevronDown } from 'atoms';
import { SlideDown } from 'animations';

const ExpandingBox = styled.div.attrs({
	px: [2, 3, 3],
	fontSize: 1
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
		row: PropTypes.arrayOf(
			PropTypes.shape({
				rowData: PropTypes.array,
				details: PropTypes.node
			})
		)
	};

	state = {
		isExpanded: false
	};

	render() {
		const { row, rowAttributes, cellAttributes, expandingBoxAttributes } = this.props;
		if (!row) return;
		let activeStyle;
		this.state.isExpanded ? (activeStyle = { style: { fontWeight: 600 } }) : null;
		const secondColStyles = { justifyContent: 'center' };
		return (
			<React.Fragment>
				<TableRow {...rowAttributes} borderTop="1px solid #F7F7F7">
					{row.rowData.map((data, index) => {
						if (index === 1)
							return (
								<TableCell key={`row-data-${index}`} {...cellAttributes} {...activeStyle} {...secondColStyles}>
									{data}
								</TableCell>
							);
						else
							return (
								<TableCell key={`row-data-${index}`} {...cellAttributes} {...activeStyle}>
									{data}
								</TableCell>
							);
					})}
					<TableCell {...cellAttributes} {...activeStyle} justifyContent="flex-end">
						{row.details ? (
							<ChevronDown
								isOpen={this.state.isExpanded}
								onClick={e => this.setState({ isExpanded: !this.state.isExpanded })}
								p={1}
								iconSize="sm"
							/>
						) : null}
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
