import { BoxIcon } from "../../../icons";

interface IEmptyProject {
  setModal: (arg0: boolean) => boolean;
}

export default function EmptyProjectState({ setModal }: IEmptyProject) {
  return (
    <li
      onClick={() => setModal(true)}
      className="col-span-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-dashed border-gray-200 bg-gray-50 hover:border-gray-400 hover:bg-white"
    >
      <BoxIcon className="mb-2 h-14 w-14 fill-neutral-400" />
      <div className="text-md items-start font-bold text-neutral-900">
        New Project
      </div>
      <p className="mt-1 text-xs text-gray-700">
        Get started by creating a new project.
      </p>
    </li>
  );
}
