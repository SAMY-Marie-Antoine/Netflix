import Affichage from "./Affichage";
import data from "../assets/data.json";

const Categories = () => {
  return (
    <section>
      {data.map((elem) => {
        // console.log(elem.category, elem.images);
        return (
          <div>
            <Affichage category={elem.category} />

            {data.map((elem) => {
              return (
                <div>
                  <Affichage images={elem.images} />
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
