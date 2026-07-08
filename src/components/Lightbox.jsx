import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ImageLightbox({ images, index, open, onClose }) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images.map((src) => ({ src }))}
      plugins={[Zoom]}
      zoom={{
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
    />
  );
}
