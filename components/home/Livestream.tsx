import { LivestreamDataTypes } from "../../types";

import LivestreamCard from "./card/LivestreamCard";

const ProfileLivestream = (props: any) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-6 gap-9">
        {props.dataLivestreams.map(
          (each: LivestreamDataTypes, index: number) => (
            <LivestreamCard data={each} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default ProfileLivestream;
