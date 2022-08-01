/////////////{Item Selecionado}////////////
//>Constantes e criação das Janelas//
const win1            = document.createElement('DIV');  win1.setAttribute('id', 'warningMassage1');
const win2            = document.createElement('DIV');  win2.setAttribute('id', 'warningMassage2');//
const titleTextW1     = document.createElement('H1');   titleTextW1.innerHTML = '{ITEM}{COUNT}';
const imageThumb      = document.createElement('IMG');
const videoThumb      = document.createElement('VIDEO');
const sourceVideo     = document.createElement('SOURCE');
///WIN2 OPENSOURCE//

const titleText     = document.createElement('H1');
const subTitleTxT   = document.createElement('H2');
const descText      = document.createElement('H3');
const obsText       = document.createElement('H4');
const footerText    = document.createElement('H5');
const countText     = document.createElement('SPAN');
const confirmButton = document.createElement('BUTTON');
const cancelButton  = document.createElement('BUTTON');   cancelButton.setAttribute('id', 'cancelClaim');
cancelButton.setAttribute('onclick', 'onItemViewerClose(), onMenusTabsClose()');
const sacrifyButton = document.createElement('BUTTON');   sacrifyButton.setAttribute('id', 'SacrificeALL');
sacrifyButton.setAttribute('onmouseover', 'sacriOver()'); sacrifyButton.setAttribute('onmouseout', 'sacriOuter()');
const inputDescript = document.createElement('INPUT');  inputDescript.setAttribute('id', 'InputDesc');


//TargetsInputs
const itemIDTarget      = document.createElement('INPUT');  itemIDTarget    .setAttribute('disabled', 'true');
const itemNameTarget    = document.createElement('INPUT');  itemNameTarget  .setAttribute('disabled', 'true');
const itemCountTarget   = document.createElement('INPUT');  itemCountTarget .setAttribute('disabled', 'true');
const itemIconTarget    = document.createElement('INPUT');  itemIconTarget  .setAttribute('disabled', 'true');
const itemTypeTarget    = document.createElement('INPUT');  itemTypeTarget  .setAttribute('disabled', 'true');
const itemPathTarget    = document.createElement('INPUT');  itemPathTarget  .setAttribute('disabled', 'true');
const itemCountLocal    = document.createElement('INPUT');  itemCountLocal  .setAttribute('disabled', 'true')

const itemClaimed       = 1;
const itemSacrified     = 5;