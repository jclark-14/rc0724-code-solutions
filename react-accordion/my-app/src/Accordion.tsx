import React, { useState } from 'react';
type Topic = { id: number; title: string; content: string };

type Props = {
  topics: Topic[];
};

type TopicCardProps = {
  topics: Topic[];
  onClick: (id: number, selectedTopic: number) => void;
  selectedTopic: number;
};

export function Accordion({ topics }: Props) {
  const [selectedTopic, setSelectedTopic] = useState(0);

  function handleClick(id: number) {
    if (id !== selectedTopic) {
      setSelectedTopic(id);
    } else {
      setSelectedTopic(0);
    }
  }
  return (
    <div className="container">
      <TopicCard
        topics={topics}
        onClick={handleClick}
        selectedTopic={selectedTopic}
      />
    </div>
  );
}

function TopicCard({ topics, onClick, selectedTopic }: TopicCardProps) {
  const topicsTitle = topics.map((topic) => (
    <div className="wrapper" key={topic.id}>
      <button>
        <h2
          className={`${topic.id}`}
          onClick={() => onClick(topic.id, selectedTopic)}>
          {topic.title}
        </h2>
      </button>
      {selectedTopic === topic.id && (
        <div className={`content-div`}>
          <p>{topic.content}</p>
        </div>
      )}
    </div>
  ));
  return <>{topicsTitle}</>;
}
