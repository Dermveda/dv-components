import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import css from './styles';

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thumbPosition: 0,
			isDragging: false,
			isLabelClick: false,
			isUpdatedInitial: false,
			shift: null,
			trackPosition: {},
			thumbWidth: 0,
			leftFill: 0,
			rightFill: null,
			segmentWidth: null,
			safeRange: null,
			index: null,
			currentLabel: null
		};
		this.onPress = this.onPress.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onRelease = this.onRelease.bind(this);
		this.onLabelChange = this.onLabelChange.bind(this);
	}
	componentDidMount() {
		this.getDimensions();
		window.addEventListener('resize', () => this.getDimensions());
	}
	componentDidUpdate(props, state) {
		if (this.state.isDragging && !state.isDragging) {
			document.addEventListener('mousemove', this.onMove);
			document.addEventListener('touchmove', this.onMove);
			document.addEventListener('mouseup', this.onRelease);
			document.addEventListener('touchend', this.onRelease);
		} else if (!this.state.isDragging && state.isDragging) {
			document.removeEventListener('mousemove', this.onMove);
			document.removeEventListener('touchmove', this.onMove);
			document.removeEventListener('mouseup', this.onRelease);
			document.removeEventListener('touchend', this.onRelease);
		}
	};
	getDimensions() {
		let trackElement = document.getElementById(this.props.uniqueId + '_track'),
			thumbElement = document.getElementById(this.props.uniqueId + '_thumb');
		this.setState({
			trackPosition: {
				start: this.getCoordinates(trackElement).left,
				end: this.getCoordinates(trackElement).left + (trackElement ? trackElement.offsetWidth : 0)
			},
			thumbWidth: thumbElement ? thumbElement.offsetWidth : 0
		}, () => this.calculateSegments());
	}
	getCoordinates(element) {
		if (!element) return { left: 0 };
		if (element.touches && element.touches.length > 0 && element.touches[0]) {
			return {
				left: element.touches[0].clientX
			};
		}
		else {
			let box = (element).getBoundingClientRect();
			return {
				left: box.left + pageXOffset
			};
		}
	};
	calculateSegments() {
		let safeRange = 2;
		if (this.props.range && this.props.range < 2)
			console.warn('Error: `range` cannot be less than 2, falling back to default 2.');// eslint-disable-line
		else if (this.props.range)
			safeRange = this.props.range;
		else if (this.props.data && this.props.data.length > 2)
			safeRange = this.props.data.length;
		let segmentWidth = ((this.state.trackPosition.end - this.state.trackPosition.start - this.state.thumbWidth) / (safeRange - 1));
		if (!this.state.isUpdatedInitial) {
			if (typeof this.props.initial === 'number') {
				if (this.props.initial > 0 && this.props.initial <= this.props.range)
					this.setState({ index: this.props.initial, isUpdatedInitial: true });
			}
			else if (typeof this.props.initial === 'object') {
				let index = _.findIndex(this.props.data, this.props.initial);
				if (index >= 0 && index < this.props.data.length)
					this.setState({ index: index + 1, isUpdatedInitial: true });
			}
		}
		this.setState({ segmentWidth, safeRange }, () => {
			let fill = this.state.segmentWidth * (this.state.index ? this.state.index - 1 : 0);
			this.setState({
				thumbPosition: fill,
				leftFill: fill,
				rightFill: this.state.trackPosition.end - this.state.trackPosition.start - fill
			})
		});
	}
	onPress(event) {
		if (this.props.isDisabled) return;
		let thumbPosition = this.getCoordinates(event.target),
			pressPosition = event.pageX || event.changedTouches[0].pageX;
		this.setState({
			isDragging: true,
			shift: (event.target.className === css.thumb ? (pressPosition - thumbPosition.left) : (this.state.thumbWidth / 2))
		}, () => {
			this.onMove(null, pressPosition);
		});
		event.stopPropagation();
		event.preventDefault();
	};
	onRelease(event) {
		this.setState({ isDragging: false });
		if (this.props.range)
			this.props.onIndexChange(this.state.index);
		else if (this.props.data)
			this.props.onLabelChange(this.props.data[this.state.index - 1]);
		event.stopPropagation();
		event.preventDefault();
	};
	onMove(event, pressPosition, isRelative) {
		if (this.props.isDisabled || (!this.state.isDragging && !this.state.isLabelClick)) return;
		let offset = this.state.thumbWidth + (isRelative ? 0 : this.state.trackPosition.start),
			newPosition = (!event ? pressPosition : (event.pageX || (event.changedTouches ? event.changedTouches[0].pageX : 0))) - offset,
			rightEdge = this.state.trackPosition.end - this.state.trackPosition.start - this.state.thumbWidth;
		if (newPosition < 0)
			newPosition = 0;
		if (newPosition > rightEdge)
			newPosition = rightEdge;
		if (this.props.isSticky)
			newPosition = (Math.round(newPosition / this.state.segmentWidth) * this.state.segmentWidth);
		this.setState({
			thumbPosition: newPosition,
			index: Math.round(newPosition / this.state.segmentWidth) + 1,
			leftFill: newPosition,
			rightFill: (this.state.trackPosition.end - this.state.trackPosition.start - newPosition),
			isLabelClick: false
		});
		if (event) {
			event.stopPropagation();
			event.preventDefault();
		}
	};
	onLabelChange(index) {
		if (this.props.range)
			this.props.onIndexChange(index + 1);
		else if (this.props.data)
			this.props.onLabelChange(this.props.data[index]);
		this.setState({ isLabelClick: true },
			() => this.onMove(null, index * this.state.segmentWidth, true)
		);
	}
	transformLabel(index) {
		if (this.props.data) {
			if (index > 0 && index < this.state.safeRange - 1) // Labels in the middle
				return 'translateX(-40%)';
			else if (index === this.state.safeRange - 1) // Label at the end
				return 'translateX(-60%)';
			else return 'none';
		}
	}
	render() {
		if (!this.props.uniqueId)
			return (<div>No unique ID provided!</div>);
		else if (!(this.props.data || this.props.range)
			|| ((this.props.data && this.props.data.length < 2)
				|| (this.props.range && this.props.range.length < 2)))
			return (<div>Error: No data or range provided; range should be 2 or more, same with labels.</div>);
		else {
			let labels = [];
			for (let i = 0; i < this.state.safeRange; i++)
				labels.push(
					<span key={i}
						  style={{
							  ...css.label,
							  ...{ left: i * this.state.segmentWidth + (this.state.safeRange === i + 1 ? 0 : 4) },
							  ...{ transform: this.transformLabel(i) }
						  }}
						  onClick={() => this.onLabelChange(i)}>
                    {(this.props.data ? this.props.data[i].label : i + 1)}
                </span>
				);
			return (
				<div style={css.wrapper}>
					<div style={css.slider} id={this.props.uniqueId + '_track'}>
						<div style={css.track}
							 onTouchStart={(event) => this.onPress(event)}
							 onMouseDown={(event) => this.onPress(event)}>
							<div style={{
								...css.left,
								...(this.props.isDisabled ? css.leftDisabled : null),
								...{ width: (((this.state.leftFill || 0)) + 'px') }
							}}/>
							<div style={{
								...css.right,
								...{ width: (this.state.rightFill ? (this.state.rightFill || 1) + 'px' : '100%') }
							}}/>
							<div id={this.props.uniqueId + '_thumb'}
								 style={{
									 ...css.thumb,
									 ...(this.state.isDragging ? css.thumbActive : null),
									 ...(this.props.isDisabled ? css.thumbDisabled : null),
									 ...{ left: (((this.state.thumbPosition || 0)) + 'px') }
								 }}/>
						</div>
						{!this.props.isHiddenLabels ? labels : null}
					</div>
					{this.props.isSideLabel && this.state.index ?
						<div style={css.sideLabel}>
							{(this.props.data ? this.props.data[this.state.index - 1].label : this.state.index)}
						</div>
						: null}
				</div>
			)
		}
	}
}
Slider.defaultProps = {
	isSticky: true
};
Slider.propTypes = {
	uniqueId: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool,
	isSticky: PropTypes.bool,
	isHiddenLabels: PropTypes.bool,
	isSideLabel: PropTypes.bool,
	initial: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	range: PropTypes.number,
	onIndexChange: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object),
	onLabelChange: PropTypes.func
};
export default Slider;