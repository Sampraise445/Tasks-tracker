import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (typeof onUpdate === "function") {
      onUpdate(task.id, { ...task, text: editText });
    } else {
      console.warn("onUpdate is not a function");
    }
    setIsEditing(false);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>
            {task.text}
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <span className="Fa">
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(task.id)}
              />
            </span>
          </h3>
          <p>{task.day}</p>
        </>
      )}
    </div>
  );
};

export default Task;
