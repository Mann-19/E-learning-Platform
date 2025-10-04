import Navbar from "../components/Navbar";
import EditableField from "../components/EditableField";
import toast from "react-hot-toast";
import { useAuthContext } from "../hooks/useAuthContext";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ModuleTile from "../components/ModuleTile";

const DraftEdit = () => {
  const [draft, setDraft] = useState({});
  const [modules, setModules] = useState([]);

  let { id } = useParams();
  const draftId = id?.trim();

  const handleSaveChanges = async () => {
    const draftChanges = {
      title: draft.title,
      description: draft.description,
    };

    const { data: newDraft, error } = await supabase
      .from("courses")
      .update(draftChanges)
      .eq("id", draftId)
      .select();
    
      const { error: moduleError } = await supabase
        .from("modules")
        .upsert(modules.map(m => ({ ...m, course_id: draftId })));

    if (error || moduleError ) {
      toast.error("Error saving chnages");
      console.error(error || moduleError);
    } else {
      // console.log("Changes Saved successfully: ", newDraft);
      toast.success("Changes saved successfully");
    }
  };

  const getDraftDetails = async (id) => {
    const { data: draftDetails, error } = await supabase
      .from("courses")
      .select("*, modules(*)")
      .eq("id", id)
      .single();

    if (error) {
      toast.error(error);
    } else {
      setDraft(draftDetails);
      setModules(draftDetails.modules || []);
      console.log("Draft: ", draftDetails);
    }
  };

  const handleAddModule = (moduleData) => {
    setModules([...modules, { title: "", course_id: draftId }]);
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index] = { ...updatedModules[index], [field]: value };
    setModules(updatedModules);
  }

  // GET current Draft data(progress)
  useEffect(() => {
    getDraftDetails(draftId);
  }, []);

  return (
    <div className="">
      <Navbar />

      <h2 className="ml-10 mt-10 text-base text-gray-500 underline">
        Continue Editing
      </h2>
      <section className="p-10">
        {/* Title */}
        <div className="flex justify-between">
          <EditableField
            value={draft.title || ""}
            onChange={(newValue) =>
              setDraft((prev) => ({ ...prev, title: newValue }))
            }
            className="text-2xl font-bold"
            placeholder="Enter course title"
          />

          <button
            onClick={handleSaveChanges}
            className="bg-yellow-300 px-4 py-2 rounded-sm font-medium text-black/80 cursor-pointer"
          >
            Save Changes
          </button>
        </div>

        {/* Description */}
        <EditableField
          value={draft.description}
          onChange={(newValue) =>
            setDraft((prev) => ({ ...prev, description: newValue }))
          }
          type="textarea"
          className="text-lg font-semibold text-gray-500 mt-4 w-[400px]"
          placeholder="Enter description"
        />

        {/* Module part */}
        <div className="">
          <button
            className="bg-yellow-300 px-4 py-2 rounded-sm font-medium text-black/80 cursor-pointer mt-4 w-full"
            onClick={handleAddModule}
          >
            Add module
          </button>

          {modules.map((module, index) => (
            <ModuleTile
              key={module.id || index}
              moduleData={module}
              onChange={(field, value) =>
                handleModuleChange(index, field, value)
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DraftEdit;
