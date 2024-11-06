import { useState, useEffect } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-52 h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2.5">
        <div 
          className="h-full bg-green-500 transition-all duration-100 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="font-sans text-lg text-gray-700">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;