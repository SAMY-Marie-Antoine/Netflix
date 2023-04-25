import Images from "./Images";

const Affichage = ({ className, category, images }) => {
  console.log(category, images);
  return (
    <article className={className}>
      {images.map((elem) => {
        return (
          <div>
            {category && <h2>{category}</h2>}
            <Images images={elem} />
          </div>
        );
      })}
    </article>
  );
};

export default Affichage;
