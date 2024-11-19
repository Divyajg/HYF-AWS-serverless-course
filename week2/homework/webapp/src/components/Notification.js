export default function Notification (props){
    const notifications={
        margin: "auto",
        color: "green",
        textAlign: "center",
        padding: "10px"
    }
    return (
        <h3 style={notifications}>{props.message}</h3>
    )
}