/******************************************************************************REFACTOR CHECK PENDING*/

const squares = document.querySelectorAll('.square');

// Black move functionality

function isValidBlackPawnMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT

    // Moves with no captures
    const twoSquaresForward = initialSquare.getAttribute('rownum') - finalSquare.getAttribute('rownum') === 2;
    const oneSquareForward = initialSquare.getAttribute('rownum') - finalSquare.getAttribute('rownum') === 1;
    const validMoveNoCapture = twoSquaresForward || oneSquareForward;

    const isEmptySquare = !finalSquare.firstChild;
    if(isEmptySquare && validMoveNoCapture) return true;

    // Moves with captures
    return false;

}

function isValidBlackRookMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

    // check vertical moves

    // checking top vertical moves
    let id = Number(initialSquare.getAttribute('id'));

    let i = id;
    while(i > id % 8){
        i-=8;
        if(!squares[i].firstChild && (i == finalSquare.getAttribute('id'))) return true;
        else if(squares[i].firstChild) break;
    }

    // checking bottom vertical moves
    let j = id;
    while(j < 55){
        j+=8;
        if(!squares[j].firstChild && (j == finalSquare.getAttribute('id'))) return true;
        else if(squares[j].firstChild) break;
    }

    // checking left vertical moves
    let k = id;
    while(k > id - id % 8){
        k--;
        if(!squares[k].firstChild && (k == finalSquare.getAttribute('id'))) return true;
        else if(squares[k].firstChild) break;
    }

    // checking right vertical moves
    let l = id;
    while(l < id + (8 - id % 8)){
        l++;
        if(!squares[l].firstChild && (l == finalSquare.getAttribute('id'))) return true;
        else if(squares[l].firstChild) break;
    }
}

function isValidBlackKnightMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK

    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    const id = initialSquare.getAttribute('id');
    // Top 4
    if((id - Number(finalSquare.getAttribute('id'))) === 6) return true;
    if((id - Number(finalSquare.getAttribute('id'))) === 10) return true;
    if((id - Number(finalSquare.getAttribute('id'))) === 15) return true;
    if((id - Number(finalSquare.getAttribute('id'))) === 17) return true;

    // bottom 4
    if((Number(finalSquare.getAttribute('id')) - id) === 6) return true;
    if((Number(finalSquare.getAttribute('id')) - id) === 10) return true;
    if((Number(finalSquare.getAttribute('id')) - id) === 15) return true;
    if((Number(finalSquare.getAttribute('id')) - id) === 17) return true;

}

function isValidBlackBishopMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    
}

function isValidBlackQueenMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

function isValidBlackKingMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

// White move functionality

function isValidWhitePawnMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures
    const twoSquaresForward = finalSquare.getAttribute('rownum') - initialSquare.getAttribute('rownum') === 2;
    const oneSquareForward = finalSquare.getAttribute('rownum') - initialSquare.getAttribute('rownum') === 1;
    const validMoveNoCapture = twoSquaresForward || oneSquareForward

    const isEmptySquare = !finalSquare.firstChild

    if(isEmptySquare && validMoveNoCapture) return true

    // Moves with captures
    return false

}

function isValidWhiteRookMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

function isValidWhiteKnightMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

function isValidWhiteBishopMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

function isValidWhiteQueenMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}

function isValidWhiteKingMove(initialSquare, finalSquare){
    // CHECK IF KING IN CHECK
    // IMPLEMENT EN PASSANT
    // CHECK IF PIECES IN THE WAY

    // Moves with no captures

}