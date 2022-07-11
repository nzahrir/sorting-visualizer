import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider.jsx";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider.jsx";
import "./RangeSlider.css";

const RangeSlider = ({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) => {
  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={numberOfArrayBars}
          onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={animationSpeed}
          onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
        />
      </div>
    </div>
  );
};
export default RangeSlider;
