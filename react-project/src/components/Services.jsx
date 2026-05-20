function Services(props){
    return (
        <div>
            <h1>Welcome to our Services</h1>
            <p>{props.name}</p>
            <h1>Price</h1>
            <p>{props.price}</p>
        </div>
    );
}
export default Services;