import { axiosInstance } from "../utils/config";
import { useState, useEffect } from "react";

const DiseasesPage = ({ initialData }) => {
  const [data, setData] = useState(initialData);

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

  return (
    <div>
      <h1>Diseases</h1>
      {data.success &&
        data.data.map((disease, index) => (
          <div key={index}>
            <h2>{disease.name}</h2>
            <p>{disease.description}</p>
            <p>Color: {disease.color}</p>
            <p>Rule 1: {disease.bool_rule1 ? "True" : "False"}</p>
            <p>Rule 2: {disease.bool_rule2 ? "True" : "False"}</p>
          </div>
        ))}
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
