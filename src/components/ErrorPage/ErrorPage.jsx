import React from 'react';
import { useNavigate } from 'react-router';
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <section className="w-full flex items-center justify-center bg-[#fcfdfe] font-sans px-6  min-h-screen">
                <div className="max-w-2xl text-center flex flex-col items-center">

                    <div className="w-full max-w-sm mb-12">
                        <img
                            src={errorImage}
                            alt="Page Not Found"
                            className="w-full h-full"
                        />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] mb-4 tracking-tight uppercase">
                        Opps!! Page not found
                    </h2>

                    <p className="text-gray-600 text-lg font-normal mb-16 max-w-xl mx-auto">
                        The page you are looking for is not available.
                    </p>

                    <button className='btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white px-7' onClick={() => navigate(-1)}>Go back!</button>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;