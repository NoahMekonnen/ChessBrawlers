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
            if (e.target.classList.contains('square')) {
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
                if(isBlack){
                    // PAWN MOVE
                    if(isPawn && isValidBlackPawnMove(initialSquare, e.target)) e.target.prepend(selectedPiece);

                    // ROOK MOVE
                    if(isRook && isValidBlackRookMove(initialSquare, e.target)) e.target.prepend(selectedPiece);

                    // KNIGHT MOVE
                    if(isKnight && isValidBlackKnightMove(initialSquare, e.target)) e.target.prepend(selectedPiece);
                }

                // WHITE PAWN MOVE
                const isWhitePawn = selectedPiece.classList.contains('white') && selectedPiece.classList.contains('pawn')
                if(isWhitePawn && isValidWhitePawnMove(initialSquare, e.target)) e.target.prepend(selectedPiece);
            }
        }
    }
}

movePieces()