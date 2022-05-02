export const NewOrder = () => {
    const [orderdata,newOrderData]=useState([])
    useEffect(() => {
      getdata();
    }, []);
  
    const getdata = async () => {
      fetch(`http://localhost:8080/orders`)
        .then((d) => d.json())
        .then((data) => {
          newOrderData(data)
        });
    };
}