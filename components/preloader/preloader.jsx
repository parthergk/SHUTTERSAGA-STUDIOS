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
    <div className="fixed inset-0 bg-EerieBlack z-50 flex flex-col items-center justify-center">
      <div className="font-sans text-lg text-white text-12xl">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;