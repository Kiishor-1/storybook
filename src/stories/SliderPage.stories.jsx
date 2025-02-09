import './Slider.css';
import { useState } from 'react';
import { Slider } from './Slider';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Page',
    component: Slider,
    parameters: {
        docs: {
            description: {
                component: 'This page showcases the UI of the Slider component in different states, showing variations in style.',
            },
        },
    },
};

export const MasterComponent = () => {
    const [thumbSize, setThumbSize] = useState(16);
    const [contValue, setContValue] = useState(50);
    const [discValue, setDiscValue] = useState(50);
    const [rangeValue, setRangeValue] = useState([20, 80]);

    const thumbSizes = [10, 14, 16, 20, 24, 28];

    return (
        <div className="page-container">
            <div className="global-style">
                <h1 className="section-title">Slider</h1>
                <p>Sliders allow users to make selections from a range of values</p>
            </div>

            <h2 className="page-heading">Master Component</h2>
            <div className="master-component">
                <Slider
                    type="continuous"
                    thumbSize={thumbSize}
                    value={contValue}
                    onChange={(value) => {
                        setContValue(value);
                        action('Continuous Slider Changed')(value);
                    }}
                />
                <Slider
                    type="range"
                    thumbSize={thumbSize}
                    value={rangeValue}
                    onChange={(range) => {
                        setRangeValue(range);
                        action('Range Slider Changed')(range);
                    }}
                />
                <Slider
                    type="discrete"
                    thumbSize={thumbSize}
                    value={discValue}
                    step={10}
                    min={0}
                    max={100}
                    showTicks
                    onChange={(value) => {
                        setDiscValue(value);
                        action('discrete Slider Changed')(value);
                    }}
                />
            </div>

            <h3>Change Thumb Size:</h3>
            <div className="thumb-size">
                {thumbSizes.map((size, id) => (
                    <span
                        className={`thumb ${thumbSize === size ? 'selected' : ''}`} // Highlight selected size
                        key={id}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                        onClick={() => setThumbSize(size)}
                    ></span>
                ))}
            </div>

        </div>
    );
};


