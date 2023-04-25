import Affichage from "./Affichage";
import data from "../assets/data.json";

const Categories = (className) => {
  return (
    <section>
      {data.map((elem) => {
        // console.log(elem.category, elem.images);
        return (
          <div>
            <Affichage
              category={elem.category}
              images={elem.images}
              className={className}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
