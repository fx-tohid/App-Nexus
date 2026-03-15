import React from 'react';
import { use } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { useNavigate } from 'react-router';

const TrendingApps = ({ fetchDatas }) => {
    const navigate = useNavigate();
    const apps = use(fetchDatas)
    return (
        <section className="w-full bg-[#fcfdfe] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* headnign */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-3">Trending Apps</h2>
                    <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.slice(0, 8).map((app) => <TrendingApp app={app} />)}
                </div>

                <div className="flex justify-center mt-12">
                    <button onClick={() => navigate('/apps')} className="bg-[#8b5cf6] text-white px-10 py-3 rounded-md font-semibold text-sm hover:bg-[#7c3aed]">
                        Show All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;