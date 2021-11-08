import "./Item.css";

export default function Item({title, description}) {
    return(
        <div className="item">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    ) 
}