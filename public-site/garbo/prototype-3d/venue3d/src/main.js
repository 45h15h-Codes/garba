// Entry: offer the 3D venue backdrop to the venue scene when this device can draw it in WebGL2. The scene attaches it
// on its next frame and keeps drawing its own venue until the backdrop is ready. ?venue=2d keeps the 2D venue, to
// compare the two.
import { create, supported } from './backdrop.js';

if (!/[?&]venue=2d(&|$)/.test(location.search) && supported()) {
  window.GarbaVenueBackdrop = {
    create(canvas, opts) { const b = create(canvas, opts); window.GarbaVenue3D = b; return b; }
  };
  document.documentElement.classList.add('venue-3d');
}
