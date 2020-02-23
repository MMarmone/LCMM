import React from "react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import UserProfile from '../components/UserProfile/UserProfile';

export default function UserProfileLayout (props) {

    return (
        <ResponsiveContainer>
            <UserProfile />
        </ResponsiveContainer>
    )
};
