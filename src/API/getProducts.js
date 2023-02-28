import { useEffect, useState } from "react";


const useGetData = () => {
    const [data, setData] = useState([]);
    const [loseData, setLoseData] = useState([]);
    const [wonData, setWonData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error)
                setData(data)
                setloading(false)
            })
    }, []);

    return { data:data, loading, error };
};

export default useGetData;