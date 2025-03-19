import { useState } from "react";

{
  /* To call, use
<InputField dataType="number or text" onInputChange={(value: number or string) => onFieldChange()}/> */
}

interface Props<Type extends number | string> {
  dataType: "number" | "text"; //accepts argument specifying type
  onInputChange?: (value: Type) => void;
  placeHolder?: string;
}

const InputField = <Type extends number | string>({
  dataType,
  onInputChange,
  placeHolder = "Type here",
}: Props<Type>) => {
  const [inputData, setInputData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputData(newValue);

    if (dataType === "number") {
      const numericValue = newValue === "" ? 0 : parseFloat(newValue);

      if (onInputChange && !isNaN(numericValue)) {
        onInputChange(numericValue as Type);
      }
    } else {
      if (onInputChange) {
        onInputChange(newValue as Type);
      }
    }
  };

  return (
    <input
      type={dataType}
      placeholder={placeHolder}
      className="input"
      value={inputData}
      onChange={handleChange}
    />
  );
};

export default InputField;
