import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineStarBorder } from 'react-icons/md';

const TrendingApp = ({ app }) => {
    const { image, title, id, downloads, reviews } = app;

    const handleAppDetails = () => {
        console.log('Hello world')
    }
    return (
        <div onClick={handleAppDetails}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        >
            <img className='w-full aspect-square bg-[#e2e8f0] rounded-lg mb-4 flex items-center justify-center' src={image} alt="" />

            <h3 className="text-[15px] font-bold text-[#0f172a] mb-4 leading-snug">
                {title}
            </h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                    <FiDownload className='text-green-600' />
                    <span className="text-green-600 text-xs font-bold"> {downloads}</span>
                </div>
                <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
                    <MdOutlineStarBorder className='text-orange-400' />
                    <span className="text-orange-400 text-xs font-bold"> {reviews}</span>
                </div>
            </div>
        </div>
    );
};

export default TrendingApp;