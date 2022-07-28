import { useState } from "react";
import { CheckIcon, CircleIcon } from "../../icons";

interface IRadioProps {
  type: string;
  setParentState: (params: any) => void;
}

export default function DoubleChoiceRadioGroup(props: IRadioProps) {
  const { type, setParentState } = props;
  const [current, setCurrent] = useState("yes");
  const [selected, _] = useState(current === "yes");

  const handleSelect = (event: any) => {
    setCurrent(event.target.value);

    setParentState((prevState: any) => ({
      ...prevState,
      [type]: event.target.defaultChecked,
    }));
  };

  const validateCurrent = (value: string) => Boolean(current === value);

  const InputIcon = (value: string) =>
    validateCurrent(value) ? (
      <CheckIcon className="mr-2 h-4 w-4" />
    ) : (
      <CircleIcon className="mr-2 h-4 w-4" />
    );
  const baseStyles =
    "relative flex cursor-pointer items-center rounded-lg border py-[10px] pl-3 pr-4 shadow-sm stroke-gray-400 text-gray-700";

  const activeStyles = selected && "border-indigo-600 text-indigo-600";

  return (
    <div className="outli flex space-x-4">
      <label
        className={`${baseStyles} ${validateCurrent("yes") && activeStyles}`}
      >
        <input
          value="yes"
          type="radio"
          defaultChecked={selected}
          className="sr-only"
          onClick={handleSelect}
        />
        <div className="flex items-center">
          <div className="flex text-sm">
            {InputIcon("yes")}
            <p className="font-medium ">Yes</p>
          </div>
        </div>
      </label>
      <label
        className={`${baseStyles} ${validateCurrent("no") && activeStyles}`}
      >
        <input
          value="no"
          type="radio"
          defaultChecked={!selected}
          className="sr-only"
          onClick={handleSelect}
        />
        <div className="flex items-center">
          <div className="flex text-sm">
            {InputIcon("no")}
            <p className="font-medium">No</p>
          </div>
        </div>
      </label>
    </div>
  );
}
