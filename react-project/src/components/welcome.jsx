function Welcome({ name, price }) {
    return(
        <>
            <h1 className="font-bold text-xl">Welcome, {name}!</h1>
            <p>the price of product is {price} </p>
        </>
    )
}
export default Welcome;