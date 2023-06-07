import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar.jsx";

const DiseasesPage = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [gejala, setGejala] = useState("");
  const [data_response, setResponse] = useState("");
  const [hewan, setHewan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/diseases"); // Menggunakan axios tanpa instance
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleHewanChange = (e) => {
    setHewan(e.target.value);
    console.log(hewan);
  };
  const handleGejalaChange = (e) => {
    const inputValue = e.target.value;
    const symptomsArray = inputValue
      .split(",")
      .map((symptom) => symptom.trim());
    setGejala(symptomsArray);
    setResponse(symptomsArray);
    console.log(gejala);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/animals/predict-disease`, {
        animal: hewan,
        symptoms: gejala,
      })
      .then((res) => {
        console.log(res.data.data);

        setResponse(res.data);
        console.log(data_response);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.errors);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='container px-4 md:px-10 lg:px-40 py-8 flex flex-col h-full justify-center'>
        <h1 className='text-2xl font-bold mb-4 text-black text-center'>
          Prediksi Penyakit Hewan
        </h1>
        <p className='text-center mb-4'>
          Masukkan jenis hewan dan gejala yang dialami hewan Anda.
        </p>
        <br></br>
        <form onSubmit={handleSubmit}>
          {data_response !== "" ? (
            <>
              {" "}
              <div className='mb-4'>
                <p>Kemungkinan Penyakit : </p>
                <h2 className='text-2xl font-bold'>{data_response.data}</h2>
              </div>
            </>
          ) : (
            <></>
          )}

          <input
            type='text'
            id='text1'
            onChange={handleHewanChange}
            placeholder='Masukkan jenis hewan'
            className='border mx-10 border-slate-200 shadow-md p-3 text-black mb-4'
          />
          <input
            type='text'
            id='text2'
            onChange={handleGejalaChange}
            placeholder='Masukkan gejala'
            className='border border-slate-200 mx-10 shadow-md p-3 text-black mb-4'
          />
          <button
            type='submit'
            className='bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-800 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let data = {};
  try {
    const res = await axios.get("/diseases"); // Menggunakan axios tanpa instance
    data = res.data;
  } catch (err) {
    console.error(err);
  }
  return { props: { initialData: data } };
}

export default DiseasesPage;
