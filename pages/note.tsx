import { Box, PageHeader } from "grommet";
import { useState } from "react";
import { Layout } from "../components/layout";

export default function Note() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Layout isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Box
        pad="medium"
        overflow="auto"
        margin={{ left: isOpen ? "290px" : "100px" }}
      >
        <PageHeader title="오답노트" size="small" style={{ paddingTop: 0 }} />
        <Box flex>
          {/* category
            input */}
        </Box>
      </Box>
    </Layout>
  );
}
