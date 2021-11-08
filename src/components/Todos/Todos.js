import Item from "../Item/Item";
import "./Todos.css";

export default function Todos({data}) {
    return(
        <div class="todos">
            {data.map(item => <Item title={item.title} description={item.description}/>)}
        </div>
    )
}