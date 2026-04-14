import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { tags, status, days_since_contact, email, picture, name, id } = friend;
    return (
        <Link to={`/friend-details/${friend.id}`} className=' bg-white rounded-xl shadow-xl flex flex-col items-center p-4'>
            <img className='w-20 h-20 rounded-full' src={picture} alt={name} />
            <h2>{name}</h2>
            <p>{days_since_contact} days ago</p>

            <div className='flex gap-2 items-center'>
                {tags.map(tag => <p className='badge badge-success'>{tag}</p>)}
            </div>


        </Link>
    );
};

export default FriendsCard;