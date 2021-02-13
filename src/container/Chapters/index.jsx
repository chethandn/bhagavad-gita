import React from "react";
import { Row, Col, Typography } from "antd";
import ChaptersCard from "./ChaptersCard";

const Chapters = () => {
  const { Title } = Typography;
  return (
    <section id="container">
      <div id="chapters">
        <Title>Chapters</Title>
        <Row justify="space-around">
          <Col span={4}>
            <ChaptersCard
              title="Observing the Armies on the Battlefield of Kuruksetra"
              chapterNumber={1}
              verseCount={47}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Chapters;
