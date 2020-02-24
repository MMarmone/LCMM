import _ from 'lodash';
import React, {useContext, useState} from 'react';
import {Search, Grid, Header, Segment, Label, Image} from 'semantic-ui-react';
import {store} from "../../StateProvider/StateProvider";
import {HOST} from "../../../config";
import MyPlaceholderImage from "../../../assets/img/placeholder.png";

const resultRenderer = ({ name, description, pluginImage, tags, price }) =>
  <React.Fragment>
    <div className="result">
      <div className="image">
        <Image size='small' src={HOST + '/' + pluginImage.substring(8)}
               onError={i => i.target.src = MyPlaceholderImage} />
      </div>
      <div className="content">
        <div className="price">$&nbsp;{price || "N/A"}</div>
        <div className="title">{name}</div>
        <div
          className="description"
          style={{
            height: "50px",
          }}>{tags}</div>
      </div>
    </div>

    <div>
      <Image
        size='small'
        verticalAlign='middle'
        src={HOST + '/' + pluginImage.substring(8)}
        onError={i => i.target.src = MyPlaceholderImage} />
      <span>Middle Aligned</span>
    </div>

    <Label content={name} />
    <Label content={description} />
    <Image avatar size='small' src={HOST + '/' + pluginImage.substring(8)}
           onError={i => i.target.src = MyPlaceholderImage} />
  </React.Fragment>;


const PluginSearchInput = (props) => {
  const initialState = { isLoading: false, results: [], value: '' };

  const {state} = useContext(store);
  const [searchState, setSearchState] = useState(initialState);


  const handleResultSelect = (e, { result }) => setSearchState({
    ...searchState,
    value: result.name
  });

  const handleSearchChange = (e, { value }) => {
    setSearchState({
      ...searchState,
      isLoading: true,
      value: value
    });
    console.log("value", value)
    console.log("!value", !value)
    console.log("value.length", value.length)

    //setTimeout(() => {
      if (!value)
        return setSearchState(initialState);

      const re = new RegExp(_.escapeRegExp(searchState.value), 'i');
      const isMatch = (result) => re.test(result.name);

      setSearchState({
        ...searchState,
        isLoading: false,
        results: _.filter(state.verifiedPlugins, isMatch),
      })
    //}, 300)
  };

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={searchState.isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true
          })}
          results={searchState.results}
          value={searchState.value}
          resultRenderer={resultRenderer}
          {...props}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>Search State</Header>
          <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(searchState, null, 2)}
            </pre>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(state.plugins, null, 2)}
            </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  )

};

export default PluginSearchInput;
