import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Typography, Spin } from "antd";
import ChaptersCard from "./ChaptersCard";
import { getChapters } from "../../redux/actions/chapters";

const Chapters = ({ chapters, fetchChapters }) => {
  const [sortedList, setList] = useState([]);
  const { Title } = Typography;

  const init = async () => {
    await fetchChapters();
    setList(
      chapters.sort((a, b) => {
        return a.chapter_number - b.chapter_number;
      })
    );
  };

  useEffect(() => {
    init();
    return () => {};
  }, [chapters]);

  return (
    <section id="container">
      <div id="chapters">
        <Title>Chapters</Title>
        <Row justify="space-around">
          {!sortedList.length ? (
            <Col>
              <Spin />
            </Col>
          ) : (
            sortedList.map((chapter) => (
              <Col span={4} key={chapter.chapter_number}>
                <ChaptersCard
                  title={chapter.translation}
                  chapterNumber={chapter.chapter_number}
                  verseCount={chapter.verses_count}
                />
              </Col>
            ))
          )}
        </Row>
      </div>
    </section>
  );
};

Chapters.propTypes = {
  chapters: PropTypes.instanceOf(Array),
  fetchChapters: PropTypes.func,
};

Chapters.defaultProps = {
  chapters: [],
  fetchChapters: () => {},
};

const mapStateToProps = ({ chaptersReducer: { chapters } }) => ({ chapters });

const mapDispatchToProps = {
  fetchChapters: () => getChapters(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
