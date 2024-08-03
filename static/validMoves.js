/******************************************************************************REFACTOR CHECK PENDING*/

const squares = document.querySelectorAll('.square');

// Black move functionality

function isValidBlackPawnMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT

    // Moves with no captures/ Moves with captures
    const isEmptySquare = !finalSquare.firstChild;
    if (isEmptySquare) {
        const twoSquaresForward = finalSquare.id - initialSquare.id == 16;
        const oneSquareForward = finalSquare.id - initialSquare.id == 8;
        const validMoveNoCapture = twoSquaresForward || oneSquareForward;

        if (validMoveNoCapture) return true;
    } else if(!isEmptySquare && finalSquare.firstChild.classList.contains('white')){
        if(finalSquare.id - initialSquare.id == 7) return true;
        if(finalSquare.id - initialSquare.id == 9) return true;
    }

    // Moves with captures

    return false;
}

function isValidRookMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

    // check vertical moves

    // checking top vertical moves
    let id = Number(initialSquare.getAttribute('id'));

    let i = id;
    while (i > id % 8) {
        i -= 8;
        if (!squares[i].firstChild && (i == finalSquare.getAttribute('id'))) return true;
        else if (squares[i].firstChild) break;
    }

    // checking bottom vertical moves
    let j = id;
    while (j < 55) {
        j += 8;
        if (!squares[j].firstChild && (j == finalSquare.getAttribute('id'))) return true;
        else if (squares[j].firstChild) break;
    }

    // checking left vertical moves
    let k = id;
    while (k > id - id % 8) {
        k--;
        if (!squares[k].firstChild && (k == finalSquare.getAttribute('id'))) return true;
        else if (squares[k].firstChild) break;
    }

    // checking right vertical moves
    let l = id;
    while (l < id + (8 - id % 8)) {
        l++;
        if (!squares[l].firstChild && (l == finalSquare.getAttribute('id'))) return true;
        else if (squares[l].firstChild) break;
    }

    // else false
    return false;
}

function isValidKnightMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK

    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    const id = initialSquare.getAttribute('id');
    // Top 4
    if ((id - Number(finalSquare.getAttribute('id'))) === 6) return true;
    if ((id - Number(finalSquare.getAttribute('id'))) === 10) return true;
    if ((id - Number(finalSquare.getAttribute('id'))) === 15) return true;
    if ((id - Number(finalSquare.getAttribute('id'))) === 17) return true;

    // bottom 4
    if ((Number(finalSquare.getAttribute('id')) - id) === 6) return true;
    if ((Number(finalSquare.getAttribute('id')) - id) === 10) return true;
    if ((Number(finalSquare.getAttribute('id')) - id) === 15) return true;
    if ((Number(finalSquare.getAttribute('id')) - id) === 17) return true;

    // else false
    return false

}

function isValidBishopMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

    // Top diagonals
    const id = Number(initialSquare.getAttribute('id'));
    // North west diagonal
    let i = id;
    while (i > 8) {
        i -= 9;
        if (!squares[i].firstChild && squares[i].id == finalSquare.id) return true;
        else if (squares[i].firstChild) break;
    }

    // North east diagonal
    let j = id;
    while (j > 6) {
        j -= 7;
        if (!squares[j].firstChild && squares[j].id == finalSquare.id) return true;
        else if (squares[j].firstChild) break;
    }

    // Bottom diagonals

    // South west diagonal
    let k = id;
    while (k < 57) {
        k += 7;
        if (!squares[k].firstChild && squares[k].id == finalSquare.id) return true;
        else if (squares[k].firstChild) break;
    }

    // South east diagonal
    let l = id;
    while (l < 55) {
        l += 9;
        if (!squares[l].firstChild && squares[l].id == finalSquare.id) return true;
        else if (squares[l].firstChild) break;
    }
    // else false
    return false
}

function isValidQueenMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    if (isValidBishopMove(initialSquare, finalSquare) || isValidRookMove(initialSquare, finalSquare)) return true;

    // else false
    return false;

}

function isValidKingMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

    // top 3 moves
    if (!finalSquare.firstChild && (initialSquare.id - finalSquare.id == 9)) return true;
    if (!finalSquare.firstChild && (initialSquare.id - finalSquare.id == 8)) return true;
    if (!finalSquare.firstChild && (initialSquare.id - finalSquare.id == 7)) return true;

    // side 2 moves
    if (!finalSquare.firstChild && (initialSquare.id - finalSquare.id == 1)) return true;
    if (!finalSquare.firstChild && (finalSquare.id - initialSquare.id == 1)) return true;

    // bottom 3 moves
    if (!finalSquare.firstChild && (finalSquare.id - initialSquare.id == 9)) return true;
    if (!finalSquare.firstChild && (finalSquare.id - initialSquare.id == 8)) return true;
    if (!finalSquare.firstChild && (finalSquare.id - initialSquare.id == 7)) return true;

    // else false
    return false;

}

// White move functionality

function isValidWhitePawnMove(initialSquare, finalSquare) {
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    const isEmptySquare = !finalSquare.firstChild;
    if (isEmptySquare) {
        const twoSquaresForward = initialSquare.id - finalSquare.id == 16;
        const oneSquareForward = initialSquare.id - finalSquare.id == 8;
        const validMoveNoCapture = twoSquaresForward || oneSquareForward;

        if (validMoveNoCapture) return true;
    } else if(!isEmptySquare && finalSquare.firstChild.classList.contains('black')){
        if(initialSquare.id - finalSquare.id == 7) return true;
        if(initialSquare.id - finalSquare.id == 9) return true;
    }

    // Moves with captures
    return false

}

