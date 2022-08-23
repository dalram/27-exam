import { useEffect } from "react";
import { useState } from "react";
import BackContext from "./BackContext";
import Nav from "./Nav";
import Orders from "./Meistrai/Orders";
import ProductsCrud from "./Servisai/Crud";
import axios from 'axios';
import { authConfig } from "../../Functions/auth";

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [servisai, setServisai] = useState(null);
  const [deleteServisa, setDeleteServisa] = useState(null);
  const [editServisa, setEditServisa] = useState(null);
  const [modalServisas, setModalServisas] = useState(null);
  // Orders
  // const [orders, setOrders] = useState(null);
  // const [handleOrder, setHandleOrder] = useState(null);

// Create
  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios.post("http://localhost:3003/admin/servisai", createData, authConfig()).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);
// Read products
useEffect(() => {
  axios.get("http://localhost:3003/admin/servisai", authConfig()).then((res) => {
    setServisai(res.data);
  });
}, [lastUpdate]);

// delete product
useEffect(() => {
  if (null === deleteServisa) {
    return;
  }
  axios.delete("http://localhost:3003/admin/servisai/" + deleteServisa.id, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  })
}, [deleteServisa]);

// edit product

useEffect(() => {
  if (null === editServisa) {
    return;
  }
  axios.put("http://localhost:3003/admin/servisai/" + editServisa.id, editServisa, authConfig()).then((res) => {
    setLastUpdate(Date.now());
  });
}, [editServisa]);

// Read orders
// const {data} = props; Tai yra Destrukturizavimas objekto!!!
// useEffect(() => {
//   axios.get("http://localhost:3003/admin/orders", authConfig()).then((res) => {
//     setOrders(res.data);
//   });
// }, [lastUpdate]);

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
      setCreateData,
      servisai,
      setDeleteServisa,
      setEditServisa,
      setModalServisas,
      editServisa,
      modalServisas,
      // orders,
      // setHandleOrder
    }}>
      {show === "admin" ? (
        <>
          <Nav />
          <h1>Sveiki atvykę į administacinę sritį, naudokite navigacija!</h1>
        </>
      ) : show === "orders" ? (
        <>
          <Nav />
          <Orders />
        </>
      ) : (
        <>
          <Nav />
          <ProductsCrud />
        </>
      )}
    </BackContext.Provider>
  );
}

export default Back;
