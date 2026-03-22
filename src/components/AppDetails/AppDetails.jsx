import React from 'react';
import { useState } from 'react';
import { FaCommentDots, FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { toast, ToastContainer } from 'react-toastify'

const AppDetails = () => {
    const appDatas = useLoaderData();
    const { id } = useParams()
    // console.log(appDatas, id);
    // const [] = useState([])
    const parseId = parseInt(id)
    const toShowApp = appDatas.find(app => app.id === parseId)
    console.log(toShowApp);
    const { title, description, ratingAvg, downloads, companyName, size, image, ratings, reviews } = toShowApp;

    const [installed, setInstalled] = useState(false);


    const handleInstall = () => {
        if(!installed){
            toast.success('App Installed');
            setInstalled(!false)
        }
    }

    return (
        <div className='md:max-w-5xl mx-auto w-full'>
            <ToastContainer />

            {/* Main App Info */}
            <div className=" p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">

                    <img
                        src={image}
                        alt="App Logo"
                        className="w-48 h-48 flex-shrink-0 border border-gray-100 rounded-xl flex items-center justify-center "
                    />

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-slate-900">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-400 mt-1 mb-4">
                            Developed by <span className="text-indigo-600 font-medium">{companyName}</span>
                        </p>

                        <hr className="border-gray-100 mb-6" />

                        <div className="flex flex-wrap gap-12 mb-8">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-green-500 mb-1">
                                    <FaDownload className="text-sm" />
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Downloads</span>
                                </div>
                                <span className="text-2xl font-bold text-slate-800">{downloads}</span>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-orange-400 mb-1">
                                    <FaStar className="text-sm" />
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Average Ratings</span>
                                </div>
                                <span className="text-2xl font-bold text-slate-800">{ratingAvg}</span>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-indigo-500 mb-1">
                                    <FaCommentDots className="text-sm" />
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Reviews</span>
                                </div>
                                <span className="text-2xl font-bold text-slate-800">{reviews}</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button onClick={handleInstall} className={`bg-[#00D18E] ${installed && 'btn-disabled bg-[#67b29a] text-red-300' } text-white px-6 py-2.5 rounded-md font-bold text-sm transition-colors hover:bg-[#00b97d]`}>
                            {
                                !installed ? `Install Now (${size} MB)` : 'Installed'
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Ratings Chart */}

            <div className="mt-4  p-8 bg-white rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0a1f44] mb-6">Ratings</h3>

                <div className="h-75 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={ratings}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />

                            <XAxis
                                type="number"
                                domain={[0, 12000]}
                                ticks={[0, 3000, 6000, 9000, 12000]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                            />

                            <YAxis
                                dataKey="name"
                                type="category"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6b7280', fontSize: 12 }}
                                width={60}
                            />

                            <Tooltip cursor={{ fill: 'transparent' }} />

                            <Bar
                                dataKey="count"
                                fill="#ff8a00"
                                radius={[0, 4, 4, 0]}
                                barSize={30}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>


            {/* Description  */}

            <div className="py-7 mx-4">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className='text-xl text-gray-800 mt-8'>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;