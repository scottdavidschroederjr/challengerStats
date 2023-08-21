import React, { useState } from 'react';

const EmblemWR = ({ aboveEmblemData }) => {
  const [sortBy] = useState('place'); // Always sorting by place
  const [sortOrder] = useState('asc'); // Default sorting order ascending

  if (!aboveEmblemData || !Array.isArray(aboveEmblemData)) {
    // Return null or a loading indicator when the data is not available yet
    return null; // or <div>Loading...</div>
  }

  // Remove "Emblem" from the trait names and sort data based on the current sorting options
  const sortedData = aboveEmblemData.map(([trait, count, place]) => [
    trait.replace('Emblem', '').trim(),
    count,
    place,
  ]).sort((a, b) => {
    return sortOrder === 'asc' ? a[2] - b[2] : b[2] - a[2];
  });

  return (
    <div className='component' id='emblemStats'>
      <div className="componentHeader">Emblem Stats</div>
      <div className='scrollable'>
        <table>
        <thead>
          <tr>
            <th>Trait</th>
            <th>Count</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(([trait, count, place], index) => (
            <tr key={index}>
              <td>{trait}</td>
              <td>{count}</td>
              <td>{place.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>  
    </div>
  );
};

export default EmblemWR;

