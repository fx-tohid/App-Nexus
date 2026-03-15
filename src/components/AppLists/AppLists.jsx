import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';
import { useState } from 'react';
import { useEffect } from 'react';

const AppLists = () => {

    const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const [filteredApps, setFilteredApps] = useState([]);
    const handleSearch = e => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    useEffect(() => {
        const results = apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredApps(results)
    }, [search, apps])

    
    return (
        <section className="w-full bg-[#fcfdfe] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* headnign */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-3">Our All Applications</h2>
                    <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between my-8'>
                    <h2 className='text-black text-3xl font-medium'>({apps.length}) Apps Found</h2>

                    {/* Search input */}
                    <label className="input ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={handleSearch} name='search' type="search" required placeholder="Search Apps" />
                    </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredApps.map((app) => <TrendingApp key={app.id} app={app} />)}
                </div>


            </div>
        </section>
    );
};

export default AppLists;