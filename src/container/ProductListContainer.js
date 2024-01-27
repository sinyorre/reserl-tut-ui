import HeadingCard from "../components/HeadingCard";
import ListCard from "../components/ListCard";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`http://192.168.1.34:8080/products`);
            const {data} = response;
            setData(data);
        }

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <>
            <HeadingCard title="Product List"/>
            <ListCard data={data}/>
            <Footer/>
        </>
    )
}

export default ProductListContainer;