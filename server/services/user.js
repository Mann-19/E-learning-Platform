import supabase from '../config/database.js';

// GET a single user service
export async function getUserById(userId) {
  const { data, error } = await supabase
    .from('profile')
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
  // signup user to supabase auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password
  });
  if(authError) {
    throw new Error("Error creating user: ", authError.message);
  }
  console.log("SERVICE - CREATE USER: supabase signup completed: ", authData);

  const { data, error } = await supabase
    .from('profile')
    .insert({
      full_name: userData.name,
      email: userData.email
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Error updating profile: ${error.message}`);
  }

  console.log("Profile updated successfully: ", data);
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