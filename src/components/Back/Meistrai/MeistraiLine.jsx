import { useContext } from "react";
import BackContext from "../BackContext";

const MeistraiLine = ({ meistras }) => {
  const { setDeleteServisa, setModalServisas } = useContext(BackContext);
  const handleDelete = () => {
    setDeleteServisa(meistras);
  };

  const handleEdit = () => {
    setModalServisas(meistras);
  };

  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Vardas: {meistras.pavadinimas}</p>
            <p>Serviso adresas: {meistras.adresas}</p>
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

export default MeistraiLine;
