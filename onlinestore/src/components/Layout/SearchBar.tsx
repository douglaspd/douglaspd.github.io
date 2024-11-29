import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../@types/ProductType';

type SearchBarProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
};

function SearchBar({ searchQuery, setSearchQuery,
  setSearchedProducts, setLoading }: SearchBarProps) {
  const navigate = useNavigate();
  const hanldeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    navigate('/');
    const data = await getProductsFromCategoryAndQuery('', searchQuery);
    setSearchedProducts(data.results as ProductType[]);
    setLoading(false);
    console.log(data);
  };

  return (
    <form
      className="flex border rounded bg-white border-gray-200 p-1 m-auto "
      onSubmit={ (e) => { e.preventDefault(); } }
    >
      <input
        type="text"
        data-testid="query-input"
        placeholder="Busque um produto"
        value={ searchQuery }
        onChange={ (e) => { hanldeChange(e); } }
        className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 
          focus:outline-none transition-all"
      />
      <button
        className="text-emerald-400 px-1 ml-auto"
        data-testid="query-button"
        onClick={ handleSearch }
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBar;
