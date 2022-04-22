import { PageTitle } from './../components/PageTitle';
import { ProductCard } from './../components/ProductCard';

export default function Home(props) {
    const products = props.products;

    return (
        <>
            <PageTitle title="Best Bud" tagline="Best Selling Products" />
            <main>
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        'https://best-bud-f23ad-default-rtdb.firebaseio.com/products.json'
    );
    const productData = await res.json();
    const products = Object.values(productData);

    return {
        props: {
            products,
        },
    };
}
