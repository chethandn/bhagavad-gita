import React from "react";
import styled from "styled-components";
import { Card as MyCard } from "antd";
import { Link } from "react-router-dom";

import C1i from "../../assets/gita.png";

const Card = styled(MyCard)`
  margin: 5px 10px !important;
  width: 240px;
  height: 360px !important
  max-height: 360px !important;
  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 5px 0px #111;
  transition: all 3s ease-out;
  z-index: 100;
  background-image: linear-gradient(115deg, #36096d 0%, #0f0ca8 90%) !important;
  color: #fff !important

  img {
    height: 240px !important;
  }

  &:hover {
    transform: scale(1.01);
    border: none !important;
    z-index: 1000;
  }

  a, h3, h5, h4 {
    color: #fff !important;
  }
`;

const ChaptersCard = ({ title, verseCount, chapterNumber }) => {
  return (
    <Link to={`/chapter/${chapterNumber}`}>
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
    </Link>
  );
};

export default ChaptersCard;
