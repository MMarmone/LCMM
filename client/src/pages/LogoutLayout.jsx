import React, {useContext, useEffect} from 'react';
import {
  Button,
  Container,
  Header,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {store} from "../components/StateProvider/StateProvider";
import {Link, useHistory} from "react-router-dom";
import {CONFIG_FRONTEND} from "../config";

const HomeLayout = (props) => {
  const { dispatch } = useContext(store);
  const history = useHistory();

  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 750))
      .then(() => dispatch({type: 'logout'}))
      .then(() => history.push(CONFIG_FRONTEND.URL_HOME));

  }, []); // ne l'appeler qu'une seule fois

  return (
    <ResponsiveContainer>
      <Segment style={{padding: '8em 0em'}} vertical>
        <Container text>
          <Header as='h3' style={{fontSize: '2em'}}>
            You were successfully logged out.
          </Header>
          <p style={{fontSize: '1.33em'}}>
            You will be redirected shortly
          </p>
          <Button as={Link} to={CONFIG_FRONTEND.URL_HOME} size='large'>
            Click here if not
          </Button>
        </Container>
      </Segment>

    </ResponsiveContainer>
  );
};

export default HomeLayout;