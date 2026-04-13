import React from 'react';

const CategoryCounterCards = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 gap-10 mt-5 mx-auto text-center'>
            <div className='bg-white shadow-md rounded-md p-3'>
                <h3 className='font-semibold text-2xl'>10</h3>
                <p className='text-gray-500'>Total Friends</p>
            </div>

            <div className='bg-white shadow-md rounded-md p-3'>
                <h3 className='font-semibold text-2xl'>10</h3>
                <p className='text-gray-500'>On Track</p>
            </div>

            <div className='bg-white shadow-md rounded-md p-3'>
                <h3 className='font-semibold text-2xl'>10</h3>
                <p className='text-gray-500'>Need Attention</p>
            </div>

            <div className='bg-white shadow-md rounded-md p-3'>
                <h3 className='font-semibold text-2xl'>10</h3>
                <p className='text-gray-500'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CategoryCounterCards;