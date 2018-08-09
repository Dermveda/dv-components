import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableContainer, TableCell, TableRow } from 'atoms';
import { ExpandingTableRow } from 'molecules';

export default class ExpandingTable extends Component {
	static propTypes = {
		headData: PropTypes.array,
		headRowAttributes: PropTypes.object,
		headCellAttributes: PropTypes.object,
		bodyRowAttributes: PropTypes.object,
		bodyCellAttributes: PropTypes.object,
		bodyData: PropTypes.arrayOf(
			PropTypes.shape({
				rowData: PropTypes.array,
				details: PropTypes.node
			})
		)
	};

	render() {
		const { headData, headRowAttributes, headCellAttributes, bodyRowAttributes, bodyCellAttributes, bodyData, ...attrs } = this.props;
		return (
			<TableContainer {...attrs}>
				<TableRow {...headRowAttributes} bg="gray.light" textTransform="uppercase" fontWeight="700">
					{headData.map((data, index) => (
						<TableCell key={`table-head-${index}`} {...headCellAttributes}>
							{data}
						</TableCell>
					))}
				</TableRow>
				{bodyData.map((row, index) => (
					<ExpandingTableRow
						row={row}
						rowAttributes={bodyRowAttributes}
						cellAttributes={bodyCellAttributes}
						key={`expanding-row-${index}`}
					/>
				))}
			</TableContainer>
		);
	}
}
