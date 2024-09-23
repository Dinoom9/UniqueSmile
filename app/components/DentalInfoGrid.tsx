import React from 'react';
import { FaSmile, FaTeethOpen, FaAlignJustify, FaTooth, FaCrown, FaPaintBrush } from 'react-icons/fa';
import DentalInfoCard from './DentalInfoCard';

const DentalInfoGrid: React.FC = () => {
    return (
        <div className="w-full px-4 lg:px-16" style={{ direction: 'rtl' }}>
            {/* כותרת מעל הגרידים */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">למה אצלנו?</h2>

            {/* עיטוף כל שני כרטיסים בתוך flex */}
            <div className="flex flex-col gap-8">
                <div className="flex gap-8 justify-center">
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="הלבנה"
                            icon={<FaSmile className="ml-2 text-blue-600" />}
                            description="הלבנה לשיפור החיוך ולמראה לבן וזוהר. טיפול מהיר ובטוח לשיניים בריאות ומבריקות."
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="שיננית"
                            icon={<FaTeethOpen className="ml-2 text-blue-600" />}
                            description="ניקוי יסודי למניעת אבנית ודלקות. טיפול שוטף לשמירה על בריאות החניכיים והפה."
                        />
                    </div>
                </div>

                <div className="flex gap-8 justify-center">
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="יישור שיניים"
                            icon={<FaAlignJustify className="ml-2 text-blue-600" />}
                            description="יישור אסתטי לשיניים ישרות ובריאות. תוצאה טבעית ומשופרת בשיטות מתקדמות."
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="שתלים"
                            icon={<FaTooth className="ml-2 text-blue-600" />}
                            description="שתלים קבועים להחלפת שיניים חסרות. פתרון אסתטי ופונקציונלי לשיקום הפה."
                        />
                    </div>
                </div>

                <div className="flex gap-8 justify-center">
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="כתרים"
                            icon={<FaCrown className="ml-2 text-blue-600" />}
                            description="שיקום השן בעזרת כתרים איכותיים. פתרון עמיד ויפה לשיניים פגומות."
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <DentalInfoCard
                            title="אסתטיקה"
                            icon={<FaPaintBrush className="ml-2 text-blue-600" />}
                            description="טיפולי ציפוי ויישור בלתי נראה. פתרונות מתקדמים למראה אסתטי מושלם."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalInfoGrid;
