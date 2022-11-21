import FlipMove from "react-flip-move";
import { Thumbnail } from "../components";
export default function Movie({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 gap-4 xl:grid-cols-3 3xl:felx flex-wrap justify-center">
      {results.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
}
