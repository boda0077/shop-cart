import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
    useEffect(() => {
        gsap.fromTo(
            ".animate-spin",
            { rotation: 0 },
            { rotation: 360, duration: 1, repeat: -1, ease: "linear" }
        );
        gsap.fromTo(
            ".text-gray-700",
            { opacity: 0 },
            { opacity: 1, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" }
        );
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-xl text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;
