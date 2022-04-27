import React from "react";

const Menu = ({ items }) => {
  return (
    <main>
      <section className="section-center">
        {items.map((menuItem) => {
          const { id, title, price, img, desc } = menuItem;

          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <p className="price">{price}</p>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Menu;
