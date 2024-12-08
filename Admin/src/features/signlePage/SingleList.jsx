function SingleList({ item }) {
 

  return (
    <div className="flex flex-col gap-4 w-full py-3 px-5">
      <li key={item._id} className="text-center gap-4 w-full mx-auto  py-3 px-5">
        <img
          src={item.image}
          alt="not found"
          className="w-full object-cover rounded-sm"
        />
      </li>
    </div>
  );
}

export default SingleList;
