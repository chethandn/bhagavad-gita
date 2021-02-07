import React from "react";
import { Row, Col, Typography } from "antd";
import ChaptersCard from "./ChaptersCard";

import "./chapters.scss";

const Chapters = () => {
  const { Title } = Typography;
  return (
    <section id="container">
      <Title>Chapters</Title>
      <Row justify="space-around">
        <Col span={4}>
          <ChaptersCard
            title="Observing the Armies on the Battlefield of Kuruksetra"
            chapterNumber={1}
            verseCount={47}
          />
        </Col>
        <Col span={4}>
          <ChaptersCard
            title="Observing the Armies on the Battlefield of Kuruksetra"
            chapterNumber={1}
            verseCount={47}
          />
        </Col>
        <Col span={4}>
          <ChaptersCard
            title="Observing the Armies on the Battlefield of Kuruksetra"
            chapterNumber={1}
            verseCount={47}
          />
        </Col>
        <Col span={4}>
          <ChaptersCard
            title="Observing the Armies on the Battlefield of Kuruksetra"
            chapterNumber={1}
            verseCount={47}
          />
        </Col>
        <Col span={4}>
          <ChaptersCard
            title="Observing the Armies on the Battlefield of Kuruksetra"
            chapterNumber={1}
            verseCount={47}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Chapters;
