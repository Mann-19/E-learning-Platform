import { getModuleById, getAllModules, createNewModule, updateModuleById, deleteModuleById } from "../services/module.js";

// Fetch single module function
const getModule = async (req, res) => {
    const { id } = req.params;
    try {
        const module = await getModuleById(id); 
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }
        res.json(module);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
}

// Fetch all modules function
const getModules = async (req, res) => {
    try {
        const modules = await getAllModules();
        res.json(modules);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

// Create a new module function
const createModule = async (req, res) => {
    try {
        const { course_id, title, content_type, module_data, module_order, duration } = req.body;

        const newModule = await createNewModule({ course_id, title, content_type, module_data, module_order, duration });

        if (!newModule) {
            return res.status(400).json({ message: "Error creating module" });
        }
        res.status(201).json(newModule);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

// Update Module function
const updateModule = async (req, res) => {
    try{
        const {id} = req.params;
        const moduleData = req.body;

        const updatedModule = await updateModuleById(id, moduleData);

        if (!updatedModule) {
            return res.status(404).json({ message: "Module not found" });
        }
        res.json(updatedModule);
    } catch(error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
}

// Delete Module function
const deleteModule = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedModule = await deleteModuleById(id);

        if (!deletedModule) {
            return res.status(404).json({ message: "Module not found" });
        }

        res.json({ message: "Module deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};

export { getModules, getModule, createModule, updateModule, deleteModule };