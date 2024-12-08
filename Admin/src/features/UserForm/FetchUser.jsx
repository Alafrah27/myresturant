import { UseFetchUser } from "../../Hooks/UseFetch";
import Loading from "../../ui/Loading";
import GetUser from "./GetUser";

function PostProfile() {
  const { fetch, isPending } = UseFetchUser();

  return (
    <div className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
      <ul className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
        {isPending ? (
          <Loading />
        ) : (
          fetch?.map((item) => <GetUser key={item.id} user={item} />)
        )}
      </ul>
    </div>
  );
}

export default PostProfile;
