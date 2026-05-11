import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? (typeof window === 'undefined' ? import.meta.env.SUPABASE_URL : undefined);
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ?? (typeof window === 'undefined' ? import.meta.env.SUPABASE_ANON_KEY : undefined);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Les variables d\'environnement Supabase sont manquantes. ' +
    'Définissez PUBLIC_SUPABASE_URL et PUBLIC_SUPABASE_ANON_KEY, ' +
    'ou SUPABASE_URL et SUPABASE_ANON_KEY pour les fonctions serveur.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: {
    fetch: (...args: any[]) => {
      // @ts-ignore
      return fetch(...args);
    },
  },
});

import type { User } from '../types/user';

export type Profile = User;

// Fonction pour récupérer le profil utilisateur
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Erreur lors de la récupération du profil:', error);
    return null;
  }

  return data;
}

// Fonction pour créer ou mettre à jour un profil
export async function upsertProfile(profile: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .upsert(profile)
    .select()
    .single();

  if (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    throw error;
  }

  return data;
}

// Fonction pour télécharger un avatar
export async function uploadAvatar(file: File, userId: string) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `avatars/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Erreur lors du téléchargement de l\'avatar:', uploadError);
    throw uploadError;
  }

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);

  return data.publicUrl;
}
