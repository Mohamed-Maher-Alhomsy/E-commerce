import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

const useGetDate = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const getData = async () => {
      // Firebase firestore realtime data update

      onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setloading(false);
      });
    };

    getData();
  }, [collectionName]);

  return {
    data,
    loading,
  };
};

export default useGetDate;

// const data = await getDocs(collectionRef);
// console.log(data);
// setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// setloading(false);
