import { useEffect, useState } from "react";


const GetUniqueProduct = (ProductId) => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${ProductId}`)
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error)
                setData(data)
                setloading(false)
            })
    }, [ProductId]);

    return { data:data, loading, error };
};

export default GetUniqueProduct;