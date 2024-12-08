import Modal from "../../ui/Models";
import CreatePickup from "./CreatePickup";

function AddPickup() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="pickup-form">
          <button
            type="submit"
            className="bg-blue-600 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            Add new Pickup
          </button>
        </Modal.Open>
        <Modal.Window name="pickup-form">
          <CreatePickup />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddPickup;
