import { QuizDataTypes } from "../../types";
import QuizCard from "./card/QuizCard";

const ProfileQuiz = (props: any) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-6 gap-9">
        {props.dataQuizzes?.map((each: QuizDataTypes, index: number) => (
          <QuizCard data={each} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProfileQuiz;
