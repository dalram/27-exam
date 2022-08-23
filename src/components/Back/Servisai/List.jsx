import { useContext } from "react";
import BackContext from "../BackContext";
import Line from "./Line";

function List() {
    const { servisai } = useContext(BackContext);
    return (
        <div className="list-box">
        <div className="list-header">
          <h2>Servisų sąrašas</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {
              servisai === null ? null : servisai.map(servisas => (
                    <Line
                      key={servisas.id}
                      servisas={servisas}
                    ></Line>
                  ))
              }
          </ul>
        </div>
      </div>
    )
}

export default List;