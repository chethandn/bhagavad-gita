import React from "react";
import styled from "styled-components";
import { Card as MyCard } from "antd";

import C1i from "../../assets/ch1.jpg";

const Card = styled(MyCard)`
  margin: 0 0px 0px 5px;
  width: 240px;
  border: none;
  border-radius: 0;
  box-shadow: 2px 4px 5px #111;
  transition: transform 3s ease;

  img {
    height: 240px !important;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const ChaptersCard = ({ title, verseCount, chapterNumber }) => {
  return (
    <Card
      bordered={false}
      hoverable
      cover={<img alt="Chapter 1" src={C1i} />}
      bodyStyle={{ padding: 14, textAlign: "justify" }}
    >
      <h3 style={{ margin: 0 }}>Chapter {chapterNumber}</h3>
      <h5>{verseCount} verses</h5>
      <h4>{title}</h4>
    </Card>
  );
};

export default ChaptersCard;
