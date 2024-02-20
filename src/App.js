import { useEffect, useState } from "react";

const getUser = () => Promise.resolve({ id: 1, name: "Biba" });

const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search text ..."
      />
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  console.log(user);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <img className="image" src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searhes for {search ? search : "..."}</p>
    </div>
  );
};

export default App;
