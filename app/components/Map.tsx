import React from 'react';

const Map: React.FC = () => {
    return (
        <div className="mt-12 w-full">
            <iframe
                src="https://www.google.com/maps?q=32.31803679112221,34.93422447157883&z=15&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Map;
