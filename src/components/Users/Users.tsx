import useSWR from 'swr';
import axios from 'axios';

type User = {
  id: number;
  name: string;
};

const fetcher = (url: string) => axios.get<User[]>(url).then((d) => d.data);

const Users = () => {
  const { data, isLoading, error } = useSWR<User[]>('/api/users', fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{JSON.stringify(error.message)}</div>;

  return (
    <div>
      <span>ユーザー一覧</span>
      <ul>
        {data?.map((e) => (
          <li key={e.id.toString()}>
            <div>
              id:{e.id} name:{e.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
