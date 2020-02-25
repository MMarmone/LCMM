import _ from 'lodash';
import React, {Component, useContext, useEffect} from 'react';
import {Search, Image, Label, Icon, Button} from 'semantic-ui-react';
import {CONFIG_DISPATCH_ACTIONS, HOST} from "../../../config";
import MyPlaceholderImage from "../../../assets/img/placeholder.png";
import {store} from "../../StateProvider/StateProvider";

const resultRenderer = ({ name, description, pluginImage, tags, price, isOpensource }) =>
    <React.Fragment>
      <div className="result">
        <div className="image">
          <Image
              size='small'
              src={HOST + '/' + (pluginImage ? pluginImage.substring(8) : "")}
              onError={i => i.target.src = MyPlaceholderImage} />
        </div>
        <div className="content">
          <div className="price">$&nbsp;{price || "0.00"}</div>
          <div className="title">{name}</div>
          <div
              className="description"
              style={{
                maxHeight: "30px",
              }}>{
            (!!tags && !!tags.length) &&
            tags.map(t => {
              if (t)
                return <Label style={{ marginBottom: "2px"}} size='mini' as='a'>
                  {t}
                </Label>
            })
          }</div>
        </div>
      </div>

    </React.Fragment>;

/**
 * JE SAIS PAS UTILISER LE CONTEXTE (et surtout le dispatch) EN MODE CLASSE COMPONENT
 */
const ArnaqueContexte = ({props}) => {
  const {state, dispatch} = useContext(store);

  useEffect(() => {
    console.log("Arnaque props", props);
    dispatch({
      type: CONFIG_DISPATCH_ACTIONS.SET_FILTERED_PLUGINS,
      payload: props.length ? props : [].concat(state.plugins)
    })
  }, [props]);

  return <i/>
};

const initialState = { isLoading: false, results: [], value: '', submittedResults: [], isResultSelect: null };

export default class PluginSearchInput extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    this.setState({
      value: result.name,
      submittedResults: [result],
      isResultSelect: [result]
    });

    // todo redirect page détails
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value, isResultSelect: null });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isNameMatch = (result) => re.test(result.name);
      const isTagMatch = (result) => re.test(result.tags);

      const nameFiltered = _.filter(this.props.plugins, isNameMatch);
      const tagFiltered = _.filter(this.props.plugins, isTagMatch);
      const result = _.uniqBy([...nameFiltered, ...tagFiltered], "_id");

      this.setState({
        isLoading: false,
        results: result
      })
    }, 300)
  };

  // todo dispatch new filtered
  submitSearchHandler = () => {
    this.setState({
      submittedResults: this.state.isResultSelect || this.state.results
    })
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
        <React.Fragment>
          <Search
              style={{width: "100%"}}
              id="search-plugin"
              fluid
              className="orange no-radius no-icon"
              loading={isLoading}
              results={results}
              value={value}
              resultRenderer={resultRenderer}
              onResultSelect={this.handleResultSelect}
              onSearchChange={ _.debounce(this.handleSearchChange, 500, { leading: true }) }
              onKeyDown={e => {
                if (e.keyCode === 13)
                  this.submitSearchHandler();
              }}
          />
          <ArnaqueContexte props={this.state.submittedResults} />
          <Button
              icon
              className="orange no-radius"
              style={{
                border: "1px solid #f2711c"
              }}
              onClick={this.submitSearchHandler}>
            <Icon name="search" />
          </Button>
        </React.Fragment>
    )
  }
}

