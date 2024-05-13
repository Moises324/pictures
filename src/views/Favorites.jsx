import { useContext } from "react";
import { PhotoContext } from "../Contextos/PhotoContext";
import Foto from "../components/Foto";
const Favorites = () => {
  const { photos } = useContext(PhotoContext);
  return (
    <>
      <h2 className="text-center text-success">Favoritas</h2>

      <div className="row m-1">
        {photos &&
          photos
            .filter((photo) => photo.liked == true)
            .map((photo) => <Foto photo={photo} key={photo.id} />)}
      </div>
    </>
  );
};

export default Favorites;
