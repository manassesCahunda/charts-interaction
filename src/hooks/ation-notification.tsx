import { useState, useEffect } from 'react';


const sampleNotifications = [
  {
    id: '1',
    read: false,
    seen: false,
    createdAt: new Date(),
    payload: {
      description: 'Transaction complete',
      type: 'transaction',
      recordId: 'tx123',
    },
  },
  {
    id: '2',
    read: true,
    seen: true,
    createdAt: new Date(),
    payload: {
      description: 'New message received',
      type: 'inbox',
      recordId: 'msg456',
    },
  },
  // Add more sample notifications if needed
];

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading notifications (replace with actual data fetching)
    const fetchNotifications = async () => {
      try {
        // Simulate API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Set notifications (replace with fetched data)
        setNotifications(sampleNotifications);
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const hasUnseenNotificaitons = notifications.some(
    (notification) => !notification.seen
  );

  function markMessageAsRead(id) {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function markAllMessagesAsSeen() {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, seen: true }))
    );
  }

  function markAllMessagesAsRead() {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  }

  return {
    isLoading,
    markAllMessagesAsRead,
    markMessageAsRead,
    markAllMessagesAsSeen,
    hasUnseenNotificaitons,
    notifications,
  };
}
