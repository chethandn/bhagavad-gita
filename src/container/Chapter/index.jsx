import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Card as MyCard } from "antd";

import { getChapter } from "../../redux/actions/chapter";

const Card = styled(MyCard)`
  width: 90%;
  margin: auto !important;
  height: auto !important;
  border: none !important;
  border-radius: 0;
  box-shadow: 0px 0px 5px 0px #111;
  z-index: 100;
  background-image: linear-gradient(167deg, #36096d 0%, #0f0ca8 74%) !important;
  color: #fff !important img {
    height: 240px !important;
  }

  a,
  h1,
  h2,
  h3,
  h5,
  h4 {
    color: #fff !important;
  }
`;

const Chapter = ({ fetchChapter, chapter }) => {
  const { flag } = useParams();

  const init = async () => {
    await fetchChapter(flag);
  };
  useEffect(() => {
    init();
    return () => {};
  }, []);

  return (
    <section id="container">
      <div id="chapter">
        <Row>
          <Col>
            <Card>
              <h1>{`Chapter ${chapter.chapter_number}`}</h1>
              <h5>{chapter.verse_count}</h5>
              <h2>{`${chapter.name}   (${chapter.translation})`}</h2>
              <h5>{chapter.meaning.en}</h5>
              <h3>Summary in Hindhi</h3>
              <h5>{chapter.summary?.hi}</h5>
              <h3>Summary in English</h3>
              <h5>{chapter.summary?.en}</h5>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

Chapter.propTypes = {
  fetchChapter: PropTypes.func,
  chapter: PropTypes.instanceOf(Object),
};

Chapter.defaultProps = {
  fetchChapter: () => {},
  chapter: {},
};

const mapStateToProps = ({ chapterReducer: { chapter } }) => ({ chapter });
const mapDispatchToProps = { fetchChapter: (id) => getChapter(id) };

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
