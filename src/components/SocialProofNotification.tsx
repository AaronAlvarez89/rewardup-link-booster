import { useState, useEffect } from 'react';

interface NotificationData {
  name: string;
  location: string;
  amount: string;
}

const SocialProofNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const notifications: NotificationData[] = [
    { name: "Maria G.", location: "Arizona", amount: "$720" },
    { name: "Daniel F.", location: "Nevada", amount: "$440" },
    { name: "Jennifer L.", location: "Florida", amount: "$520" },
    { name: "Robert T.", location: "Ohio", amount: "$750" },
    { name: "Amanda S.", location: "Texas", amount: "$450" },
    { name: "Michael K.", location: "California", amount: "$680" },
    { name: "Sarah W.", location: "New York", amount: "$590" },
    { name: "James L.", location: "Michigan", amount: "$425" },
    { name: "Lisa M.", location: "Georgia", amount: "$735" },
    { name: "David R.", location: "Illinois", amount: "$485" }
  ];

  useEffect(() => {
    // Initial delay before first notification
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      // Hide current notification
      setIsVisible(false);
      
      // After animation completes, update content and show new notification
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === notifications.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 4000); // Show each notification for 4 seconds

    return () => clearInterval(interval);
  }, [isVisible, notifications.length]);

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div 
        className={`
          bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[240px]
          transition-all duration-300 ease-in-out transform
          ${isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">
              <span className="text-green-600">{currentNotification.name}</span> claimed{' '}
              <span className="text-primary font-semibold">{currentNotification.amount}</span>
            </div>
            <div className="text-xs text-gray-500">
              {currentNotification.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;