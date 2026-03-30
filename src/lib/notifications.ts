import { supabase } from './supabase';

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'order' | 'system' | 'avatar' | 'promotion' | 'social' | 'achievement' | 'reminder';
  is_read: boolean;
  action_url?: string;
  data?: any;
  expires_at?: string;
  created_at: string;
}

export interface CreateNotificationInput {
  title: string;
  message: string;
  type: 'order' | 'system' | 'avatar' | 'promotion' | 'social' | 'achievement' | 'reminder';
  action_url?: string;
  data?: any;
  expires_at?: string;
}

export async function getNotifications(userId: string, limit = 20, offset = 0): Promise<Notification[]> {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }

  return data || [];
}

export async function getUnreadCount(userId: string): Promise<number> {
  const { data, error } = await supabase
    .from('notifications')
    .select('id', { count: 'exact' })
    .eq('user_id', userId)
    .eq('is_read', false);

  if (error) {
    console.error('Error getting unread count:', error);
    throw error;
  }

  return data?.length || 0;
}

export async function markAsRead(userId: string, notificationId: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('id', notificationId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error marking as read:', error);
    throw error;
  }
}

export async function markAllAsRead(userId: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('user_id', userId)
    .eq('is_read', false);

  if (error) {
    console.error('Error marking all as read:', error);
    throw error;
  }
}

export async function deleteNotification(userId: string, notificationId: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', notificationId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
}

export async function getNotificationsByType(
  userId: string,
  type: Notification['type'],
  limit = 20
): Promise<Notification[]> {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .eq('type', type)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching notifications by type:', error);
    throw error;
  }

  return data || [];
}

export async function cleanupExpiredNotifications(userId: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('user_id', userId)
    .lt('expires_at', new Date().toISOString());

  if (error) {
    console.error('Error cleaning up expired notifications:', error);
    throw error;
  }
}

export function getRelativeTime(date: Date | string): string {
  const now = new Date();
  const notificationDate = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'à l\'instant';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `il y a ${days} jour${days > 1 ? 's' : ''}`;
  } else {
    return notificationDate.toLocaleDateString('fr-FR');
  }
}

export function getNotificationColor(type: Notification['type']): string {
  switch (type) {
    case 'order':
      return 'blue';
    case 'system':
      return 'gray';
    case 'avatar':
      return 'purple';
    case 'promotion':
      return 'amber';
    case 'social':
      return 'green';
    case 'achievement':
      return 'yellow';
    case 'reminder':
      return 'pink';
    default:
      return 'gray';
  }
}

export function getNotificationIcon(type: Notification['type']): string {
  switch (type) {
    case 'order':
      return '📦';
    case 'system':
      return '⚙️';
    case 'avatar':
      return '🎭';
    case 'promotion':
      return '🎉';
    case 'social':
      return '💬';
    case 'achievement':
      return '🏆';
    case 'reminder':
      return '⏰';
    default:
      return '🔔';
  }
}
