const ProfileTabs = (props: any) => {
  const handleChangeTab = (value: string) => {
    props.setSelectedTab(value);
  };

  return (
    <div className="mt-4 grid grid-flow-col auto-cols-max align-middle justify-evenly">
      <div className="">
        <button
          className={` py-2 px-5 rounded-xl  ${
            props.selectedTab === "news"
              ? "text-idn-primary-red bg-idn-tertiary-red border-none"
              : "bg-white text-black border-solid border border-idn-silver"
          }`}
          onClick={() => handleChangeTab("news")}
        >
          Berita
        </button>
      </div>
      <div className="">
        <button
          className={`py-2 px-5 p-2  rounded-xl ${
            props.selectedTab === "livestream"
              ? "text-idn-primary-red bg-idn-tertiary-red border-none"
              : "bg-white text-black border-solid border border-idn-silver"
          }`}
          onClick={() => handleChangeTab("livestream")}
        >
          Livestream
        </button>
      </div>
      <div className="">
        <button
          className={`py-2 px-5 p-2  rounded-xl ${
            props.selectedTab === "quiz"
              ? "text-idn-primary-red bg-idn-tertiary-red border-none"
              : "bg-white text-black border-solid border border-idn-silver"
          }`}
          onClick={() => handleChangeTab("quiz")}
        >
          Quiz
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
