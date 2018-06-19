import React, { Component } from 'react';
import styled from 'styled-components';
import { Dropdown, MegaMenuItem, MegaMenuIcon } from 'atoms';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import { source, target } from 'react-aim';


const Button = styled.button`
	padding: 16 24px;
	font-size: 1.4rem;
	margin: 0 16px;
`;

const Testeroo = target()(styled.div`
	position: absolute;
	top: 0;
	left: 100%;
	background: #f7f7f7;
`);

class HoverNav extends Component {
	state = {
		displayDropdown: false
	}

	render() {
		const { displayDropdown } = this.state;
		return (
			<li style={{ listStyleType: 'none' }}>
				<Button
					href="#"
					// onClick={this.toggleDropdown}
					role="menu"
				>
					tester
				</Button>
				<div style={{ position: 'relative' }}>
					{
						displayDropdown && (
							<Dropdown
								is="ul"
								boxShadow={2}
								display={true}
							>
								<MegaMenuItem title="Discipline">
									<Testeroo>
										something
										something
										something
										something
										something
										something
									</Testeroo>
								</MegaMenuItem>
								<MegaMenuItem title="Discipline">
									<Testeroo>
										testerooo
										testerooo
										testerooo
										testerooo
										testerooo
									</Testeroo>
								</MegaMenuItem>
							</Dropdown>
						)
					}
				</div>


			</li>
		);
	}
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(HoverNav);
