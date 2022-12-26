import { Button, Sidebar, Text, Box } from "grommet";
import {
  CaretNext,
  CaretPrevious,
  Scorecard,
  Notes,
  Calendar,
  User,
} from "grommet-icons";
import styled from "styled-components";

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
        header={
          <>
            <Text size="large" alignSelf="center" margin={{ top: "medium" }}>
              eommong
            </Text>
            <Divider style={{ paddingTop: 24, borderColor: "#FFFFFFF" }} />
          </>
        }
        footer={<Text textAlign="center">made by eom</Text>}
      >
        <Box pad={{ vertical: "xxsmall" }}>
          <Button plain>
            {({ hover }) => (
              <Box
                background={hover ? "background-contrast" : undefined}
                pad={{ horizontal: "small", vertical: "small" }}
              >
                <Text size="medium" textAlign={isOpen ? "start" : "center"}>
                  <Calendar size="medium" style={{ verticalAlign: "sub" }} />{" "}
                  {isOpen && "일정관리"}
                </Text>
              </Box>
            )}
          </Button>
        </Box>
        <Box pad={{ vertical: "xxsmall" }}>
          <Button plain>
            {({ hover }) => (
              <Box
                background={hover ? "background-contrast" : undefined}
                pad={{ horizontal: "small", vertical: "small" }}
              >
                <Text size="medium" textAlign={isOpen ? "start" : "center"}>
                  <Scorecard size="medium" style={{ verticalAlign: "sub" }} />{" "}
                  {isOpen && "점수관리"}
                </Text>
              </Box>
            )}
          </Button>
        </Box>
        <Box pad={{ vertical: "xxsmall" }}>
          <Button plain>
            {({ hover }) => (
              <Box
                background={hover ? "background-contrast" : undefined}
                pad={{ horizontal: "small", vertical: "small" }}
              >
                <Text size="medium" textAlign={isOpen ? "start" : "center"}>
                  <Notes size="medium" style={{ verticalAlign: "sub" }} />{" "}
                  {isOpen && "오답노트"}
                </Text>
              </Box>
            )}
          </Button>
        </Box>
        <Box pad={{ vertical: "xxsmall" }}>
          <Button plain>
            {({ hover }) => (
              <Box
                background={hover ? "background-contrast" : undefined}
                pad={{ horizontal: "small", vertical: "small" }}
              >
                <Text size="medium" textAlign={isOpen ? "start" : "center"}>
                  <User size="medium" style={{ verticalAlign: "sub" }} />{" "}
                  {isOpen && "정보수정"}
                </Text>
              </Box>
            )}
          </Button>
        </Box>
      </Sidebar>
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

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid;
`;
