export default function Dashboard (props) {
    return (
        <h1 className="p-4 font-semibold text-2xl"> Welcome, <span className="text-green-400">{props.username}</span></h1>


    )
}