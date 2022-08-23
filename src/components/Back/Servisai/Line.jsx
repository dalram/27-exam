import { useContext } from "react";
import BackContext from "../BackContext";

const Line = ({ servisas }) => {
  const { setDeleteServisa, setModalServisas } = useContext(BackContext);
  const handleDelete = () => {
    setDeleteServisa(servisas);
  };

  const handleEdit = () => {
    setModalServisas(servisas);
  };

  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Serviso pavadinimas: {servisas.pavadinimas}</p>
            <p>Serviso adresas: {servisas.adresas}</p>
          </div>
          <div className="item-buttons">
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn red-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Line;
