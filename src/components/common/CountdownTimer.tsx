import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            } else {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
        };

        // Update the countdown initially
        setTimeLeft(calculateTimeLeft());

        // Set up the interval to update the countdown
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num: number): string => {
        return num < 10 ? `0${num}` : `${num}`;
    };

    return (
        <div className="text-center">
            <div className="flex items-center justify-center space-x-1 md:space-x-4">
                <div className="flex flex-col items-center">
                    <div className="bg-primary text-white py-3 px-4 md:py-6 md:px-8 rounded-lg text-xl md:text-4xl font-bold">
                        {formatNumber(timeLeft.days)}
                    </div>
                    <span className="text-white text-xs md:text-sm mt-2">Days</span>
                </div>

                <span className="text-white text-xl md:text-4xl font-bold">:</span>

                <div className="flex flex-col items-center">
                    <div className="bg-primary text-white py-3 px-4 md:py-6 md:px-8 rounded-lg text-xl md:text-4xl font-bold">
                        {formatNumber(timeLeft.hours)}
                    </div>
                    <span className="text-white text-xs md:text-sm mt-2">Hours</span>
                </div>

                <span className="text-white text-xl md:text-4xl font-bold">:</span>

                <div className="flex flex-col items-center">
                    <div className="bg-primary text-white py-3 px-4 md:py-6 md:px-8 rounded-lg text-xl md:text-4xl font-bold">
                        {formatNumber(timeLeft.minutes)}
                    </div>
                    <span className="text-white text-xs md:text-sm mt-2">Minutes</span>
                </div>

                <span className="text-white text-xl md:text-4xl font-bold">:</span>

                <div className="flex flex-col items-center">
                    <div className="bg-primary text-white py-3 px-4 md:py-6 md:px-8 rounded-lg text-xl md:text-4xl font-bold">
                        {formatNumber(timeLeft.seconds)}
                    </div>
                    <span className="text-white text-xs md:text-sm mt-2">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;