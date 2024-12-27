import React from 'react';

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizza</h2>
        <p className="text-white mb-4">
          Experience the juiciest pizzas in town, made with fresh ingredients and grilled to perfection
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Pizza Launches
        </h3>

        <ul className="text-white">
          <li>
            <strong>Margherita Pizza :</strong> 
            A classic favorite made with fresh mozzarella, tangy tomato sauce, and a
            hint of basil. Perfect for those who love simple yet timeless flavors.
          </li>
          <br />
          <li>
            <strong>Pepperoni Feast :</strong> 
            Loaded with spicy pepperoni slices and gooey cheese on a crispy crust.
            This pizza is a must-have for pepperoni lovers.
          </li>
          <br />
          <li>
            <strong>BBQ Chicken Delight :</strong> 
            Tender chicken chunks, smoky BBQ sauce, and a blend of cheeses create
            a perfect harmony of sweet and savory in every bite.
          </li>
          <br />
          <li>
            <strong>Veggie Supreme :</strong> 
            Packed with bell peppers, mushrooms, olives, and onions, this colorful
            pizza is a treat for vegetarians and health-conscious foodies.
          </li>
          <br />
          <li>
            <strong>Four Cheese Medley :</strong>
             Indulge in the richness of mozzarella, parmesan, cheddar, and gouda
            cheeses, all melted together on a crispy crust for a luxurious experience.
          </li>
          <br />
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="/images/cardback.png"
          alt="pizza"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale mr-7"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
