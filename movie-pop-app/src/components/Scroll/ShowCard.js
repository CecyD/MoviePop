import React from 'react';

const ShowCard = ({ show, setIdShow }) => {
  const handleClick = () => {
    setIdShow(show.id);
  };
  return (
    <div className="card mb-2">
        <a onClick={handleClick}>
            <img src={show.image.original} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-end">{show.name}</h5>
            </div>
        </a>
     </div>
  );
};

export default ShowCard;
