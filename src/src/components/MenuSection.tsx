import React from 'react';
import { menuData } from '../data/menuData';

interface MenuSectionProps {
  category: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  const categoryData = menuData[category];

  if (!categoryData) return null;

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {categoryData.title}
      </h2>
      <div className="menu-grid">
        {categoryData.items.map((item, index) => (
          <article key={index} className="menu-item">
            <div className="menu-image-wrapper">
              <img
                src={item.image}
                alt={item.name}
                className="menu-image"
                loading="lazy"
              />
              <div className="menu-image-overlay" />
            </div>
            <div className="menu-content">
              <h3 className="menu-title">{item.name}</h3>
              <div className="menu-price">{item.price} تومان</div>
              <div className="menu-ingredients">
                {item.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="ingredient-tag">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;