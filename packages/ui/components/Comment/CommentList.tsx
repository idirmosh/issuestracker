import SingleComment from "./SingleComment";
import VoteComment from "./VoteComment";

export default function CommentList() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        <SingleComment />
        <VoteComment />
        <SingleComment />
      </ul>
    </div>
  );
}
