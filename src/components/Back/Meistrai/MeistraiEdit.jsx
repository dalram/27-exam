import { useContext, useEffect, useState, useRef } from "react";
import BackContext from "../BackContext";
import getBase64 from "../../../Functions/getBase64";

const MeistraiEdit = () => {
  const { setEditMeistras, setModalMeistras, modalMeistras, servisai } =
    useContext(BackContext);
  const [vardas, setVardas] = useState("");
  const [servisas, setServisas] = useState(0);
  const [numeris, setNumeris] = useState("+370");
  const [photoPrint, setPhotoPrint] = useState(null);
  const fileInput = useRef();

  useEffect(() => {
    if (null === modalMeistras) {
      return;
    }
    setVardas(modalMeistras.name);
    setServisas(modalMeistras.servisas);
    setPhotoPrint(modalMeistras.photo);
    setNumeris(modalMeistras.numeris)
    // fileInput.current = modalMeistras.photo;
  }, [modalMeistras]);

  const handleEdit = () => {
    const data = {
      id: modalMeistras.id,
      vardas,
      serviso_id: parseInt(servisas) ? parseInt(servisas) : null,
      numeris: numeris === "+370" ? "" : numeris,
      photo: photoPrint,
    };
    setEditMeistras(data);
    setModalMeistras(null);
  };
  if (null === modalMeistras) {
    return null;
  }

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim, kad erroro nebutu
      });
  };
  const handleDeletePhoto = () => {
    // fileInput.current = null;
    setPhotoPrint(null);
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalMeistras(null)}>X</button>
          </div>
          <div className="title">
            <h2>Meistro informacijos koregavimas</h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <span>Meistro vardas</span>
                <input
                  type="text"
                  value={vardas}
                  onChange={(e) => setVardas(e.target.value)}
                />
              </div>
              <div className="formGroup">
                <span>Kokiame servise dirba</span>
                <select
                  onChange={(e) => {
                    setServisas(e.target.value);
                    console.log(parseInt(servisas));
                  }}
                  value={servisas}
                >
                  <option value="0" disabled>
                    Pasirinkti servisą
                  </option>
                  {servisai
                    ? servisai.map((servisas) => (
                        <option value={servisas.id} key={servisas.id}>
                          {servisas.pavadinimas}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className="formGroup">
                <span>Telefono numeris</span>
                <input
                  type="text"
                  value={numeris}
                  onChange={(e) => {
                    setNumeris(e.target.value);
                  }}
                />
              </div>
              <div className="form-group photo-input">
                <label>Update clothing photo</label>
                <input
                  ref={fileInput}
                  type="file"
                  className="form-control"
                  onChange={doPhoto}
                />
              </div>
              {photoPrint ? (
                <div className="photo-bin">
                  <img src={photoPrint} alt="nice" />
                </div>
              ) : null}
            </form>
          </div>
          <div className="modalButtons">
            <button className="red-button" onClick={handleDeletePhoto}>
              Delete photo
            </button>
            <button onClick={handleEdit}>Save changes</button>
            <button
              className="red-button"
              onClick={() => setModalMeistras(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeistraiEdit;
