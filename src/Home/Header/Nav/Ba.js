import categories from "../../categories";
import { useSelector, useDispatch } from "react-redux";
import { categorywise } from "../../../Redux/Actions/actions";
import { product_order } from "../../../Redux/Actions/actions";


const Bar = () => {
    const category = useSelector((state)=>  state.selectedCat);
    const dispatch = useDispatch();

    const handler = (c)=> { dispatch(categorywise(c))};
    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', paddingTop: '15px' }} >
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li onClick={()=> dispatch(product_order('default'))} className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li onClick={()=> dispatch(product_order('decreasing'))} className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Sort by High to Low</a>
                </li>
                <li onClick={()=> dispatch(product_order('increasing'))} className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Sort By Low to High</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{category === 'ALL'? 'Categories': category.toUpperCase() }</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => {handler('ALL')}} href="#">None</a>
                        <div className="dropdown-divider"></div>
                        {categories.map((c) => (<a className="dropdown-item" onClick={()=>{
                            let st = c.text.toLowerCase() ; handler(st)}} href="#">{c.text}</a>))}
                    </div>
                </li>

            </ul>
        </div>

    )
}

export default Bar;