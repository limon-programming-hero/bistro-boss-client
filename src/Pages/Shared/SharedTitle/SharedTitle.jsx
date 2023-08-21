const SharedTitle = ({ subHeading, heading }) => {
  return (
    <div className="mt-10 items-center flex justify-center">
      <div className="text-center">
        <p className="text-yellow-300 ">---{subHeading}---</p>
        <div className="divider w-full "></div>
        <h3 className="text-2xl uppercase">{heading}</h3>
        <div className="divider w-full "></div>
      </div>
    </div>
  );
};

export default SharedTitle;
