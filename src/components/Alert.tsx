import React from 'react';

interface IAlert {
  message: string;
  success: boolean;
}
const Alert: React.FC<IAlert> = ({ message, success }) => {
  return (
    <>
      {success ? (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Success!</span> {message}
        </div>
      ) : (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!</span> {message}
        </div>
      )}
    </>
  );
};

export default Alert;
