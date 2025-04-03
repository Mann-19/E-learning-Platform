import supabase from '../config/database.js';

// GET a single user service
export async function getUserById(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

  return data;
}

// GET all users service
export async function getAllUsers() {
  const { data, error } = await supabase
    .from('User')
    .select()

  if (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }

  return data;
}