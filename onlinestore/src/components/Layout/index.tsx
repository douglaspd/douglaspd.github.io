import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import { ProductType } from '../../@types/ProductType';
import ShopButton from '../ShoppingButton/ShoppingButton';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import Logo from './Logo';

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
  shoppingCartItems: ShoppingCartProduct [],
  setLoading: Dispatch<SetStateAction<boolean>>,
};

function Layout({ searchQuery, setSearchQuery, setLoading,
  setSearchedProducts, shoppingCartItems }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header
        className="flex items-center p-4 bg-yellow-300 shadow-lg relative"
      >
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full  flex-grow mx-4 max-w-md">
          <SearchBar
            setLoading={ setLoading }
            searchQuery={ searchQuery }
            setSearchQuery={ setSearchQuery }
            setSearchedProducts={ setSearchedProducts }
          />
        </div>
        <div className="flex-shrink-0 ml-auto">
          <ShopButton shoppingCartItems={ shoppingCartItems } />
        </div>
        <hr />
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
