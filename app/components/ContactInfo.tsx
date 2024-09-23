import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWaze } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-start lg:absolute lg:top-0 lg:right-0 lg:mr-12 space-y-4" style={{ marginTop: '9rem', textAlign: 'left', direction: 'rtl' }}>
      <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">פרטי התקשרות</h3>
      <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
      <p className="text-gray-700 dark:text-gray-300 flex items-center">
        <FaPhoneAlt className="ml-2" /> טלפון: 077-4260954 | נייד: 0543429095
      </p>
      <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
      <p className="text-gray-700 dark:text-gray-300 flex items-center">
        <FaEnvelope className="ml-2" /> אימייל: uniquesmile2024@gmail.com
      </p>
      <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
      <p className="text-gray-700 dark:text-gray-300 flex items-center">
        <a
          href="https://www.waze.com/ul?ll=32.3156319%2C34.9374747&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
        >
          <FaWaze className="ml-1" /> כתובת: רחוב שרת 6, כפר יונה, קניון הכפר (קומת כניסה) - פתח בוויז
        </a>
      </p>
      <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
    </div>
  );
};

export default ContactInfo;
