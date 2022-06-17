import Photo from "./Photo";
import { SRLWrapper } from "simple-react-lightbox";



const PhotoContainer = ({ options, imgList}) => {


 

 
  return (
    <section className="container main">
      <div className="col-12 col-md-10 offset-md-1 py-2">
        <SRLWrapper options={options}>
          <div className="row">

             {imgList.map((url, key) => {
              return <Photo key={key} src={url} alt="art"></Photo>})
              
              }
                
          </div>
        </SRLWrapper>
      </div>
    </section>
  );
};

export default PhotoContainer;
