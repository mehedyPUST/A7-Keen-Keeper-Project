import React from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams()
    console.log("params dekhaw", friendId)

    const friends = useLoaderData();
    console.log(friends, "friend detals")
    const expectedFriend = friends.find(friend => friend.id === Number(friendId))
    console.log("expectedFriend khujo", expectedFriend)

    return (
        <div className='grid grid-cols-9 gap-4 w-11/12 mx-auto '>

            <div className='col-span-3'>

                <div className=' bg-white rounded-xl shadow-sm flex flex-col items-center p-4'>
                    <img className='w-20 h-20 rounded-full' src={expectedFriend.picture} alt={""} />
                    <h2>{expectedFriend.name}</h2>
                    <p>{expectedFriend.days_since_contact} days ago</p>

                    <div className='flex gap-2 items-center'>
                        {expectedFriend.tags.map(tag => <p className='badge badge-success'>{tag}</p>)}
                    </div>

                </div>
                <div className='w-full space-y-2 flex flex-col mt-4'>
                    <button className='btn'>Snooze 2 weeks</button>
                    <button className='btn'>Archive</button>
                    <button className='btn'>Delete</button>
                </div>



            </div>


            <div className='col-span-6'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='bg-pink-100'> card 1</div>
                    <div className='bg-green-100'> card 2</div>
                    <div className='bg-red-100'> card 3</div>
                </div>

                <div className='w-full bg-red-100 p-4 mt-4 mb-4'>goal</div>
                <div className='bg-green-100 shadow-md p-4' >
                    <h3>Quick Check-In</h3>
                    <div className='w-full bg-amber-100 p-4  grid grid-cols-3 mt-4 gap-4'>

                        <button className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <FiPhoneCall className='text-xl' />
                            <p>Call</p>
                        </button>
                        <button className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <MdOutlineTextsms className='text-xl' />
                            <p>Text</p>
                        </button>
                        <button className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <CiVideoOn className='text-xl' />
                            <p>Video</p>
                        </button>



                    </div>
                </div>


            </div>
        </div >
    );
};

export default FriendDetails;