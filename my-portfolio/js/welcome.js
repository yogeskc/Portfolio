const blocker = document.getElementById( 'blocker' );
const instructions = document.getElementById( 'instructions' );

function lockControls() {
    controls.lock();
}

function hideInstructions() {
    instructions.style.display = 'none';
    blocker.style.display = 'none';
}

function showInstructions() {
    blocker.style.display = 'block';
    instructions.style.display = '';
}

export { lockControls, hideInstructions, showInstructions };
    