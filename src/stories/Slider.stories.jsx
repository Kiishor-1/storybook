import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'A Slider component supporting continuous, discrete, and range usage.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

/** Continuous Slider */
const ContinuousTemplate = (args) => {
  const [value, setValue] = useState(args.value || 50);

  return (
    <div style={{ width: '300px' }}>
      <Slider
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          action('onChange')(newValue);
        }}
      />
    </div>
  );
};

export const Continuous = ContinuousTemplate.bind({});
Continuous.args = {
  type: 'continuous',
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  showTicks: false,
};

/** discrete Slider */
const DiscreteTemplate = (args) => {
  const [value, setValue] = useState(args.value || 50);

  return (
    <div style={{ width: '300px' }}>
      <Slider
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          action('onChange')(newValue);
        }}
      />
    </div>
  );
};

export const Discrete = DiscreteTemplate.bind({});
Discrete.args = {
  type: 'discrete',
  min: 0,
  max: 100,
  step: 10,
  value: 50,
  showTicks: true,
};

/** Range Slider */
const RangeTemplate = (args) => {
  const [range, setRange] = useState(args.value || [20, 80]);

  return (
    <div style={{ width: '300px' }}>
      <Slider
        {...args}
        value={range}
        onChange={(newRange) => {
          setRange(newRange);
          action('onChange')(newRange);
        }}
      />
    </div>
  );
};

export const Range = RangeTemplate.bind({});
Range.args = {
  type: 'range',
  min: 0,
  max: 100,
  step: 1,
  value: [20, 80],
  showTicks: false,
};
