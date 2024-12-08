import DeleteAction from "./DeleteAction";

function Overlay({ setShow, user, users }) {
  return (
    <div className="absolute  flex justify-center items-center z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-[5px] w-full h-full ">
      <DeleteAction setShow={setShow} user={user} users={users} />
    </div>
  );
}

export default Overlay;
