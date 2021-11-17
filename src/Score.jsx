const Score = (props) => {
    return(
        <div>
            <p>{props.scores.score}</p>
            <p>{props.scores.date}</p>
        </div>
    )
}

export default Score