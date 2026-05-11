import { createClient } from '@supabase/supabase-js';

const supabaseUrl = undefined                                   ;
const supabaseKey = undefined                                                       ;
{
  throw new Error("Les variables d'environnement Supabase sont manquantes");
}
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (...args) => {
      return fetch(...args);
    }
  }
});

export { supabase as s };
