/******************************************************************************REFACTOR CHECK PENDING*/

// Giving pieces drag and drop functionality

function movePieces() {
    let selectedPiece;
    let initialSquare;

    const squares = document.querySelectorAll('.square');

    for (let square of squares) {
        square.addEventListener('dragstart', dragStart);
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', drop);

        function dragStart(e) {
            initialSquare = e.target.parentNode
            selectedPiece = e.target;
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function drop(e) {

            // make sure piece drops in a square
            console.log("indrop", e.target.classList.contains('square'), e.currentTarget)
            if (e.currentTarget.classList.contains('square')) {
                console.log("hi")
                // BLACK PIECES
                const isBlack = selectedPiece.classList.contains('black');
                const isWhite = selectedPiece.classList.contains('white');
                const isPawn = selectedPiece.classList.contains('pawn');
                const isRook = selectedPiece.classList.contains('rook');
                const isKnight = selectedPiece.classList.contains('knight');
                const isBishop = selectedPiece.classList.contains('bishop');
                const isQueen = selectedPiece.classList.contains('queen');
                const isKing = selectedPiece.classList.contains('king');

                // BLACK PIECES
                if (isBlack) {
                    // No capture/ Capture
                    if (!e.target.firstChild) {
                        // PAWN MOVE
                        if (isPawn && isValidBlackPawnMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // ROOK MOVE
                        if (isRook && isValidRookMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // KNIGHT MOVE
                        if (isKnight && isValidKnightMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // BISHOP MOVE
                        if (isBishop && isValidBishopMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // QUEEN MOVE
                        if (isQueen && isValidQueenMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // KING MOVE
                        if (isKing && isValidKingMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);
                    } else {
                        // PAWN MOVE
                        if (isPawn && isValidBlackPawnMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // ROOK MOVE
                        if (isRook && isValidRookMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // KNIGHT MOVE
                        if (isKnight && isValidKnightMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // BISHOP MOVE
                        if (isBishop && isValidBishopMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // QUEEN MOVE
                        if (isQueen && isValidQueenMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // KING MOVE
                        if (isKing && isValidKingMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }
                    }
                } else {
                    if (!e.currentTarget.firstChild) {
                        // PAWN MOVE
                        if (isPawn && isValidWhitePawnMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // ROOK MOVE
                        if (isRook && isValidRookMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // KNIGHT MOVE
                        if (isKnight && isValidKnightMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // BISHOP MOVE
                        if (isBishop && isValidBishopMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // QUEEN MOVE
                        if (isQueen && isValidQueenMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);

                        // KING MOVE
                        if (isKing && isValidKingMove(initialSquare, e.currentTarget)) e.currentTarget.prepend(selectedPiece);
                    } else {
                        // PAWN MOVE
                        console.log("white child")
                        if (isPawn && isValidWhitePawnMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // ROOK MOVE
                        if (isRook && isValidRookMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // KNIGHT MOVE
                        if (isKnight && isValidKnightMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // BISHOP MOVE
                        if (isBishop && isValidBishopMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // QUEEN MOVE
                        if (isQueen && isValidQueenMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }

                        // KING MOVE
                        if (isKing && isValidKingMove(initialSquare, e.currentTarget)) {
                            e.currentTarget.firstChild.remove();
                            e.currentTarget.prepend(selectedPiece);
                        }
                    }
                }
            }
        }
    }
}

movePieces()