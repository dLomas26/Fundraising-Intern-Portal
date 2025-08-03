import React from 'react';

const DashboardCard = ({
  title,
  value,
  icon,
  description,
  valueColor = 'text-green-400',
  darkMode = false
}) => {
  return (
    <div className={`rounded-lg shadow-sm border p-6 transition-shadow duration-200 hover:shadow-md ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:shadow-green-900/10' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium mb-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {title}
          </p>
          <p className={`text-2xl font-bold ${valueColor}`}>
            {value}
          </p>
          {description && (
            <p className={`text-sm mt-1 ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {description}
            </p>
          )}
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className={`p-3 rounded-lg ${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          }`}>
            {React.cloneElement(icon, { 
              className: `${icon.props.className || ''} ${darkMode ? 'text-green-400' : 'text-green-600'}`
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;