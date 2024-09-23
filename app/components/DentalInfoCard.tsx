import React from 'react';
import type { DentalInfoCardProps } from '../types'; // ייבוא הסוגים

const DentalInfoCard: React.FC<DentalInfoCardProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col justify-between p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 h-auto w-full">
            <h4 className="text-lg font-bold mb-2 flex items-center text-black">
                {icon}
                {title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed break-words">
                {description}
            </p>
        </div>
    );
};

export default DentalInfoCard;