export const Overview = () => {
    const [thumbSize, setThumbSize] = useState(24);
    const [thumbStyle, setThumbStyle] = useState("default");
    const [contValue, setContValue] = useState(50);
    const [discValue, setDiscValue] = useState(50);
    const [rangeValue, setRangeValue] = useState([20, 80]);

    const propertiesData = [
        {
            id: 1,
            title: "Slider bar",
            img: './images/property1.png'
        },
        {
            id: 2,
            title: "Handle",
            img: './images/property2.png'
        }
    ]

    const thumbSizes = [24, 32];
    const thumbStyles = ["default", "hover", "focus"];
    console.log(thumbStyle)

    return (
        <div className="page-container">
            <div className="global-style">
                <h2 className="section-title">Overview</h2>
            </div>
            <div className="overview-content">
                <h2 className="page-heading">Properties</h2>
                <div className="properties">
                    {
                        propertiesData.map((data, id) => (
                            <section key={id}>
                                <h4>{data.title}</h4>
                                <div className="property-image">
                                    <img src={data.img} alt="" />
                                </div>
                            </section>
                        ))
                    }
                </div>

                <h3 className="page-heading">Anatomy</h3>
                <div className="slider-anatomy">
                    <Slider thumbStyle={thumbStyle} thumbSize={thumbSize} showTooltip={true} value={20} />
                    <span className="label tooltip-label">Tooltip value</span>
                    <span className="label handle-label">Handle</span>
                    <span className="label value-label">Value</span>
                    <span className="label track-label">Track</span>
                </div>

                <h3 className="page-heading">Type</h3>
                <div className="slider-types">
                    <div className="slider-type-box">
                        <Slider
                            type="continuous"
                            thumbSize={thumbSize}
                            thumbStyle={thumbStyle}
                            value={contValue}
                            onChange={(value) => setContValue(value)}
                        />
                    </div>
                    <p>Continuous Slider</p>
                    <div className="slider-type-box">
                        <Slider
                            type="range"
                            thumbSize={thumbSize}
                            thumbStyle={thumbStyle}
                            value={rangeValue}
                            onChange={(range) => setRangeValue(range)}
                        />
                    </div>
                    <p>Range Slider</p>
                    <div className="slider-type-box">
                        <Slider
                            type="discrete"
                            thumbSize={thumbSize}
                            thumbStyle={thumbStyle}
                            value={discValue}
                            step={10}
                            min={0}
                            max={100}
                            showTicks
                            onChange={(value) => setDiscValue(value)}
                        />
                    </div>
                    <p>Discrete Slider</p>
                </div>

                <h3 className="page-heading">Size</h3>
                <div className="slider-thumb-size">
                    {thumbSizes.map((size, id) => (
                        <section key={id}>
                            <div className="thumb-size-container" key={id}>
                                <span
                                    className={`slider-thumb ${thumbStyle} ${thumbSize === size ? "selected" : ""}`}
                                    // className={`thumb ${thumbSize === size ? "selected" : ""}`}
                                    style={{ width: `${size}px`, height: `${size}px` }}
                                    onClick={() => setThumbSize(size)}
                                ></span>
                            </div>
                            <p>{size}px</p>
                        </section>
                    ))}
                </div>

                <h3 className="page-heading">Status</h3>
                <div className="status-container">
                    <Slider thumbStyle={thumbStyle} thumbSize={thumbSize} />
                    <div className="thumb-style-options">
                        {thumbStyles.map((style, id) => (
                            <div className="thumb-style" key={id}>
                                <div className="style-option" key={id}>
                                    <button
                                        className={`slider-thumb ${style} ${thumbStyle === style ? "selected" : ""}`}
                                        style={{ width: `${thumbSize}px`, height: `${thumbSize}px` }}
                                        onClick={() => setThumbStyle(style)}
                                    >
                                    </button>
                                </div>
                                <p>{style}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Usage = () => {
    const directions = [
        {
            id: 1,
            sliderType: "continuous",
            min: 20,
            max: 100,
            desc: "The value tooltip will appear when hovering on handle",
            showTooltip: true,
        },
        {
            id: 2,
            sliderType: "discrete",
            min: 20,
            max: 100,
            showTicks: true,
            desc: "The discrete slider allows users to select a specific value from a predetermined range. Tick marks may be used to indicate available values.",
        },
        {
            id: 3,
            sliderType: "range",
            min: 20,
            max: 100,
            desc: "The value tooltip inherits values from Tooltip component",
        },
        {
            id: 4,
            sliderType: "continuous",
            min: 20,
            max: 100,
            desc: "The range slider is used to select a range of related values.",
            showTooltip: true,
        },
    ];

    const examples = [
        {
            id: 1,
            image: './images/notification-bar.png',
            sliders: [
                {
                    id: 1,
                    type: 'continous',
                    showTicks: false,
                },
                {
                    id: 1,
                    type: 'discrete',
                    showTicks: true,
                },
                {
                    id: 1,
                    type: 'range',
                    showTicks: false,
                },
            ],
        },
        {
            id: 1,
            image: './images/notification-bar.png',
            sliders: [
                {
                    id: 1,
                    type: 'continous',
                    showTicks: false,
                    heading: "Brightness"
                },
            ],
            heading: "Settings",
        },
    ]

    return (
        <div className="page-container">
            <div className="global-style">
                <h2 className="section-title">Usage</h2>
            </div>
            <div className="usage-content">
                {
                    directions.map((section, id) => (
                        <div className='guide' key={id}>
                            <Slider
                                min={section.min}
                                max={section.max}
                                value={section.min}
                                type={section.sliderType}
                                showTicks={section.showTicks || false}
                                showTooltip={section.showTooltip}
                            />
                            <p>{section.desc}</p>
                        </div>
                    ))
                }
            </div>
            <h2 className="page-heading">Example</h2>
            <div className="examples">
                {
                    examples.map((example, id) => (
                        <section key={id}>
                            <div className="mobile-view">
                                <img src={example?.image} alt="" />
                                {example?.heading &&
                                    <h2>{example?.heading}</h2>
                                }
                                {
                                    example?.sliders.map((slider, id) => (
                                        <div key={id}>
                                            {
                                                slider?.heading &&
                                                <h5>{slider?.heading}</h5>
                                            }
                                            <Slider type={slider.type} showTicks={slider.showTicks} />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    ))
                }
            </div>
        </div>
    )
};

