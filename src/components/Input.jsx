import { useState } from "react";

export default function TextInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-4">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ex-3"
        className="border-2 p-2 rounded-lg w-3/5"
      />
    </div>
  );
}
