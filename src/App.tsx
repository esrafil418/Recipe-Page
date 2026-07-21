import { Dot } from "lucide-react";

const preparation = [
  { title: "Total", value: "Approximately 10 minutes" },
  { title: "Preparation", value: "5 minutes" },
  { title: "Cooking", value: "5 minutes" },
];

const ingredients = [
  "2–3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const instructions = [
  {
    title: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

const nutrition = [
  ["Calories", "277kcal"],
  ["Carbs", "0g"],
  ["Protein", "20g"],
  ["Fat", "22g"],
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f3e5d8] flex items-center justify-center p-0 sm:p-8 font-outfit">
      <article className="w-full max-w-184 bg-white sm:rounded-3xl p-0 sm:p-10">
        <img
          src="src/assets/images/image-omelette.jpeg"
          alt="Simple Omelette"
          className="w-full sm:rounded-xl"
        />

        <div className="p-8 sm:p-0 sm:pt-10">
          <h1 className="font-youngSerif text-4xl text-[#312E2C] mb-6">
            Simple Omelette Recipe
          </h1>

          <p className="text-[#5F564D] leading-7">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          {/* Preparation */}

          <section className="bg-[#FFF7FB] rounded-xl p-6 mt-8">
            <h3 className="text-[#7B284F] font-bold text-xl mb-4">
              Preparation time
            </h3>

            <ul className="space-y-3">
              {preparation.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <Dot className="text-[#7B284F] shrink-0" />
                  <span className="text-[#5F564D]">
                    <strong>{item.title}</strong>: {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-stone-200" />

          {/* Ingredients */}

          <section>
            <h2 className="font-youngSerif text-3xl text-[#854632] mb-6">
              Ingredients
            </h2>

            <ul className="space-y-3">
              {ingredients.map((item) => (
                <li key={item} className="flex gap-4">
                  <Dot className="text-[#854632] shrink-0" />
                  <span className="text-[#5F564D]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-8 border-stone-200" />

          {/* Instructions */}

          <section>
            <h2 className="font-youngSerif text-3xl text-[#854632] mb-6">
              Instructions
            </h2>

            <ol className="space-y-4">
              {instructions.map((item, index) => (
                <li key={item.title} className="flex gap-6">
                  <span className="font-bold text-[#854632]">{index + 1}.</span>

                  <p className="text-[#5F564D] leading-7">
                    <strong>{item.title}:</strong> {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <hr className="my-8 border-stone-200" />

          {/* Nutrition */}

          <section>
            <h2 className="font-youngSerif text-3xl text-[#854632] mb-6">
              Nutrition
            </h2>

            <p className="text-[#5F564D] leading-7 mb-6">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            {nutrition.map(([label, value], index) => (
              <div
                key={label}
                className={`flex justify-between px-8 py-4 ${
                  index !== 0 ? "border-t border-stone-200" : ""
                }`}
              >
                <span className="text-[#5F564D]">{label}</span>

                <span className="font-bold text-[#854632]">{value}</span>
              </div>
            ))}
          </section>
        </div>
      </article>
    </main>
  );
}
