
export const Card = ({title, children }) => (
    <div className="post">
        <h2>{title}</h2>
        <p>{children}</p>

    </div>
)

export default Card;