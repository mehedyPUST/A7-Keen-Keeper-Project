import React, { use } from 'react';
import FriendsCard from './FriendsCard';

const friendsPromise = fetch('/friendsData.json').then(res => res.json());


const Friends = () => {
    const friends = use(friendsPromise)
    console.log(friends)
    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h3 className='font-bold text-2xl mb-3'>Your Friends</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {
                    friends.map(friend => {
                        return (

                            <FriendsCard friend={friend}></FriendsCard>

                        )

                    })
                }
            </div>

        </div>
    );
};

export default Friends;