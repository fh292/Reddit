function Searchbar({ handleChange }) {
  return (
    <input
      onChange={handleChange}
      placeholder="Search"
      className="flex justify-start items-center border border-black rounded-md p-1"
    />
  );
}

export default Searchbar;
