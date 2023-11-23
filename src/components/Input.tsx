
import React, { useState, ChangeEvent } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, onChange }) => {
  const [valor, setValor] = useState("");
  const uniqueId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', gap: 5 }}>
      <label htmlFor={uniqueId} style={{
        flex: 1,
      }}>
        {label}
      </label>
      <input
        id={uniqueId}
        type="text"
        placeholder={placeholder}
        value={valor}
        style={{
          flex: 1,
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValor(e.target.value);
          onChange(e);
        }}
      />
    </div>
  );
};

export default Input;
