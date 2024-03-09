import React, { useEffect, useState } from 'react'
import Footer from '../Components/footer'
import { useParams } from 'react-router-dom'
import { getServiceDetails } from '../api/services'
import NaveBar from '../Components/navBar'
import { Review } from '../Components/Details/review'
import ServicedetailCard from '../Components/Services/ServicedetailCard'

export const    ServicesDetalis = () => {
    const [serviceDetails, setServiceDetails] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    console.log(params);
    useEffect(() => {     
        getServiceDetails(params.serviceId)
            .then((res) => {
                console.log(res);
                setServiceDetails(res.data)
            })
            .catch((err) => console.log(err,"error fetching"))
            
    }, [params.serviceId]);
    
    useEffect(() => {     
        getServiceDetails(params.serviceId)
            .then((res) => {
                console.log(res);
                setServiceDetails(res.data)
            })
            .catch((err) => console.log(err,"error fetching"))
            
    }, [params.serviceId]);

    
    
    return (
        <>
            <NaveBar/>

            { serviceDetails && <ServicedetailCard data={serviceDetails} />}
            <Review/>
            <Footer />

        </>

    )
}
