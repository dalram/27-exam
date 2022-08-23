import { useEffect } from "react";
import { useState } from "react";
import BackContext from "./BackContext";
import Nav from "./Nav";
import Meistrai from "./Meistrai/Crud";
import ServisaiCrud from "./Servisai/Crud";
import axios from 'axios';
import { authConfig } from "../../Functions/auth";

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createServisa, setCreateServisa] = useState(null);
  const [servisai, setServisai] = useState(null);
  const [deleteServisa, setDeleteServisa] = useState(null);
  const [editServisa, setEditServisa] = useState(null);
  const [modalServisas, setModalServisas] = useState(null);
  // Meistrai
  const [createMeistra, setCreateMeistra] = useState(null);
  const [meistrai, setMeistrai] = useState(null);
  const [deleteMeistras, setDeleteMeistras] = useState(null);
  const [editMeistras, setEditMeistras] = useState(null);
  const [modalMeistras, setModalMeistras] = useState(null);

// Create
  useEffect(() => {
    if (createServisa === null) {
      return;
    }
    axios.post("http://localhost:3003/admin/servisai", createServisa, authConfig()).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createServisa]);
// Read servisai
useEffect(() => {
  axios.get("http://localhost:3003/admin/servisai", authConfig()).then((res) => {
    setServisai(res.data);
  });
}, [lastUpdate]);

// delete servisa
useEffect(() => {
  if (null === deleteServisa) {
    return;
  }
  axios.delete("http://localhost:3003/admin/servisai/" + deleteServisa.id, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  })
}, [deleteServisa]);

// edit servisa

useEffect(() => {
  if (null === editServisa) {
    return;
  }
  axios.put("http://localhost:3003/admin/servisai/" + editServisa.id, editServisa, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  });
}, [editServisa]);

// Create meistra
useEffect(() => {
  if (createMeistra === null) {
    return;
  }
  axios.post("http://localhost:3003/admin/meistrai", createMeistra, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  });
}, [createMeistra]);

// // Edit, confirm or cancel order

// useEffect(() => {
//   if (null === handleOrder) {
//     return;
//   }
//   axios.put("http://localhost:3003/admin/orders/" + handleOrder.id, handleOrder, authConfig()).then((res) => {
//     setLastUpdate(Date.now());
//   });
// }, [handleOrder]);

  return (
    <BackContext.Provider value={{
      setCreateServisa,
      servisai,
      setDeleteServisa,
      setEditServisa,
      setModalServisas,
      editServisa,
      modalServisas,
      setCreateMeistra
    }}>
      {show === "admin" ? (
        <>
          <Nav />
          <h1>Sveiki atvykę į administacinę sritį, naudokite navigacija!</h1>
        </>
      ) : show === "meistrai" ? (
        <>
          <Nav />
          <Meistrai />
        </>
      ) : (
        <>
          <Nav />
          <ServisaiCrud />
        </>
      )}
    </BackContext.Provider>
  );
}

export default Back;
