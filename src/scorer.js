function showScore(a, b) {
    if(a === 0 && b === 0) {
        return "Love-Love";
    } 
    if(a === 1 && b === 0) {
        return "15-Love";
    }  
    if(a === 2 && b === 0) {
        return "30-Love";
    }
}

export default showScore