import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class Features extends Component {
    render() {
        //Features loop start
        const featuredata = this.props.featuresData.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-features">
                    <i className={feature.icon} />
                    <h3>{feature.featuresName}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        ));
        //Features loop END

        return (
            <React.Fragment>
                <section
                    id="features"
                    className="features-area bg-gray ptb-100"
                >
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{featuredata}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Features.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    featuresData: PropTypes.array
};

Features.defaultProps = {
    sectionName: "Features",
    sectionTitle: "Our Amazing Features",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    featuresData: [
        {
            icon: "icofont-hand-drag1",
            featuresName: "Drag and drop",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-diamond",
            featuresName: "Fully customizable",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-responsive",
            featuresName: "Fully responsive",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-rocket",
            featuresName: "App integration",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        }
    ]
};
export default Features;
