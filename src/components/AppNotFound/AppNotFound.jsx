import React from 'react';
import AppNotFoundImg from '../../assets/App-Error.png'
const AppNotFound = () => {
    return (
        <section className="w-full flex items-center justify-center bg-[#fcfdfe] font-sans px-6  min-h-screen">
            <div className="max-w-2xl text-center flex flex-col items-center">

                <div className="w-full max-w-sm mb-12">
                    <img
                        src={AppNotFoundImg}
                        alt="App Not Found"
                        className="w-full h-full"
                    />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] mb-4 tracking-tight uppercase">
                    OOPS!! APP NOT FOUND
                </h2>

                <p className="text-gray-600 text-lg font-normal mb-16 max-w-xl mx-auto">
                    The App you are requesting is not found on our system. please try another apps
                </p>

            </div>
        </section>
    );
};

export default AppNotFound;