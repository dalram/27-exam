import { useContext } from "react";
import BackContext from "../BackContext";

const MeistraiLine = ({ meistras }) => {
  const { setDeleteMeistras, setModalMeistras } = useContext(BackContext);
  const handleDelete = () => {
    setDeleteMeistras(meistras);
  };

  const handleEdit = () => {
    setModalMeistras(meistras);
  };

  return (
    <>
      <li className="margin-bot">
        <div className="item">
          <div className="item-info">
            <p>Vardas: {meistras.name}</p>
            <p>Dirba servise: {meistras.servisas}</p>
            <p>Tel.nr: {meistras.numeris ? meistras.numeris : '-'}</p>
            <p>Įvertinimas: {meistras.rating ? meistras.rating : 'Neturi įvertinimo'}</p>
          </div>
          {meistras.photo === null ? null : (
            <img src={meistras.photo} alt={meistras.name} className="line-img" />
          )}
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
