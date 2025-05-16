import React from 'react';

const categories = [
    { emoji: '🍕', name: '피자' },
    { emoji: '🥗', name: '샐러드' },
    { emoji: '🍔', name: '햄버거' },
    { emoji: '🍲', name: '한식' },
    { emoji: '🍜', name: '분식' },
    { emoji: '🍗', name: '치킨' },
    { emoji: '🍣', name: '초밥' },
    { emoji: '🥪', name: '샌드위치' },
    { emoji: '🍝', name: '파스타' },
    { emoji: '🍩', name: '디저트' },
    { emoji: '🥤', name: '커피' },
    { emoji: '⋯', name: '더보기' },
];

const FoodCategory = () => {
    return (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px', 
            padding: '16px', 
          
           
        
        }}>
            {categories.map((item, index) => (
                <div key={index} style={{ 
                    textAlign: 'center',
                    backgroundColor: '#FAFAFB',
                    fontSize: '14px', 
                    width: '108px',
                    height: '74px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{ fontSize: '24px' }}>{item.emoji}</div>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default FoodCategory;
