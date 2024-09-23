import React, { forwardRef } from 'react';
import type { FormInputProps } from '../types'; // ייבוא הסוגים

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id, label, type, name, value, onChange, required = false, icon, isTextarea = false, placeholder, dir, error
}, ref) => {
  return (
    <div className="mb-6">
      {/* הקבוצה של האייקון והכותרת */}
      <label htmlFor={id} className="block text-gray-700 text-lg font-medium mb-2 flex items-center space-x-reverse space-x-2">
        {icon} {/* האייקון בצד ימין */}
        <span>{label}</span> {/* הכותרת */}
      </label>

      {/* שדה הקלט */}
      {!isTextarea ? (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 transition ease-in-out duration-150 ${error ? 'border-red-500' : ''}`}
          required={required}
          placeholder={placeholder}
          dir={dir}
          ref={ref} // העברת הרפ
        />
      ) : (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 transition ease-in-out duration-150 ${error ? 'border-red-500' : ''}`}
          rows={4}
          required={required}
          placeholder={placeholder}
          dir={dir}
        ></textarea>
      )}

      {/* הצגת הודעת שגיאה אם קיימת */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

FormInput.displayName = 'FormInput'; // הכרחי להגדרת displayName עם forwardRef

export default FormInput;
