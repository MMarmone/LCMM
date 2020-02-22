import {Button, Container, Divider, Grid, Header,
        Image, List, Responsive, Segment, Card, Icon, Table} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {HOST}  from '../../config';
import MyPlaceholderImage from '../../assets/img/placeholder.png';
import React, {useContext} from "react";

const Product = (name, desciption, like, value, version, author, image) => {

    return(
        <Container text textAlign='center'>
            <Header
            as='h1'
            content='Plugin Name'
            inverted
            style={{
                fontSize: props.mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: props.mobile ? '1.5em' : '3em',
              }}
            />
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}

            <Image src={HOST+'/'+'pluginRef'} wrapped ui={false} onError={i => i.target.src=MyPlaceholderImage} />
            
            <Text>{desciption}</Text>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Control</th>
                        <th>Param 1</th>
                        <th>Param 2</th>
                        <th>Param 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Control 1</td>
                        <td>Number</td>
                        <td>Number</td>
                        <td>Number</td>
                    </tr>
                    <tr>
                        <td>Control 2</td>
                        <td>Number</td>
                        <td>Number</td>
                        <td>Number</td>
                    </tr>
                    <tr>
                        <td>Control 3</td>
                        <td>Number</td>
                        <td>Number</td>
                        <td>Number</td>
                    </tr>
                </tbody>
            </Table>
            
        </Container>
    )
}

export default Product