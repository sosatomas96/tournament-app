const players = [];


function addPlayer(){
    let playerInput = $( '#players' ); 
    const newPlayer = playerInput.val();  
    players.push(newPlayer);
    $( '#players' ).append( '<div class="player-item">' + newPlayer + '</div>' );
    $( '.player-item' ).slideDown(1000);
}