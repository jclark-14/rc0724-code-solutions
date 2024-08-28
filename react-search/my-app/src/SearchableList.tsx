import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type Props = {
  quotes: string[];
  search?: string;
};

type QuotesListProps = {
  quotes: string[];
  matchedItems: string[];
  matchesFound?: boolean;
};

export function SearchableList({ quotes }: Props) {
  const [search, setSearch] = useState('');
  const [matchedItems, setMatchedItems] = useState<string[]>([]);
  const [matchesFound, setMatchesFound] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setSearch(value);
    const matchedItems = quotes.filter((quote) =>
      quote.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedItems(matchedItems);
    const isFound = matchedItems.length > 0;
    setMatchesFound(isFound);
  }

  return (
    <div className="container">
      <div className="input-div">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
        <FaMagnifyingGlass className="icon" />
      </div>
      <QuotesList
        quotes={quotes}
        matchedItems={matchedItems}
        matchesFound={matchesFound}
      />
    </div>
  );
}

function QuotesList({ quotes, matchedItems, matchesFound }: QuotesListProps) {
  const listElements = matchedItems.length > 0 ? matchedItems : quotes;
  const displayList = [];
  for (let i = 0; i < listElements.length; i++) {
    displayList.push(<li key={i}>{listElements[i]}</li>);
  }
  const message =
    matchedItems.length === 0 && !matchesFound
      ? 'No items match the filter'
      : displayList;
  return <ul>{message}</ul>;
}
