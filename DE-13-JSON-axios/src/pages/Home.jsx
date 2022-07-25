import { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";

const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //! GET (Read)

  const getBilgiler = async () => {
    const { data } = await axios.get(url);
    setBilgiler(data);
  };

  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {
    getBilgiler();
  }, []);

  console.log(bilgiler);

  //! POST (Create)
  // z= {title ve description} bir obje gönderiyoruz. o objeyi diger sayfada olusturduk
  const addBilgi = async (z) => {
    await axios.post(url, z);
    getBilgiler();
  };

  //! DELETE (delete)

  const deleteBilgi = async (id) => {
    await axios.delete(`${url}/${id}`);
    getBilgiler();
  };

  //! Update (PUT:Whole Update,PATCH :Partially Update)

  const degistir = async (bilgi) => {
    await axios.put(`${url}/${bilgi.id}`, bilgi);
    getBilgiler();
  };

  return (
    <>
      <AddBilgi addBilgi={addBilgi} />
      <BilgiList
        bilgiler={bilgiler}
        deleteBilgi={deleteBilgi}
        degistir={degistir}
      />
    </>
  );
};

export default Home;
