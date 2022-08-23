import { useContext } from "react";
import BackContext from "../BackContext";
import MeistraiLine from "./MeistraiLine";


function MeistraiList() {
    const { meistrai } = useContext(BackContext);
    return (
        <div className="list-box">
        <div className="list-header">
          <h2>Meistrų sąrašas</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
           {
            meistrai ? meistrai.map(meistras => <MeistraiLine meistras={meistras} key={meistras.id}></MeistraiLine>) : null
           }
          </ul>
        </div>
      </div>
    )
}

export default MeistraiList;


// app.get("/admin/meistrai", (req, res) => {
//   const sql = `
//     SELECT
//     id, name, adresas, photo, numeris, rating, serviso_id
//     FROM meistrai
//     `;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });