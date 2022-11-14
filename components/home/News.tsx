import { NewsDataTypes } from "../../types";
import NewsCard from "./card/NewsCard";

const ProfileNews = (props: any) => {
  return (
    <div className="mt-4">
      <div className="row-auto">
        {props.dataNews.map((each: NewsDataTypes, index: number) => (
          <NewsCard data={each} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProfileNews;
