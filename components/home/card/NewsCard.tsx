import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { id } from "date-fns/locale";

const NewsCard = (props: any) => {
  const date = parseISO(props.data.date);
  return (
    <Link href={`/news/${props.data.id}`}>
      <div className="my-5 news-card">
        <div className=" justify-between grid grid-cols-6">
          <div className="title-section col-span-4 gap-2">
            <div>
              <label className="text-xs fc-grey">
                {
                  format(date, "d LLLL yyyy", { locale: id })
                  // .toLocaleDateString("id-ID", {
                  // timeZone: "Asia/Jakarta",
                  // })
                }
              </label>
            </div>
            <div>
              <label className="text-base font-bold">{props.data.title}</label>
            </div>
          </div>

          <div className="thumbnail-wrapper col-span-2">
            <Image
              alt="thumbnail"
              priority={true}
              className="w-28  h-auto float-right"
              src={props.data.img}
              width={640}
              height={480}
            />
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <div className="text-xs fc-grey">
            <label className="text-capitalize">{props.data.category}</label>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
