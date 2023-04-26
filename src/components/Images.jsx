const Images = ({ images }) => {
  return <div>{images && <p>{<img src={images} />}</p>}</div>;
};

export default Images;
