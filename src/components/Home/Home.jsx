import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Stats from '../Stats/Stats';
import TrendingApps from '../TrendingApps/TrendingApps';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';


const Home = () => {

    const fetchDatas = fetch('/datas.json').then(res => res.json());

    return (
        <div>
            <HeroSection />
            <Stats />
            <Suspense fallback={<h1>Something coming...</h1>}>
                <TrendingApps fetchDatas={fetchDatas} />
            </Suspense>
            <ToastContainer />
        </div>
    );
};

export default Home;