import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import './Slider.css';

export const Slider = ({
  type = 'continuous',
  min = 0,
  max = 100,
  step = 1,
  value = type === 'range' ? [min, max] : min,
  onChange,
  thumbSize = 16,
  showTicks = false,
  showTooltip = false,
  thumbStyle = 'default',
  ...props
}) => {
  const renderThumb = (props, state) => {
    const thumbClass = `slider-thumb ${thumbStyle}`.trim(); 
  
    return (
      <div
        {...props}
        className={thumbClass} 
        style={{
          ...props.style,
          width: `${thumbSize}px`,
          height: `${thumbSize}px`,
        }}
      >
        <div className={showTooltip ? "tooltip-demo" : "tooltip"}>
          <main>
            {state.valueNow}
            <span className="triangle"></span>
          </main>
        </div>
      </div>
    );
  };
  
  const renderTrack = (props, state) => {
    const trackClass = `track ${state.index === 0 ? "active-track" : ""}`.trim();
  
    return (
      <div {...props} className={trackClass}>
        {type === "discrete" && showTicks && (
          <div className="ticks">
            {Array.from({ length: (max - min) / step + 1 }).map((_, i) => (
              <div key={i} className="tick-mark" />
            ))}
          </div>
        )}
      </div>
    );
  };
  


  return (
    <div className="slider-wrapper" {...props}>
      <ReactSlider
        className={type === 'range' ? 'range-slider' : 'slider-input'}
        thumbClassName="slider-thumb"
        trackClassName={type === 'range' ? 'range-track' : 'track'}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        ariaLabel={type === 'range' ? ['Lower thumb', 'Upper thumb'] : 'Slider thumb'}
        withTracks={true}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
      {/* <p className="slider-value">
        {type === 'range' ? `Range: ${value[0]} - ${value[1]}` : `Value: ${value}`}
      </p> */}
    </div>
  );
};

Slider.propTypes = {
  type: PropTypes.oneOf(['continuous', 'discrete', 'range']),
  thumbStyle: PropTypes.oneOf(['default', 'hover', 'focus']),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func.isRequired,
  thumbSize: PropTypes.number,
  showTicks: PropTypes.bool,
  showTooltip: PropTypes.bool,
};
