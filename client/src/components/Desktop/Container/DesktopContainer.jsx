import React, {Component} from "react";
import {Responsive} from "semantic-ui-react";
import PropTypes from "prop-types";
import {getWidth} from "../../../utils/utils";
import DesktopTopNavbar from "../TopNavbar/DesktopTopNavbar";

class DesktopContainer extends Component {

    render() {
        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <DesktopTopNavbar home={this.props.home} inverted />
                {this.props.children}

            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

export default DesktopContainer;