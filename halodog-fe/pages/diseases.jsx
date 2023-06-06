import { axiosInstance } from "../utils/config";
import { useState, useEffect } from "react";
import axios from "axios";
const DiseasesPage = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [gejala, setGejala] = useState("");
  const [data_response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/diseases");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    console.log(data);
    fetchData();
  }, []);
  const handleFileInputChange = (e) => {
    setGejala(e.target.value);
    console.log(gejala);
  };

  const handleSubmit = (e) => {
    console.log(gejala);
    e.preventDefault();

    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/diseases/?symptoms=${gejala}`,
        {}
      )
      .then((res) => {
        // Authenticate MEMBUAT SET COOKIE TOKEN (JWT SECRET)
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.errors);
      });
  };
  return (
    <div>
      <h1>Diseases</h1>
      <form
        className="w-full h-[80%] justify-between items-center flex flex-col"
        onSubmit={handleSubmit}
      >
        {data_response.success &&
          data_response.data.map((disease, index) => (
            <div key={index}>
              <h2>{disease.name}</h2>
              <p>{disease.description}</p>
              <p>Gejala Umum : {disease.symptoms.join(", ")}</p>
            </div>
          ))}
        <input
          type="text"
          id="text1"
          onChange={handleFileInputChange}
          className="border border-slate-200 shadow-md p-3 text-black"
        />
        <button
          type="submit"
          className={`bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-800 transform transition duration-300`}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  let data = {};
  try {
    const res = await axiosInstance.get("/diseases"); // use the instance
    data = res.data;
  } catch (err) {
    console.error(err);
  }
  return { props: { initialData: data } };
}

export default DiseasesPage;
