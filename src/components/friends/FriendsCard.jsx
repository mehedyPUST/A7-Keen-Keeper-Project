import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { tags, status, days_since_contact, email, picture, name, id } = friend;
    const formatStatus = (status) => {
        return status
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-');
    };

    return (
        <Link to={`/friend-details/${friend.id}`} className=' bg-white rounded-xl shadow-xl flex flex-col items-center p-5 space-y-2'>
            <img className='w-20 h-20 rounded-full' src={picture} alt={name} />
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p className='text-gray-500'>{days_since_contact} Days Ago</p>

            <div className='flex gap-2 items-center'>
                {tags.map(tag => <p className='badge badge-success'>{tag}</p>)}
            </div>

            <div className={`badge badge-soft px-4 py-3 font-bold ${status === 'Overdue' ? 'badge-error' : status === 'Almost Due' ? 'badge-warning' : status === "On-Track" ? "badge-success" : 'badge-info'} `}>
                {status}
            </div>


        </Link>
    );
};

export default FriendsCard;