import { HandIcon } from "../../icons";

export default function VoteComment() {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                {/* <!-- Heroicon name: solid/user-circle --> */}
                <HandIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 py-1.5">
            <div className="space-x-1 text-sm text-gray-600">
              <a href="#" className="mr-1 font-medium text-gray-900">
                flexbudget
              </a>
              Voted on this
              <a href="#" className="font-medium text-gray-900">
                Issue
              </a>
              <span className="whitespace-nowrap">2d ago</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
