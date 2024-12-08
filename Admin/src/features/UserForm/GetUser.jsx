// import { useState } from "react";

// import Overlay from "../../ui/Overlay";
import { format } from "date-fns";
import Modal from "../../ui/Models";
import Menus from "../../ui/Menus";
import DeleteAction from "../../ui/DeleteAction";
import { DeleteUserFromList } from "../UserForm/useDeletUser";
import { HiPencil, HiTrash } from "react-icons/hi2";

function GetUser({ user }) {
  const { deleting } = DeleteUserFromList();
  // const [show, setShow] = useState(false);

  const {
    image,
    fristName,
    lastName,
    email,
    createdAt,
    isAdmin,
    _id: userId,
  } = user;

  const statusToTagName = {
    customer: "text-blue-700 bg-blue-100",
    admin: "text-green-700 bg-green-100",
    //
  };
  const tagStyle = statusToTagName[isAdmin];

  return (
    <div>
      <li
        className=" tableStayle border-b-2 w-full flex items-center"
        key={userId}
      >
        <div className=" relative flex gap-5 items-center">
          <img
            src={image || "default-user.jpg"}
            alt={image}
            className="w-[35px] h-[35px] rounded-full text-blue-600 bg-gray-400 object-cover"
          />
        </div>
        <h1>{fristName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        <h1
          className={`inline-block w-[70px] px-3 py-1 text-uppercase text-center text-[10px] font-semibold  rounded-full ${tagStyle}`}
        >
          {isAdmin}
        </h1>
        <h1>{format(createdAt, "MM-dd-yyyy")}</h1>

        <div className="flex justify-end items-center text-[16px]">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={userId} />

              <Menus.List id={userId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <DeleteAction
                  type="user"
                  onConfirm={() => deleting(userId)}
                  user={fristName}
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

export default GetUser;
