import PropTypes from 'prop-types';
import {
  compareToProp,
  fallbackProps,
  numberBetween,
  positiveNumber,
  objectFitStyles,
  smallWidgetPositions,
  largeWidgetPositions
} from '../../utils/validators';

export const propTypes = {
  images: PropTypes.array && fallbackProps(['children']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isRTL: PropTypes.bool.isRequired,
  isLoop: PropTypes.bool.isRequired,
  isMaximized: PropTypes.bool.isRequired,
  index: positiveNumber(true),
  shouldLazyLoad: PropTypes.bool.isRequired,
  canAutoPlay: PropTypes.bool.isRequired,
  isAutoPlaying: PropTypes.bool.isRequired,
  autoPlayInterval: positiveNumber(false),
  hasTransition: PropTypes.bool.isRequired,
  swipeThreshold: numberBetween(0, 1),
  swipeRollbackSpeed: positiveNumber(true),
  transitionSpeed: positiveNumber(true),
  transitionDurationLimit: positiveNumber(true),
  transitionDurationMin: positiveNumber(true),
  transitionDurationMax: compareToProp('>=', 'transitionDurationMin'),
  widgetsHasShadow: PropTypes.bool.isRequired,
  hasArrowButtons: PropTypes.bool.isRequired,
  hasMediaButton: smallWidgetPositions.isRequired,
  hasSizeButton: smallWidgetPositions.isRequired,
  hasDotButtons: largeWidgetPositions.isRequired,
  hasIndexBoard: smallWidgetPositions.isRequired,
  hasCaptions: largeWidgetPositions.isRequired,
  hasThumbnails: PropTypes.bool.isRequired,
  hasArrowButtonsAtMax: PropTypes.bool,
  hasMediaButtonAtMax: smallWidgetPositions,
  hasSizeButtonAtMax: smallWidgetPositions,
  hasDotButtonsAtMax: largeWidgetPositions,
  hasIndexBoardAtMax: smallWidgetPositions,
  hasCaptionsAtMax: largeWidgetPositions,
  hasThumbnailsAtMax: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  playIcon: PropTypes.node,
  pauseIcon: PropTypes.node,
  minIcon: PropTypes.node,
  maxIcon: PropTypes.node,
  activeIcon: PropTypes.node,
  passiveIcon: PropTypes.node,
  shouldSwipeOnMouse: PropTypes.bool.isRequired,
  shouldMaximizeOnClick: PropTypes.bool.isRequired,
  shouldMinimizeOnClick: PropTypes.bool.isRequired,
  shouldMinimizeOnSwipeDown: PropTypes.bool.isRequired,
  onIndexChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  objectFit: objectFitStyles.isRequired,
  objectFitAtMax: objectFitStyles.isRequired
};

export const defaultProps = {
  index: 0,
  isRTL: false,
  isLoop: true,
  isMaximized: false,
  shouldLazyLoad: true,
  canAutoPlay: true,
  isAutoPlaying: false,
  autoPlayInterval: 5000, // ms
  hasTransition: true,
  swipeThreshold: 0.1, // * 100%
  swipeRollbackSpeed: 0.1, // px/ms
  transitionSpeed: 1, // px/ms
  transitionDurationLimit: 1000, // ms
  widgetsHasShadow: false,
  hasArrowButtons: true,
  hasMediaButton: 'topLeft',
  hasSizeButton: 'topRight',
  hasDotButtons: false,
  hasIndexBoard: 'topCenter',
  hasCaptions: false,
  hasThumbnails: true,
  shouldSwipeOnMouse: true,
  shouldMaximizeOnClick: false,
  shouldMinimizeOnClick: false,
  shouldMinimizeOnSwipeDown: true,
  onIndexChange: () => {},
  objectFit: 'cover',
  objectFitAtMax: 'contain'
};
