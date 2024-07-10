import { useEffect, useState } from "react";


const ItemListContainer = ({ summerdeal }) => {


    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=jewelery#json")
            .then(response => response.json())
            .then(products => {
                setStock(products.results);
            })

    }, [])

    

    return (
        <>
            <section className="wrapper-deal">
                <div className="container-img">
                    <h1 className="title-deal">{summerdeal}</h1>
                </div>
            </section>

            <div className="card-container">
                {stock.map(cards => (
                    <div key={cards.id} className="card">
                        <div className="deal-container">
                            <img className="card-img-top" src={cards.thumbnail} alt={cards.title} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{cards.title}</h5>
                            <p className="card-text">{cards.price}</p>
                            <a href="#" className="btn btn-outline-success">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
};

export default ItemListContainer;