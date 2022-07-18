export default function SortIssues() {
  return (
    <ul className="absolute top-14 z-50 w-full rounded-br-lg rounded-bl-lg  border-l border-b border-r border-gray-200 bg-white pt-1 font-semibold">
      <li className="py-2 px-5 hover:bg-gray-50">Default</li>
      <li className="py-2 px-5 hover:bg-gray-50">Votes</li>
      <li className="py-2 px-5 hover:bg-gray-50">Severity</li>
    </ul>
  );
}
