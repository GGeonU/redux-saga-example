import React from 'react'
import {connect} from "react-redux";
import {getPost, getUsers} from "../modules/sample";
import Sample from "../components/Sample";

const {useEffect} = React;
const SampleContainer = ({post, users, loadingPost, loadingUsers, getPost, getUsers}) => {
    useEffect(() => {
        const func = async () => {
            try {
                await getPost(1);
                await getUsers();
            } catch (e) {
                console.log(e);
            }
        };
        func()
    }, [getPost, getUsers]);

    return (
        <Sample post={post}
                users={users}
                loadingPost={loadingPost}
                loadingUsers={loadingUsers}
        />
    )
};

export default connect(
    ({sample, loading}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading.GET_POST,
        loadingUsers: loading.GET_USERS,
    }),
    ({
        getPost,
        getUsers
    })
)(SampleContainer)