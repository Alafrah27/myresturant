import Modal from "../../ui/Models";
import CreateProduct from "./CreateProduct";

function AddProduct() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="product-form">
          <button
            type="submit"
            className="bg-blue-600 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            Add new Product
          </button>
        </Modal.Open>
        <Modal.Window name="product-form">
          <CreateProduct />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProduct;
