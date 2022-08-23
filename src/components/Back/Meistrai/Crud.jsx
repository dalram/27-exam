
import Create from "./Create";
import MeistraiList from "./MeistraiList";
import MeistraiEdit from "./MeistraiEdit";
function Crud() {

    return (<>
        <div className="container">
            <Create />
            <MeistraiList />
        </div>
        <MeistraiEdit />
        </>
    )
}

export default Crud;