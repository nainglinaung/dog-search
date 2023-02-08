import {useState,useEffect} from 'react'

function useFetch() {
  
    const [loading,setLoading] = useState(false);
    const [data,setData] =  useState([]);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState();
    useEffect(() => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      setLoading(true);
        
      fetch(url, requestOptions)
        .then(response => response.json())
          .then((res) => {
            console.log("res",res)
            if (res.length > 0) {
                setData(res);
            }
            setLoading(false);
        })
          .catch((err) => {
              console.error(err);
            setError(err);
            setLoading(false);
        });
    }, [url]);

    return [data,error,loading,setUrl]
}

export default useFetch
