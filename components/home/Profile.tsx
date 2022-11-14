import Image from "next/image";

const ProfileComponent = (props: any) => {
  return (
    <div className="container flex flex-wrap md:justify-between">
      <div className="md:col-span-4 sm:col-span-12">
        <div className="inline-flex flex-wrap gap-4">
          <div className="rounded">
            {props.profileData?.img && (
              <Image
                src={props.profileData?.img}
                className="rounded-full"
                alt="profile Picture"
                width={100}
                height={100}
              />
            )}
          </div>
          <div>
            {/* title/status */}
            <div>
              <label className="text-xs ">Verified Creator</label>
            </div>

            {/* name */}
            <div>
              <label className="text-base font-bold">
                {props.profileData?.full_name}
              </label>
            </div>

            {/* following/followers */}
            <div className="flex flex-wrap mt-2 gap-8">
              <div className="col">
                <div>
                  <label className="text-xs fw-light">Following</label>
                  <br />
                  <label className="text-base font-bold">
                    {props.profileData?.following}
                  </label>
                </div>
              </div>
              <div className="col">
                <div>
                  <label className="text-xs fw-light">Followers</label>
                  <br />
                  <label className="text-base font-bold">
                    {props.profileData?.followers}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-6 sm:col-span-12">
        <div className="bio mb-4 md:mt-0 mt-4">
          <label>{props.profileData?.bio}</label>
        </div>
      </div>

      <button className="md:w-full flex-grow py-3 rounded-xl bg-idn-primary-red text-idn-white">
        Follow
      </button>
    </div>
  );
};

export default ProfileComponent;
