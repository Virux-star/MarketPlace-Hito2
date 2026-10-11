import { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Vela Aromática de Vainilla y Canela',
      description: 'Vela hecha a mano con cera de soja 100% natural.',
      price: 7500,
      category: 'Dulcera',
      img_url: 'https://images.unsplash.com/photo-1603006905003',
      vendor_name: 'Velas Artesanales Chile',
      vendor_city: 'Peñaflor'
    }
  ]);

  const [favorites, setFavorites] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts, favorites, setFavorites }}>
      {children}
    </PostsContext.Provider>
  );
};
