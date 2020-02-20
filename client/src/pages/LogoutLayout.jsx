import React, {useContext, useEffect} from 'react';
import {
  Button,
  Container,
  Divider,
  Header,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {store} from "../components/StateProvider/StateProvider";
import { useHistory } from "react-router-dom";

const HomeLayout = (props) => {
  let history = useHistory();

  const { state, dispatch } = useContext(store);

  console.log("state", state);

  // todo setTimeout after render genre useEffect
  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 750))
      .then(() => dispatch({type: 'logout'}))
      // .then(() => );

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
          <Button as='a' size='large'>
            Read More
          </Button>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{margin: '3em 0em', textTransform: 'uppercase'}}
          >
            <a href='#'>Case Studies</a>
          </Divider>

          <Header as='h3' style={{fontSize: '2em'}}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{fontSize: '1.33em'}}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>

    </ResponsiveContainer>
  );
}

export default HomeLayout;