import React ,{ useState, useEffect } from "react";
import axios from "axios";
export default function Product() {
    const myInputRef1= React.createRef();
    const myInputRef2= React.createRef();
    const baseURL = "http://127.0.0.1:5000";
    const [product, setProduct] = useState([]);
   // const [del, setDelete] = useState([]);
    //const [message,setMessage] = useState('');
   const [itemId, setItemId] = useState('');
   const [productState,setProductState]=useState(null);
   //`http://127.0.0.1:5000/productDelete/${parseInt(itemId)}`
   React.useEffect(() => {
    axios.get(baseURL+"/api/products").then((response) => {
      setProductState(response.data);
    });
    }, []);
    
    const onOkClick=(id)=>{
        console.log(myInputRef1.current.value);
        console.log(myInputRef2.current.value);
        const data={
            name:myInputRef1.current.value,
            price:myInputRef2.current.value
        }
        axios.put(baseURL+"/api/products/"+id,data).then((response) => {
            setProductState(response.data);
        });
     }

    const onDeleteProduct = (id) => {
        console.log(id);
        axios.delete(baseURL + "/api/products/" + id).then(() => {
            // Filter out the deleted product from the product list
            setProduct(prevProducts => prevProducts.filter(product => product.id !== id));
        }).catch(error => {
            console.error('Error deleting product:', error);
        });
    };
    

    useEffect(() => {
        console.log("request to api")
        axios.get(baseURL+"/api/products")
            .then(response => setProduct(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, []);
    const [show , setShow] = useState([true])
    const productList = product.map(p => (
        <div key={p.id}>
            {p.id}
            {p.name} <img src={p.img} alt={p.name} /> {p.price}
            <div>  
                <button onClick={()=>setShow(!show)}>Edit</button>
                <button onClick={() => onDeleteProduct(p.id)}>delete</button>
                {show? 
                <div>
                   <p>name</p>
                        <input
                            type="text"
                            name="name"
                            ref={myInputRef1}
                        />
                        <p>Price</p>
                        <input
                            type="text"
                            name="price"
                            ref={myInputRef2}
                        />
                    <button onClick={onOkClick.bind(p.id)}>ok</button>
                </div> : <></>
                }
            </div>
        </div>
    ));

    return (
        <>
            <div>
                {productList}
            </div>
        </>
    );
}
