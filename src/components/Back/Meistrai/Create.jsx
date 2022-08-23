import { useContext, useState, useRef } from "react";
import BackContext from "../BackContext";
import getBase64 from "../../../Functions/getBase64";

function Create() {
  const { setCreateMeistra, servisai } = useContext(BackContext);
  const [vardas, setVardas] = useState("");
  const [servisas, setServisas] = useState(0);
  const [adresas, setAdresas] = useState("");
  const [numeris, setNumeris] = useState("+370");
  const [photoPrint, setPhotoPrint] = useState(null);
  const fileInput = useRef();
  const addMeistras = () => {
    const obj = {
      vardas,
      serviso_id: parseInt(servisas) ? parseInt(servisas) : null,
      adresas,
      numeris: numeris === '+370' ? "" : numeris,
      photo: photoPrint,
    };
    setCreateMeistra(obj);
    setServisas(0);
    setVardas("");
    setAdresas("");
    setNumeris("+370");
    setPhotoPrint(null);
    fileInput.current.value = null;
  };

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim, kad erroro nebutu
      });
  };

  return (
    <>
      <div className="create-box">
        <div className="create-form">
          <div>
            <h2>Įregistruoti naują meistą</h2>
            <div className="formGroup">
              <span>Meistro vardas</span>
              <input
                className="color-name"
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
            <div className="form-group photo-input">
              <label>Pridėkite meistro nuotrauką</label>
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
            <div className="formGroup">
              <span>Meistro adresas</span>
              <input
                type="text"
                value={adresas}
                onChange={(e) => {
                  setAdresas(e.target.value);
                }}
              />
            </div>
            <div className="formGroup">
              <span>Meistro numeris</span>
              <input
                type="text"
                value={numeris}
                onChange={(e) => {
                  setNumeris(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="create-button">
                <button className="btn addButton" onClick={addMeistras}>
                  Įregistruoti naują meistrą
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
