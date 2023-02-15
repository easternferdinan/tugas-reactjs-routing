import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./style/products.css";

export default function Products() {
    return (
        <div className="product-container">
            <Link className="product-cards" to="/products/1">
                <Card
                    img="https://picsum.photos/500/200"
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price="Rp. 1.500.000"
                />
            </Link>
            <Link className="product-cards" to="/products/2">
                <Card
                    img="https://picsum.photos/500/200"
                    title="Lorem Ipsum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price="Rp. 1.500.000"
                />
            </Link>
        </div>
    );
}
