import { ChatIcon, PencelIcon } from "../../icons";

export default function SingleComment() {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <img
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
              src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />

            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-around rounded-full bg-indigo-600 px-0.5 py-px">
              <ChatIcon className="h-4 w-4 fill-white" />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-900">
                  idirmosh
                </a>
              </div>
              <p className="mt-0.5 text-xs text-gray-500">Commented 6d ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum
                nec varius. Et diam cursus quis sed purus nam.
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center rounded-md border border-gray-200 py-1 px-2 text-xs text-gray-900 hover:border-gray-400 hover:shadow">
            <PencelIcon className="mr-1 h-3 w-3 fill-gray-600" />
            Edit
          </div>
        </div>
      </div>
    </li>
  );
}
