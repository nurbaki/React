import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [arama, setArama] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);

  const filtreli = useMemo(
    () =>
      users.filter((i) => i.name.toLowerCase().includes(arama.toLowerCase())),
    [users, arama]
  );

  const ekle = useCallback(() => {
    setUsers([...users, { id: users.length + 1, name: "osman" }]);
  }, [users]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setArama(text);
        }}
      >
        Search User
      </button>

      <Users users={filtreli} ekle={ekle} />
      {/* <Users users={users} /> */}
    </div>
  );
};

export default UseMemoCallBack;
