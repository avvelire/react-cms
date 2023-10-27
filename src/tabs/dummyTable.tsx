import React, { useState } from 'react';

const DummyTable: React.FC = () => {
  const [tableArr, setTableArr] = useState([{ firstTd: 'Dummy', secondtTd: 'Table' }]);
  const onAdd = () => {
    const firstTd = prompt('Write the player you want to add');
    const secondtTd = prompt('Write the team in which your player plays');

    if (firstTd) {
      if (secondtTd) {
        const newItem = {
          firstTd,
          secondtTd,
        };

        setTableArr([...tableArr, newItem]);
      }
    }
  };

  const table = tableArr.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.firstTd}</td>
        <td>{item.secondtTd}</td>
      </tr>
    );
  });

  return (
    <div className="mainContent">
      <h1 className="mainContent__title">Dummy Table</h1>
      <table>
        <tbody>{table}</tbody>
      </table>
      <button className="mainContent__addButton" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default DummyTable;
