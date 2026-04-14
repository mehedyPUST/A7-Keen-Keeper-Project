import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams()
    console.log("params dekhaw", friendId)

    const friends = useLoaderData();
    console.log(friends, "friend detals")
    const expectedFriend = friends.find(friend => friend.id === Number(friendId))
    console.log("expectedFriend khujo", expectedFriend)

    return (
        <div>
            <h1>
                {expectedFriend.name}

            </h1>
            <p>{expectedFriend.email}</p>

        </div>
    );
};

export default FriendDetails;