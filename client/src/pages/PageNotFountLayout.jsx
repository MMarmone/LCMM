import React from 'react';
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";

const PageNotFoundLayout = (props) => (
    <ResponsiveContainer
        inverted={props.inverted}
    >
        <div
            style={{
                height: '100%'
            }}
        >
            <h1>404</h1>
        </div>
    </ResponsiveContainer>
);

export default PageNotFoundLayout;