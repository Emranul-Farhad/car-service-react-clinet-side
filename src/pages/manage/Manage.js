import React, { useEffect, useState } from 'react';
import Header from '../../Shared pages/Headr/Header';




const Manage = () => {

  const [manages, setManage] = useState([])

  useEffect(() => {
    fetch("https://tranquil-woodland-91399.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setManage(data))
  }, [])


  const delet = id => {
    const proced = window.confirm("are you sure")
    if (proced) {
      const urls = `https://tranquil-woodland-91399.herokuapp.com/services${id}`

      fetch(urls, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          const delted = manages.filter(m => m._id !== id)
          setManage(delted)
          console.log('Success:', data);
        })
    }
  }

  return (
    <div>
      <Header></Header>

      {
        manages.map(manag => <p> {manag.name} <button onClick={() => delet(manag._id)} >X</button> </p>)
      }

    </div>
  );
};

export default Manage;