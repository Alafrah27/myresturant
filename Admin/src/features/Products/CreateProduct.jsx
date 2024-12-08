import { useForm } from "react-hook-form";
import { CreateProducts, UpdateProducts } from "./useProduct";
import { GetCategory } from "../Category/useCategory";

function CreateProduct({ productToEdit = {}, onCloseModal }) {
  const { createProduct, isLoading } = CreateProducts();
  const { updateProduct, isEditing } = UpdateProducts();
  const { category } = GetCategory();

  const { _id: productId, ...editValues } = productToEdit;
  console.log("...editValues", editValues);

  const isEditSession = Boolean(productId);
  console.log("id", isEditSession);
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const IsWorking = isEditing || isLoading;

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      let uploadImage;

      if (isEditSession && typeof data.image === "string") {
        // If the image is already a string (base64 or URL)
        uploadImage = data.image;
      } else if (data.image && data.image[0]) {
        // Ensure the file input is valid
        const imageFile = await readFileAsDataURL(data.image[0]);
        uploadImage = imageFile; // This will be the base64 string after reading
      } else {
        throw new Error("Invalid image input. Please provide an image file.");
      }

      if (isEditSession) {
        updateProduct(
          {
            newProductData: { ...data, image: uploadImage },
            id: productId,
          },
          {
            onSuccess: (data) => {
              console.log(data);
              reset();
              onCloseModal?.();
            },
          }
        );
      } else {
        const productData = { ...data, image: uploadImage };
        createProduct(productData, {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        });
      }
    } catch (error) {
      console.log("Error submitting the form:", error);
    }
  };

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return (
    <div className="p-4 w-[500px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-col gap-5">
          <label>Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
            placeholder="Enter Product Name"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={IsWorking}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-5">
          <label>Description</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: "This field is required" })}
            placeholder="Enter Product Description"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={IsWorking}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label>Category</label>
          <select
            id="category"
            {...register("category", {
              required: isEditSession ? false : "This field is required",
            })}
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
          >
            {category?.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label>Discount</label>
          <input
            type="number"
            id="discount"
            {...register("discount", {
              required: "This field is required",
              validate: (value) => {
                getValues().price < value ||
                  "Price must be greater than discount";
              },
            })}
            placeholder="Enter Discount"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={IsWorking}
          />
          {errors.discount && (
            <p className="text-red-500">{errors.discount.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label>Price</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: "This field is required" })}
            placeholder="Enter Product Price"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={IsWorking}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label>Upload Image</label>
          <input
            type="file"
            id="image"
            {...register("image", {
              required: isEditSession ? false : "This field is required",
            })}
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={IsWorking}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <div className="flex flex-row justify-end items-center my-1 gap-4">
          <button
            disabled={IsWorking}
            className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            {isEditSession ? "Update Product" : "Create Product"}
          </button>
          <button
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

export default CreateProduct;
