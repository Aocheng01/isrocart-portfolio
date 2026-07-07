import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageLightbox({ images, index, open, onClose }) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images.map((src) => ({ src }))}
    />
  );
}
