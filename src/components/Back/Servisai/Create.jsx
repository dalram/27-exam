import { useContext, useState } from "react";
import BackContext from "../BackContext";
// import getBase64 from "../../../Functions/getBase64";

function Create() {
  const { setCreateData } = useContext(BackContext);
  const [pavadinimas, setPavadinimas] = useState("");
  const [adresas, setAdresas] = useState("");
  // const [photoPrint, setPhotoPrint] = useState(null);
  // const fileInput = useRef();
  const addClothing = () => {
    const obj = {
      pavadinimas,
      adresas,
      // photo: photoPrint,
    };
    setCreateData(obj);
    setPavadinimas("");
    setAdresas("");
    // setPhotoPrint(null);
    // fileInput.current.value = null;
  };

  // const doPhoto = () => {
  //   getBase64(fileInput.current.files[0])
  //     .then((photo) => setPhotoPrint(photo))
  //     .catch((_) => {
  //       // tylim, kad erroro nebutu
  //     });
  // };

  return (
    <>
      <div className="create-box">
        <div className="create-form">
          <div>
            <h2>Sukurti naują servisą</h2>
            <div className="formGroup">
              <span>Serviso pavadinimas</span>
              <input
                className="color-name"
                type="text"
                value={pavadinimas}
                onChange={(e) => setPavadinimas(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <span>Serviso adresas</span>
              <input
                type="text"
                value={adresas}
                onChange={(e) => {
                  setAdresas(e.target.value);
                }}
              />
            </div>
            {/* <div className="form-group photo-input">
              <label>Upload clothing photo</label>
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
            ) : null} */}
            <div>
              <div className="create-button">
                <button className="btn addButton" onClick={addClothing}>
                  Pridėti naują servisą
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
