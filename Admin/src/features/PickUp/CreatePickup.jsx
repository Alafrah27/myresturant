import { useForm } from "react-hook-form";
import { CreatePickupOrder, UpdateAllPickup } from "./usePickup";

function CreatePickup({ pickupToEdit = {}, onCloseModal }) {
  const { createPickup, isLoading } = CreatePickupOrder();
  const { updateAllPickup, isEditing } = UpdateAllPickup();
  const { _id: pickupId, ...editValues } = pickupToEdit;
  const isEditSession = Boolean(pickupId);
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const IsWorking = isEditing || isLoading;

  function onSubmit(data) {
    if (isEditSession) {
      updateAllPickup(
        { ...data, id: pickupId },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createPickup(
        { ...data },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <div className="p-4 w-[500px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <label>Order Number</label>
          <input
            type="text"
            id="pickUpNumber"
            {...register("pickUpNumber", {
              required: "This field is required",
            })}
            placeholder="Enter Order Nameber"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-5">
          <label>Company Name</label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", {
              required: isEditSession ? false : "This field is required",
            })}
            placeholder="Enter Company Name"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="flex flex-row justify-end items-center my-1 gap-4">
          <button
            disabled={IsWorking}
            className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            {isEditSession ? "Update pickup" : "Create pickup"}
          </button>
          <button
            disabled={IsWorking}
            type="button"
            className="bg-red-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePickup;
