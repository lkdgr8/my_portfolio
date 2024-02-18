import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndNex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      // Render paginated data
      {currentItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
      // Render pagination controls
    </div>
  );
}

export default App;