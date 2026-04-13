import React from 'react';
import HomePageHeading from '../HomePageHeading/HomePageHeading';
import CategoryCounterCards from '../categorycounterCards/CategoryCounterCards';
import Friends from '../friends/Friends';


const HomePage = () => {
    return (
        <div>
            <HomePageHeading></HomePageHeading>
            <CategoryCounterCards></CategoryCounterCards>
            <Friends></Friends>
        </div>
    );
};

export default HomePage;