async function getProduct(uid) {
    const res = await fetch(
        `https://best-bud-f23ad-default-rtdb.firebaseio.com/products/${uid}.json`
    );
    const data = await res.json();
    return data;
}

export { getProduct };
