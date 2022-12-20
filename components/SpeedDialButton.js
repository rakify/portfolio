import { Home, Person, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

const actions = [
  { icon: <Home />, name: "Copy" },
  { icon: <Person />, name: "Save" },
  { icon: <Print />, name: "Print" },
  { icon: <Share />, name: "Share" },
];

export default function SpeedDialButton() {
  return (
    <SpeedDial
      ariaLabel="Speed Dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
