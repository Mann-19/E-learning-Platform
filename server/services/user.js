import supabase from '../config/database.js';

// GET a single user service
export async function getUserById(userId) {
  const { data, error } = await supabase
    .from('User')
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

// POST a new user service
export async function createNewUser(userData) {
  const { data, error } = await supabase
    .from('User')
    .insert([userData])
    .select()
    .single();

  if (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }

  console.log(data);
  return data;
}

// PUT (update) a user service
export async function updateUserById(userId, userData) {
  const { data, error } = await supabase
    .from('User')
    .update(userData)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }

  return data;
}

// DELETE a user service
export async function deleteUserById(userId) {
  const { data, error } = await supabase
    .from('User')
    .delete()
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }

  return data;
}