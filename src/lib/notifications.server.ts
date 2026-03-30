import { supabase } from './supabase';
import type { CreateNotificationInput, Notification } from './notifications';

export type { CreateNotificationInput, Notification };

export async function createNotification(
  userId: string,
  notification: CreateNotificationInput
): Promise<Notification> {
  const { data, error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      ...notification,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating notification:', error);
    throw error;
  }

  return data;
}
