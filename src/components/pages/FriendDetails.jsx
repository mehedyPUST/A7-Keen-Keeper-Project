import React, { useState } from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { friendId } = useParams()
    console.log("params dekhaw", friendId)

    const friends = useLoaderData();
    console.log(friends, "friend detals")
    const expectedFriend = friends.find(friend => friend.id === Number(friendId))
    console.log("expectedFriend khujo", expectedFriend)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-Us", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }
    const [history, setHistory] = useState([]);

    const interactionHandlerVoiceCall = () => {
        toast.success(`You Called ${expectedFriend.name}`);
        setHistory(previous => [...previous, expectedFriend])
        console.log(history, "history theke")
    }
    const interactionHandlerVideoCall = () => {
        toast.success(`You Made Video Call With ${expectedFriend.name}`);
        setHistory(previous => [...previous, expectedFriend])
    }

    const interactionHandlerTextMsg = () => {
        toast.success(`Text Sent to  ${expectedFriend.name}`);
        setHistory(previous => [...previous, expectedFriend])
    }



    return (
        <div className='grid grid-cols-9 gap-4 w-11/12 mx-auto '>

            <div className='col-span-3'>

                <div className=' bg-white rounded-xl shadow-sm flex flex-col items-center p-4'>
                    <img className='w-20 h-20 rounded-full' src={expectedFriend.picture} alt={""} />
                    <h2>{expectedFriend.name}</h2>


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
                    <div className='bg-pink-100 p-3 flex flex-col items-center justify-center rounded-md'>

                        <h3 className='font-bold text-2xl'>{expectedFriend.days_since_contact}</h3>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='bg-pink-100 p-3 flex flex-col items-center justify-center rounded-md'>

                        <h3 className='font-bold text-2xl'>{expectedFriend.goal}</h3>
                        <p>Goal (Days) </p>
                    </div>

                    <div className='bg-pink-100 p-3 flex flex-col items-center justify-center rounded-md'>

                        <h3 className='font-bold text-2xl'>{formatDate(expectedFriend.next_due_date)}</h3>
                        <p>Next Due</p>
                    </div>
                </div>

                <div className='w-full bg-white shadow-md p-4 mt-4 mb-4 rounded-md '>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>Relationship Goal </p>
                        <button className='btn'>Edit</button>
                    </div>
                    <p><span className='text-gray-600'>Connect Every</span> <span className='font-semibold'>30 Days</span></p>


                </div>



                <div className='bg-green-100 shadow-md p-4' >
                    <h3>Quick Check-In</h3>
                    <div className='w-full bg-amber-100 p-4  grid grid-cols-3 mt-4 gap-4'>

                        <button onClick={interactionHandlerVoiceCall} className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <FiPhoneCall className='text-xl' />
                            <p>Call</p>
                        </button>
                        <button onClick={interactionHandlerTextMsg} className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <MdOutlineTextsms className='text-xl' />
                            <p>Text</p>
                        </button>
                        <button onClick={interactionHandlerVideoCall} className='bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-center p-5 cursor-pointer space-y-2'>
                            <CiVideoOn className='text-xl' />
                            <p>Video</p>
                        </button>



                    </div>
                </div>


                <div className='w-full bg-white shadow-md p-4 mt-4 mb-4 rounded-md '>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>Recent Interactions </p>
                        <button className='btn'>Full History</button>
                    </div>

                    <div className=' p-3 shadow-sm space-y-4 mt-4'>
                        {
                            history.map(info => <p className='bg-white p-2 shadow-sm '>{info.name}</p>)
                        }

                    </div>
                </div>


            </div>
        </div >
    );
};

export default FriendDetails;