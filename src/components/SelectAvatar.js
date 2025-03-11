import { useState } from "react";

// Placeholder avatars
const avatars = [
  "https://example.com/avatar1.png",
  "https://example.com/avatar2.png",
  "https://example.com/avatar3.png",
];

const SelectAvatar = ({ onAvatarSelect, initialAvatar }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(initialAvatar);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleConfirm = () => {
    if (selectedAvatar) {
      onAvatarSelect(selectedAvatar); // Pass the selected avatar back to the parent component
    } else {
      alert("Please select an avatar.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Select Your Avatar</h1>
      <div className="flex space-x-4 mb-8">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className={`w-24 h-24 rounded-full cursor-pointer border-4 ${
              selectedAvatar === avatar ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleAvatarSelect(avatar)}
          />
        ))}
      </div>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleConfirm}
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default SelectAvatar;
