import React, { useContext } from 'react';
import { TimelineContextCreate } from '../../context/TimelineContextCreator';
import { FriendsContextCreate } from '../../context/FriendsContextCreator';

const CategoryCounterCards = () => {
    const { friends } = useContext(FriendsContextCreate);
    const { timeline } = useContext(TimelineContextCreate);

    const onTrackContacts = friends.filter(contact => contact.status === "On-Track");
    const needAttentionContacts = friends.filter(contact => contact.status === "Overdue");

    // Card data array
    const cards = [
        { label: "Total Friends", value: friends.length },
        { label: "On Track", value: onTrackContacts.length },
        { label: "Need Attention", value: needAttentionContacts.length },
        { label: "Interactions This Month", value: timeline.length }
    ];

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 gap-10 mt-5 mx-auto text-center'>
            {cards.map((card, index) => (
                <div key={index} className='bg-white shadow-md rounded-md p-5'>
                    <h3 className='font-bold text-3xl text-green-800'>{card.value}</h3>
                    <p className='text-gray-500'>{card.label}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryCounterCards;