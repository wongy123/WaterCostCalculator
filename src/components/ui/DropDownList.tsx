import { useRef, useEffect } from "react";

interface Props {
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

const DropDownList = ({ items, onChange }: Props) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleItemClick = (item: string) => {
    onChange(item);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(e.target as Node)
      ) {
        detailsRef.current.removeAttribute("open");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <details className="dropdown" ref={detailsRef}>
      <summary className="btn m-1">Please select</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default DropDownList;
