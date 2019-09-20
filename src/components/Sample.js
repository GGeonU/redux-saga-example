import React from 'react';

const Sample = ({post, users, loadingPost, loadingUsers}) => {

    return (
        <div>
            <section>
                <h1>PoSt</h1>
                {loadingPost && 'loading...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>UsEr LiSt</h1>
                {loadingUsers && 'loading...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
};

export default Sample;