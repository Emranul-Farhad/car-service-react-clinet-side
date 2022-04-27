import { useEffect, useState } from "react"




const Checkout = id => {

    const [cheks, setCheck] = useState({})

    useEffect(() => {
        const url = `https://tranquil-woodland-91399.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCheck(data))

    }, [id])


    return [cheks, setCheck]

}

export default Checkout