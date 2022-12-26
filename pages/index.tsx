import {
  Anchor,
  Box,
  Card,
  CardBody,
  CardHeader,
  DataChart,
  Heading,
  Meter,
  PageHeader,
  Text,
} from "grommet";
import { FormNext } from "grommet-icons";
import { useState } from "react";

import { Layout } from "../components/layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const data = [
    { date: "2020-08-20", amount: 2 },
    { date: "2020-08-21", amount: 47 },
    { date: "2020-08-22", amount: 99 },
  ];

  return (
    <Layout isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Box
        pad="medium"
        overflow="auto"
        margin={{ left: isOpen ? "290px" : "100px" }}
      >
        <PageHeader
          title="summary"
          size="small"
          parent={<Anchor label="내 정보" style={{ padding: 0 }} />}
          style={{ paddingTop: 0 }}
        />
        <Box>
          <Box flex direction="row" justify="between">
            <Card
              height="small"
              background="light-1"
              style={{ padding: "10px 20px", width: "48%" }}
            >
              <CardHeader pad="small">
                <Box flex direction="row" justify="between">
                  <Heading level={3} margin="none" size="small">
                    목표 일정
                  </Heading>
                  <Text size="small" style={{ cursor: "pointer" }}>
                    일정 보기
                    <Text style={{ verticalAlign: "middle" }}>
                      <FormNext size="medium" />
                    </Text>
                  </Text>
                </Box>
              </CardHeader>
              <CardBody pad="small">
                <Text margin={{ bottom: "10px" }}>d-100</Text>
                <Meter
                  round
                  background="dark-1"
                  values={[
                    {
                      value: 60,
                      label: "sixty",
                      onClick: () => {},
                    },
                  ]}
                  aria-label="meter"
                />
                <Text size="small" margin={{ top: "6px" }}>
                  60%
                </Text>
              </CardBody>
            </Card>
            <Card
              height="small"
              background="light-1"
              style={{ padding: "10px 20px", width: "50%" }}
            >
              <CardHeader pad="small">
                <Box flex direction="row" justify="between">
                  <Heading level={3} margin="none" size="small">
                    다음 일정
                  </Heading>
                  <Text size="small" style={{ cursor: "pointer" }}>
                    일정 보기
                    <Text style={{ verticalAlign: "middle" }}>
                      <FormNext size="medium" />
                    </Text>
                  </Text>
                </Box>
              </CardHeader>
              <CardBody pad="small">
                <Text margin={{ bottom: "10px" }}>d-100</Text>
                <Meter
                  round
                  background="dark-1"
                  values={[
                    {
                      value: 60,
                      label: "sixty",
                      onClick: () => {},
                    },
                  ]}
                  aria-label="meter"
                />
                <Text size="small" margin={{ top: "6px" }}>
                  60%
                </Text>
              </CardBody>
            </Card>
          </Box>

          <Box flex direction="row" justify="between" margin={{ top: "20px" }}>
            <Card
              background="light-1"
              style={{ padding: "10px 20px", width: "100%" }}
            >
              <CardHeader pad="small">
                <Box flex direction="row" justify="between">
                  <Heading level={3} margin="none" size="small">
                    평균점수
                  </Heading>
                  <Text size="small" style={{ cursor: "pointer" }}>
                    점수 확인
                    <Text style={{ verticalAlign: "middle" }}>
                      <FormNext size="medium" />
                    </Text>
                  </Text>
                </Box>
              </CardHeader>
              <CardBody>
                <DataChart
                  data={data}
                  series={["date", "amount"]}
                  bounds={{ y: [0, 100] }}
                  size={{ height: "medium", width: "fill" }}
                  chart={[
                    {
                      property: "amount",
                      type: "line",
                      opacity: "medium",
                      thickness: "xsmall",
                      // round,
                    },
                    {
                      property: "amount",
                      type: "point",
                      point: "star",
                      thickness: "medium",
                    },
                  ]}
                  guide={{ x: { granularity: "fine" } }}
                />
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
