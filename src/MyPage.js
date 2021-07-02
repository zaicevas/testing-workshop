import { useState } from "react";

const MyPage = ({ title }) => {
  const [mutableTitle, setMutableTitle] = useState(title);

  const handleChangeTitleClick = () => {
    setMutableTitle("Mutated title");
  };

  return (
    <>
      {mutableTitle}
      <button onClick={handleChangeTitleClick}>Change title</button>
    </>
  );
};

export default MyPage;
