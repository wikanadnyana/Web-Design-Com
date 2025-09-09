import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link}>
      <button className="rounded-full bg-gradient-to-b from-lightblue to-darkblue py-3 px-8 font-semibold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:opacity-80 hover:shadow-lg active:bg-darkblue">
        {props.button}
      </button>
    </Link>
  );
};

export default Button;
