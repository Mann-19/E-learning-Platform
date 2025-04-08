import supabase from "../config/database.js";

// GET a single module service
export async function getModuleById(moduleId) {
    try {
        const { data, error } = await supabase
        .from("Module")
        .select("*")
        .eq("id", moduleId) 
        .single();

        if (error) {
            throw new Error(`Error fetching module: ${error.message}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error fetching module: ${error.message}`);
    }
}

// GET all modules service
export async function getAllModules() {
    try {
        const { data, error } = await supabase
        .from("Module")
        .select("*");
        
        if (error) {
            throw new Error(`Error fetching modules: ${error.message}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error fetching modules: ${error.message}`);
    }
}

// POST a new module service
export async function createNewModule(moduleData) {
    try {
        const { data, error } = await supabase
        .from("Module")
        .insert([moduleData])
        .select()
        .single();

        if (error) {
            throw new Error(`Error creating module: ${error.message}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error creating module: ${error.message}`);
    }
}

// PUT (update) a module service
export async function updateModuleById(moduleId, moduleData) {
    try {
        const { data, error } = await supabase
        .from("Module")
        .update(moduleData)
        .eq("id", moduleId)
        .select()
        .single();

        if (error) {
            throw new Error(`Error updating module: ${error.message}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error updating module: ${error.message}`);
    }
}

// DELETE a module service
export async function deleteModuleById(moduleId) {
    try {
        const { data, error } = await supabase
        .from("Module")
        .delete()
        .eq("id", moduleId)
        .select()
        .single();

        if (error) {
            throw new Error(`Error deleting module: ${error.message}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error deleting module: ${error.message}`);
    }
}