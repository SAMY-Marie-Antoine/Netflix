import Images from "./Images";

const Affichage = ({ className, category, images }) => {
  console.log(category, images);
  return (
    <article className={className}>
      {category && <h2>{category}</h2>}
      {images.map((elem) => {
        return <Images images={elem} />;
      })}
    </article>
  );
};

export default Affichage;
