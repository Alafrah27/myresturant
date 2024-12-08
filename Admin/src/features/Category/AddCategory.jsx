import Modal from "../../ui/Models";
import CreateCategory from "./CreateCategory";

function AddCategory() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="category-form">
          <button
            type="submit"
            className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            Add new Category
          </button>
        </Modal.Open>
        <Modal.Window name="category-form">
          <CreateCategory />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCategory;
