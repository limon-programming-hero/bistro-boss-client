const SharedButton = ({ text, color }) => {
  const bgColor = color ? color : "black";
  return (
    <div className="text-center my-4">
      <button
        className={`btn btn-outline text-${bgColor} border-0 border-b-2 border-b-${bgColor}`}
      >
        {text || "Click"}
      </button>
    </div>
  );
};

export default SharedButton;
