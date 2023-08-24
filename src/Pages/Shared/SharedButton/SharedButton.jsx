const SharedButton = ({ text }) => {
  return (
    <div className="text-center">
      <button className="btn btn-outline border-0 border-b-2">
        {text || "click"}
      </button>
    </div>
  );
};

export default SharedButton;
