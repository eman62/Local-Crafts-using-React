import React, { useEffect, useState } from 'react'

import { Review } from '../Components/Details/review'
import Footer from '../Components/footer'
import { useParams } from 'react-router-dom'
import { getProductList, getProductListDetails } from '../api/Products'
import NaveBar from '../Components/navBar'
import ProductDetiles from '../Components/Details/productDetiles'

export const ProductsDetalis = () => {

    const [productDetails, setProductDetails] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    console.log(params);
    useEffect(() => {     
        getProductListDetails(params.productId)
            .then((res) => {
                console.log(res);
                setProductDetails(res.data)
            })
            .catch((err) => console.log(err,"error fetching"))
            
    }, [params.productId]);

    
    
    return (
        <>
            
            { productDetails && <ProductDetiles data={productDetails} />}
            <Review />
            <Footer />

        </>

    )
}
