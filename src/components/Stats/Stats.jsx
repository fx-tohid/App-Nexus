import React from 'react';

const Stats = () => {
    return (
        <section className="w-full bg-[#8B5CF6] text-white font-sans border border-gray-100/10">
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-16">
                    Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">

                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-purple-100/90 uppercase tracking-wide mb-1.5">
                            Total Downloads
                        </span>
                        <span className="text-6xl font-extrabold mb-1 tracking-tight">
                            29.6M
                        </span>
                        <span className="text-xs font-semibold text-purple-100/90">
                            21% More Than Last Month
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-purple-100/90 uppercase tracking-wide mb-1.5">
                            Total Reviews
                        </span>
                        <span className="text-6xl font-extrabold mb-1 tracking-tight">
                            906K
                        </span>
                        <span className="text-xs font-semibold text-purple-100/90">
                            46% More Than Last Month
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-purple-100/90 uppercase tracking-wide mb-1.5">
                            Active Apps
                        </span>
                        <span className="text-6xl font-extrabold mb-1 tracking-tight">
                            132+
                        </span>
                        <span className="text-xs font-semibold text-purple-100/90">
                            31 More Will Launch
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Stats;