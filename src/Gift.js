import React from "react";

const Gift = ({gift , deleteGift}) => {


  deleteGift = (id) => {
    let newchristmasList = this.state.christmasList.filter((gift) => id !== gift.id);
    this.setState({christmasList :newchristmasList });
  }
  
  const handleDelete = () => {
    deleteGift(gift.id);
  };

  return (
    <>
      <p>{gift.id}</p>
      <input type="checkbox" checked={gift.received} />
      <li>{gift.giftName}</li>
      <button onClick={handleDelete}>Delete me</button>
    </>
  );
};


export default Gift;

