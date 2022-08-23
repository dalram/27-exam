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