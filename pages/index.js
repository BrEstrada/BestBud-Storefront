import { PageTitle } from './../components/PageTitle';

export default function Home() {
    // JSON Array of Objects
    // Array will be our firebase data...
    // 3 Products and display them.
    // add stripe
    // create payment button
    // api routes, ssr, isr
    // getStaticPaths, getStaticPages
    const productData = [1, 2, 3, 4, 5];

    productData.map((item) => console.log(item));
    // along with a component...

    return (
        <>
            <PageTitle title="Best Bud" tagline="Featured Products" />
            <ul>
                {productData.map((product) => (
                    <ListItem key={product} number={product} />
                ))}
            </ul>
        </>
    );
}

function ListItem({ number, props }) {
    return <li>{number}</li>;
}
