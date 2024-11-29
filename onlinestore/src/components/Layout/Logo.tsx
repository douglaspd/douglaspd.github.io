import { BsBox } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <h1
        className="text-blue-500 hover:text-blue-700 active:text-blue-200
      flex items-center justify-center gap-2"
      >
        <span className="text-3xl md:text-5xl">
          <BsBox />
        </span>
        <span className="flex-col text-center text-2xl hidden md:flex">
          <span className="uppercase font-semibold leading-6 text-white left-2">Online Store</span>
          <span className="lowercase font-light text-lg leading-4">Frontend Project </span>
        </span>
      </h1>
    </Link>
  );
}

export default Logo;
