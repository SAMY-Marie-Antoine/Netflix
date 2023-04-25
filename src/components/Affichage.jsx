const Affichage = ({ className, category, images }) => {
  console.log(category, images);
  return (
    <article>
      {category && <h2>{category}</h2>}
      <p>
        <img src={images}></img>
      </p>
    </article>
  );
};

export default Affichage;
