import Score from "./Score.jsx"


function Student(props) {
    const student = props.student
    return (
        
        <div>
            <p>{student.name}</p>
            <p>{student.bio}</p>
            <div>
            {
                student.scores.map((studentScores,idx) => 
                    <Score
                    key={idx}
                    scores={studentScores}
                    />
                    )
            }
            </div>
            
        </div>
        
    )
}

export default Student