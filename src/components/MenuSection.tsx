import React from 'react';
import { menuData } from '../data/menuData';

interface MenuSectionProps {
  category: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  const categoryData = menuData[category];

  if (!categoryData) return null;

  return (
    <div className="py-8">
      <h2 className="section-title">{categoryData.title}</h2>
      <div className="menu-grid">
        {categoryData.items.map((item, index) => (
          <div 
            key={index} 
            className="menu-item group"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="menu-image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="menu-content">
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-price">{item.price} تومان</p>
              <p className="menu-ingredients">
                {item.ingredients.join(' – ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;