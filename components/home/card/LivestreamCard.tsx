const LivestreamCard = (props: any) => {
  return (
    <div className="col-span-3 ">
      <div
        className="livestream-card-wrapper relative rounded-xl p-1"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 1)), url(${props.data.img})`,
          backgroundSize: "auto 30vh",
          minHeight: "234px",
          maxHeight: "115px",
        }}
      >
        <div className="grid grid-rows-5 grid-flow-col gap-9">
          <div className="z-1 count row-span-1 inline mt-1">
            <p className="text-xs m-2 p-1 bg-idn-tertiary-red rounded-lg inline text-idn-secondary-red">
              terjadwal
            </p>
          </div>

          <div className="z-0 row-span-1">
            <div></div>
          </div>
          <div className="row-span-3 p-3">
            <div className="title-wrapper line-clamp-2 text-idn-white">
              <p className="font-bold  text-idn-white" style={{}}>
                {props.data.title}
              </p>
            </div>
            <div>
              <label className="z-10 text-xs  text-idn-white">
                {props.data.category}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivestreamCard;
