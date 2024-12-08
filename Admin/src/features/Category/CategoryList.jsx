import { HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Models";
import DeleteAction from "../../ui/DeleteAction";
import { DeleteCategory } from "./useCategory";
import Loading from "../../ui/Loading";

function CategoryList({ item , isLoding}) {
  const { image: cover, name: names, _id: categoryId } = item;

  const { deletingCategory } = DeleteCategory();
  return (
    <div>
      <li
        className="flex flex-col flex-grow gap-4 list-none no-underline w-full "
        key={categoryId}
      >
        <div className="flex  justify-end  font-bold text-1xl w-full my-2">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={categoryId} />

              <Menus.List id={categoryId}>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash size={20} />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <DeleteAction type="category"
                  user={names}
                  onConfirm={()=>deletingCategory(categoryId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
        <img src={isLoding ? <Loading /> : cover} alt="" className="object-cover w-[250px] h-[250px] text-center" />
        <h1>{names}</h1>
      </li>
    </div>
  );
}

export default CategoryList;
