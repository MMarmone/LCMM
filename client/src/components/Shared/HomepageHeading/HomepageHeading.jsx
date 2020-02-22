import {Button, Container, Header, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";
import React, {useContext} from "react";
import {store} from "../../StateProvider/StateProvider";

const HomepageHeading = (props) => {

  return (
    <Container  text textAlign='center'>
      <Header
        as='h1'
        content='Imagine-a-Company'
        inverted
        style={{
          fontSize: props.mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: props.mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Do whatever you want when you want to.'
        inverted
        style={{
          fontSize: props.mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: props.mobile ? '0.5em' : '1.5em',
        }}
      />
    </Container>
  );
};

HomepageHeading.propTypes = {
    mobile: PropTypes.bool
};

export default HomepageHeading;
