import Modal from "../../ui/Models";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import DeleteAction from "../../ui/DeleteAction";
import { formatCurrency } from "../../lib/Currency";
import { DeleteProduct } from "./useProduct";
import SinglePage from "../signlePage/SinglePage";
import CreateProduct from "./CreateProduct";
// import { Link } from "react-router-dom";

function ProductList({ item }) {
  const { image, name, description, price, discount, _id: productId } = item;
  console.log('productId', productId);

  const { deleteProduct } = DeleteProduct();
  return (
    <div>
      <li
        className=" productList border-b-[2px] w-full flex items-center  "
        key={productId}
      >
        <Modal>
          <Modal.Open opens="single">
            <img
              src={image || "default-user.jpg"}
              alt={image}
              className="w-[40px] h-[40px] rounded-s-sm text-blue-600 bg-gray-400 object-cover cursor-pointer"
            />
          </Modal.Open>

          <Modal.Window name="single">
            <SinglePage id={productId} />
          </Modal.Window>
        </Modal>

        <h1>{name}</h1>
        <h1>{description.slice(0, 40)}</h1>
        <h1>{discount > 0 ? formatCurrency(discount) : formatCurrency(0)}</h1>
        <h1>{formatCurrency(price)}</h1>

        <div className="flex justify-end items-center text-[16px]">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={productId} />

              <Menus.List id={productId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateProduct productToEdit={item} />
              </Modal.Window>

              <Modal.Window name="delete">
                <DeleteAction
                  type="user"
                  user={name}
                  onConfirm={() => deleteProduct(productId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>

        {/* {show && (
          <Overlay
            show={show}
            setShow={setShow}
            user={user?._id}
            users={user.fristName}
          />
        )} */}
      </li>
    </div>
  );
}

export default ProductList;
