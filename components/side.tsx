import { Button, Sidebar } from "grommet";
import { CaretNext, CaretPrevious } from "grommet-icons";

export interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideBar({ isOpen, onClose }: SideBarProps) {
  return (
    <div style={{ position: "fixed", width: isOpen ? 290 : 100 }}>
      <Sidebar
        background="brand"
        round="small"
        style={{ height: "100vh" }}
      ></Sidebar>
      <Button
        style={{
          width: isOpen ? 50 : 40,
          height: isOpen ? 50 : 40,
          position: "absolute",
          padding: "5px 10px",
          right: -20,
          top: "50%",
        }}
        primary
        color="light-1"
        onClick={onClose}
      >
        {!isOpen ? (
          <CaretNext
            size="medium"
            style={{
              position: "absolute",
              top: "50%",
              left: "55%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ) : (
          <CaretPrevious
            size="medium"
            style={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </Button>
    </div>
  );
}
