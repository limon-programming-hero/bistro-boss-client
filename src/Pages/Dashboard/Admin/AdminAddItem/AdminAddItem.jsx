import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import ItemAddUpdate from "../../../../Component/ItemAddUpdate/ItemAddUpdate";

const AdminAddItem = () => {
  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <SharedTitle
        subHeading={"What's New?"}
        heading={"Add an Item"}
      ></SharedTitle>
      <ItemAddUpdate isUpdate={false}></ItemAddUpdate>
    </div>
  );
};

export default AdminAddItem;
