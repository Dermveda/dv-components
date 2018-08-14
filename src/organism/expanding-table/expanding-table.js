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
		bodyBoxAttributes: PropTypes.object,
		bodyData: PropTypes.arrayOf(
			PropTypes.shape({
				rowData: PropTypes.array,
				details: PropTypes.node
			})
		)
	};

	render() {
		const {
			headData,
			headRowAttributes,
			headCellAttributes,
			bodyRowAttributes,
			bodyCellAttributes,
			bodyBoxAttributes,
			bodyData,
			...attrs
		} = this.props;
		return (
			<TableContainer {...attrs}>
				<TableRow {...headRowAttributes} bg="gray.light" textTransform="uppercase" fontWeight="700" py={[3, 2]}>
					{headData.map((data, index) => {
						if (index === 1)
							return (
								<TableCell key={`table-head-${index}`} {...headCellAttributes} headCell justifyContent="center">
									{data}
								</TableCell>
							);
						else
							return (
								<TableCell key={`table-head-${index}`} {...headCellAttributes} headCell>
									{data}
								</TableCell>
							);
					})}
				</TableRow>
				{bodyData.map((row, index) => (
					<ExpandingTableRow
						row={row}
						rowAttributes={bodyRowAttributes}
						cellAttributes={bodyCellAttributes}
						expandingBoxAttributes={bodyBoxAttributes}
						key={`expanding-row-${index}`}
					/>
				))}
			</TableContainer>
		);
	}
}
