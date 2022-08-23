import { useContext, useEffect, useState } from "react";
import BackContext from "../BackContext";
// import getBase64 from "../../../Functions/getBase64";

const Edit = () => {
  const { setEditServisa, setModalServisas, modalServisas } =
    useContext(BackContext);
  const [pavadinimas, setPavadinimas] = useState('');
  const [adresas, setAdresas] = useState('');
  // const [photoPrint, setPhotoPrint] = useState(null);
  // const fileInput = useRef();

  useEffect(() => {
    if (null === modalServisas) {
      return;
    }
    setPavadinimas("");
    setAdresas("");
    // fileInput.current = modalProduct.photo;
  }, [modalServisas]);

  const handleEdit = () => {
    const data = {
      id: modalServisas.id,
      pavadinimas,
      adresas
      // photo: photoPrint,
    };
    // console.log(parseInt(price));
    // console.log(parseFloat(price));
    setEditServisa(data);
    setModalServisas(null);
  };
  if (null === modalServisas) {
    return null;
  }

  // const doPhoto = () => {
  //   getBase64(fileInput.current.files[0])
  //     .then((photo) => setPhotoPrint(photo))
  //     .catch((_) => {
  //       // tylim, kad erroro nebutu
  //     });
  // };
  // const handleDeletePhoto = () => {
  //   // fileInput.current = null;
  //   setPhotoPrint(null);
  // }
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalServisas(null)}>X</button>
          </div>
          <div className="title">
            <h2>Serviso informacijos koregavimas</h2>
          </div>
          <div className="modalForm">
            <form>
              <div className="formGroup">
                <span>Serviso pavadinimas</span>
                <input
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
            ) : null} */}
            </form>
          </div>

          <div className="modalButtons">
            <button onClick={handleEdit}>Save changes</button>
            <button
              className="red-button"
              onClick={() => setModalServisas(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
