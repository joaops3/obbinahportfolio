import "../../style/Photo.scss"

const Photo = ({src, alt}) => {
    return ( 
         
                <div className="col-12 col-sm-6 col-md-4 img-background">
                    <img src={src} alt={alt} width={"100%"}></img>
                </div>
     );
}
 
export default Photo;
