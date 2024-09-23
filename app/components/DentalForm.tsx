'use client'

import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BiWinkSmile } from 'react-icons/bi';
import ContactInfo from './ContactInfo'; // הקפד לייבא את ContactInfo
import Map from './Map'; // הקפד לייבא את קומפוננטת המפה
import DentalInfoGrid from './DentalInfoGrid'; // הקפד לייבא את DentalInfoGrid

const DentalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // הוסף כאן את הקוד לשליחת הטופס
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full px-4 py-8 space-y-8 lg:space-y-0 lg:space-x-8 dark:bg-gray-800 dark:text-gray-200" style={{ direction: 'rtl' }}>
      {/* פרטי התקשרות */}
      <div className="flex-shrink-0 lg:w-1/4">
        <ContactInfo />
      </div>

      {/* טופס והמפה */}
      <div className="flex flex-col items-center w-full lg:w-2/4 px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1 text-center">Unique Smile - המרפאה שלך לחיוך מושלם</h2>
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6 text-center">
          טיפולים מתקדמים להשתלות שיניים ואורטודנטיה ברמה הגבוהה ביותר
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
          {/* שדה שם מלא */}
          <div className="relative bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm">
            <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">שם מלא:</label>
            <div className="mt-1">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full pl-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                placeholder="הזן את שמך המלא"
              />
            </div>
          </div>

          {/* שדה אימייל */}
          <div className="relative bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">אימייל:</label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full pl-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                placeholder="הזן את האימייל שלך"
              />
            </div>
          </div>

          {/* שדה טלפון */}
          <div className="relative bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm">
            <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">טלפון:</label>
            <div className="mt-1">
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="block w-full pl-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                placeholder="הזן את מספר הטלפון שלך"
              />
            </div>
          </div>

          {/* שדה הודעה */}
          <div className="relative bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">הודעה:</label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
                placeholder="הזן את ההודעה שלך"
              />
            </div>
          </div>

          {/* כפתור שליחה */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white py-3 px-6 rounded-md shadow-lg hover:from-blue-500 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            disabled={loading}
          >
            {loading ? 'שולח...' : (
              <>
                <span>התחילו את המסע שלכם לחיוך מושלם</span>
                <BiWinkSmile className="ml-2" />
              </>
            )}
          </button>
        </form>
        <Map />
      </div>

      {/* Grid בצד שמאל */}
      <div className="flex-shrink-0 lg:w-1/4">
        <DentalInfoGrid />
      </div>
    </div>
  );
};

export default DentalForm;
