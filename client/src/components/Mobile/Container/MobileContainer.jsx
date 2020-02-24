import React, {Component} from "react";
import {Responsive, Sidebar} from "semantic-ui-react";
import PropTypes from "prop-types";
import {getWidth} from "../../../utils/utils";
import MobileTopNavbar from "../../Mobile/TopNavbar/MobileTopNavbar";

class MobileContainer extends Component {
    render() {
        const { children } = this.props;
        const { home } = this.props;

        return (
          <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}>
              <MobileTopNavbar home={home}>
                  {children}
              </MobileTopNavbar>
          </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default MobileContainer;
