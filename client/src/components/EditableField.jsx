import { useState } from "react";
import { EditIcon, CheckIcon } from "lucide-react";

const EditableField = ({
  value,
  onChange,
  type = "input",
  className,
  placeholder = "Click to edit...",
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => setIsEditing(false);

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
            className={`${className} border-b outline-none resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
            className={`${className} border-b outline-none`}
            placeholder={placeholder}
          />
        )}
        <CheckIcon
          onClick={handleSave}
          className="cursor-pointer"
          size={20}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={``}>
        {value || <span className="text-gray-400">{placeholder}</span>}
      </div>
      <EditIcon
        onClick={() => setIsEditing(true)}
        className="cursor-pointer text-gray-500 mb-0.5"
        size={18}
      />
    </div>
  );
};

export default EditableField;
