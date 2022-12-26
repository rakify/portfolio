import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import About from "../components/About";

export default function SwipeableEdgeDrawer({ handleClose, openAbout }) {
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={openAbout}
        onClose={handleClose}
        onOpen={handleClose}
        transitionDuration={2000}
      >
        <About handleClose={handleClose} />
      </SwipeableDrawer>
    </>
  );
}
