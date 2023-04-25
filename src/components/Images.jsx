const Images = ({ images }) => {
  console.log(images);
  return <article>{images && <p>{<img src={images} />}</p>}</article>;
};

export default Images;
