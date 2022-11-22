import { NavLink } from 'react-router-dom';
import { useShopping } from './Shopping';

function Sepet() {
    const { items, removeShopping } = useShopping();
    const total = items.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <NavLink className="text-decoration-none text-dark" to={`/`}>
                        <div className="d-flex align-items-center m-3">
                            <i className="fa fa-long-arrow-left"></i>
                            <span className="ml-1">&nbsp;Back</span>
                        </div>
                    </NavLink>
                </div>
                {total < 1
                    ?
                    <div class="alert alert-danger m-1" role="alert">
                        Sepet Boş
                    </div>
                    :
                    <div><h1 style={{ textAlign: "center" }}>Total : {total}</h1><hr /></div>}

            </div>
            {items.map((item) =>

                <div key={item.id} className="row d-flex justify-content-center m-1">
                    <div className="col-md-10">
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" alt="product" src={item.image} width="250" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">

                                            <span className="text-muted text-capitalize"> in {item.category}</span>

                                            <h5 className="text-uppercase">
                                                {item.title}
                                            </h5>

                                            Rating {item.rating && item.rating.rate}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${item.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{item.description}</p>
                                        <div className="cart mt-4 align-items-center">
                                            <button className="btn btn-outline-dark text-uppercase mr-2 px-4" >Buy</button>
                                            <button onClick={() => removeShopping(item.id)} style={{ float: "right" }} className="btn btn-outline-danger text-uppercase mr-2 px-4">
                                                remove
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sepet;
