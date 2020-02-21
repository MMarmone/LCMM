
import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List, Responsive,
  Segment
} from 'semantic-ui-react';
import * as APIHandler from "../../api/apiHandler";
import {Link} from "react-router-dom";


 const Plugins = (plugins) => {
  const { state, dispatch } = useContext(store);
   return (

     <div>
       <center><h1>Plugins</h1></center>
       <Grid container stackable verticalAlign='middle'>
        <div class="row">
       {state.plugins.map((plugin) => (
        <div class="col-sm-4">
            <div class="card border-secondary mb-3" style={{width: 20 +'em'}}>
              <img src="http://via.placeholder.com/640x360
" class="card-img-top" alt="..."></img>
              <div class="card-body text-secondary" >

                <h5 class="card-title">{plugin.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{plugin.version}</h6>
                <p class="card-text">{plugin.description}</p>
                <Link to="#" class="btn btn-primary">Go To plugin</Link>
              </div>
            </div>
            </div>
       ))}

       </div>
       </Grid>
     </div>
   )
 };
 const styles =  {
  card:{
    display:'block'
  }
};
 export default Plugins