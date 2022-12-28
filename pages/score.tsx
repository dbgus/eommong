import { Text, Box, PageHeader, TextInput, Button } from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";
import { Layout } from "../components/layout";

export default function Score() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [score, setScore] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>();
  return (
    <Layout isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Box
        pad="medium"
        overflow="auto"
        margin={{ left: isOpen ? "290px" : "100px" }}
      >
        <PageHeader title="점수 관리" size="small" style={{ paddingTop: 0 }} />
        <Box
          flex
          direction="row"
          background={{ color: "white" }}
          width="large"
          pad={{ vertical: "small" }}
          round="small"
          height={{ max: "medium", min: "medium" }}
        >
          <Box
            width="xsmall"
            border={{
              color: "gray",
              side: "right",
              size: "1px",
              style: "solid",
            }}
            style={{ position: "relative" }}
          >
            <Box>
              <Text size="medium" textAlign="center">
                과목
              </Text>
            </Box>
            <Box margin={{ top: "8px" }} overflow={{ horizontal: "auto" }}>
              {["수학", "국어", "물리", "지구과학"].map((d, index) => (
                <Box
                  key={index}
                  pad={{ horizontal: "xsmall", vertical: "xsmall" }}
                  style={{ cursor: "pointer" }}
                  hoverIndicator={{ background: { color: "gray" } }}
                  focusIndicator={false}
                  background={{ color: index === selectedIndex ? "gray" : "" }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Text size="small">{d}</Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box pad={{ vertical: "xsmall", horizontal: "small" }}>
            <Text>해당 과목의 추가할 점수를 입력해주세요</Text>
            <Box margin={{ top: "small" }}>
              <TextInput
                placeholder="시험 점수"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              <Button hoverIndicator="light-1" onClick={() => {}}>
                {({ disabled, hover, focus }) => (
                  <Box pad="small" direction="row" align="center" gap="small">
                    {hover || disabled ? <Add color="brand" /> : <Add />}
                    {focus ? (
                      <Text>추가완료</Text>
                    ) : (
                      <Text color={disabled ? "control" : ""}>추가</Text>
                    )}
                  </Box>
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
