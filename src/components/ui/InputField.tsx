  /* To call, use
<InputField dataType="number or text" onInputChange={(value: number or string) => onFieldChange()}/> */


interface Props<Type extends number | string> {
  dataType: "number" | "text"; //accepts argument specifying type
  value: Type;
  onInputChange?: (value: Type) => void;
  placeHolder?: string;
}

const InputField = <Type extends number | string>({
  dataType,
  value,
  onInputChange,
  placeHolder = "Type here",
}: Props<Type>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

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
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputField;
