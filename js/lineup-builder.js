// Create database
// This will call out to an API eventually to populate live database

const position = document.querySelectorAll('.player');

// registering event handler: selecting a player position
for (var i = 0; i < position.length; i++) {
  position[i].addEventListener('click', function() {
    selectPlayer();
  })
}

// function to create empty lineup
function createEmptyLineup() {
  const lineup = {};
}

// function to display available Players
function showAvailablePlayers() {
  if (position === 'QB') {
    // filter to quarterbacks
  } else if (position === 'RB') {
    // filter to running backs
  } else if (position === 'WR') {
    // filter to wide receivers
  } else if (position === 'TE') {
    // filter to tight ends
  } else if (position === 'Def') {
    // filter to defense
  } else {
    // filter to RB + WR + TE
  }
}

// function to fill a position
function selectPlayer() {
  // fill specific position id
  // update positions filled
  // update available salary
  console.log('Player Selected.')
}

function saveLineup() {
  // save the lineup object
}
