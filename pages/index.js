import { loadStripe } from '@stripe/stripe-js';

import { PageTitle } from './../components/PageTitle';
import { ProductCard } from './../components/ProductCard';

export default function Home(props) {
    const products = props.products.slice(5, 8);

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

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
            revalidate: 360,
        },
    };
}
