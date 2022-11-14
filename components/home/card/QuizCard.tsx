import Image from "next/image";

const QuizCard = (props: any) => {
  return (
    <div className="col-span-3">
      <div className="quiz-card mb-5">
        <div className="thumbnail-wrapper ">
          <Image
            alt="thumbnail-quiz"
            className=" rounded-lg"
            src={props.data.img}
            width={300}
            height={300}
          />
        </div>

        <div className="text-xs text-idn-grey mt-2">{props.data.category}</div>

        <div>
          <label className="mt-1 text-base font-bold title line-clamp-2">
            {props.data.title}
          </label>
          <div className="text-xs text-idn-grey mt-2">
            <b>{props.data.total_play}</b>
            <span>&nbsp; plays</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
