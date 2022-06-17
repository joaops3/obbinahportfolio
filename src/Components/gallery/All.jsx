import { useState, useEffect} from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { options } from "./options";
import PhotoContainer from "./PhotosContainer";


const All = () => {
    const [imgList, setImgList] = useState([]);
    const [imgListLarge, setImgListLarge] = useState([])
   
  

  useEffect(() => {
    const imgListRef = ref(storage, "all/")
    const imgListLargeRef = ref(storage, "large/")
   
  
    listAll(imgListRef)
      .then((resp) => {
         resp.items.forEach((item) => {
            getDownloadURL(item)
              .then((url) =>  {setImgList((state) => [...state, url])})
         })
       
    });

    listAll(imgListLargeRef)
    .then((resp) => {
       resp.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) =>  {setImgListLarge((state) => [...state, url])})
       })
     
  });
      // eslint-disable-next-line react-hooks/exhaustive-deps

  },[]);


 
  return (
   <PhotoContainer options={options} imgList={imgList} imgListLarge={imgListLarge}></PhotoContainer>
  );
};

export default All;
