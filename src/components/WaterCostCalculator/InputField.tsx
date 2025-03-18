import { useState } from "react";

interface Props {
  onInputChange?: (value: number) => void;
}

const InputField = ({ onInputChange }: Props) => {
  const [inputData, setInputData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputData(newValue);

    const numericValue = newValue === "" ? 0 : parseFloat(newValue);

    if (onInputChange && !isNaN(numericValue)) {
      onInputChange(numericValue);
    }
  };

  return (
    <input
      type="number"
      placeholder="Type here"
      className="input"
      value={inputData}
      onChange={handleChange}
    />
  );
};

export default InputField;
