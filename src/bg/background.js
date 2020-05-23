// if you checked "fancy-settings" in extensionizr.com, uncomment this lines
// function save_options() {
//   var color = document.getElementById('color').value;
//   var likesColor = document.getElementById('like').checked;
//   chrome.storage.sync.set({
//     favoriteColor: color,
//     likesColor: likesColor
//   }, function() {
//     status.textContent = 'Options saved.';
//     setTimeout(function() {
//       status.textContent = '';
//     }, 750);
//   });
// }

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
// function restore_options() {
  // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     favoriteColor: 'red',
//     likesColor: true
//   }, function(items) {
//     document.getElementById('color').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }

import UTILS from '../../js/utils.js';

let isMasked = true;

const changeIsMasked = ( parameterReceived ) =>{
  isMasked = !parameterReceived;
};

chrome.runtime.onInstalled.addListener(function () {
  const ID_PARENT_DATA_4DEVS = "G_4DEVS_PARENT";
  
  iniciarContextMenus();

  function iniciarContextMenus(){
    iniciarPrimeiroNivel();
  };

  function iniciarPrimeiroNivel(){
    chrome.contextMenus.create({
      title: "Gerador 4Devs",
      id: ID_PARENT_DATA_4DEVS,
      contexts:["editable"],
    });

    iniciarSegundoNivel();
  };

  function iniciarSegundoNivel(){
    chrome.contextMenus.create({
      title: "Gerar NOME",
      id: "GERAR_NOME_SOBRENOME",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      title: "Gerar EMAIL",
      id: "GERAR_EMAIL",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      title: "Gerar LorenIpsum (1024 caracteres)",
      id: "GERAR_LOREN_IPSUM",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    //Gerador de Email yopemail

    chrome.contextMenus.create({
      type:  "separator",
      id: "SEPARATOR_MASCARA_1",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      title: "USAR MÁSCARA",
      type: "checkbox",
      id: "CHECKBOX_GERAR_COM_MASCARA",
      parentId: ID_PARENT_DATA_4DEVS,
      checked: isMasked,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      type:  "separator",
      id: "SEPARATOR_MASCARA_2",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });


    chrome.contextMenus.create({
      title: "Gerar CPF",
      id: "GERAR_CPF",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });
    
    chrome.contextMenus.create({
      title: "GERAR CNPJ",
      id: "GERAR_CNPJ",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });
    
    chrome.contextMenus.create({
      title: "GERAR RG",
      id: "GERAR_RG",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      title: "GERAR CEI",
      id: "GERAR_CEI",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });

    chrome.contextMenus.create({
      title: "GERAR NIT",
      id: "GERAR_NIT",
      parentId: ID_PARENT_DATA_4DEVS,
      contexts:["editable"]
    });
  };


  chrome.contextMenus.onClicked.addListener( (info, tab)=>{
    const FUNCTIONS = {
      GERAR_CPF: UTILS.gerarCPF,
      GERAR_CNPJ: UTILS.gerarCNPJ,
      GERAR_RG: UTILS.gerarRG,
      GERAR_CEI: UTILS.gerarCEI,
      GERAR_NIT: UTILS.gerarNIT,
      GERAR_NOME_SOBRENOME: UTILS.gerarNomeSobrenome,
      GERAR_EMAIL: UTILS.gerarEmail,
      GERAR_LOREN_IPSUM: UTILS.gerarLorenIpsum,
      CHECKBOX_USAR_MASCARA: changeIsMasked,
    };

    let functionCalled = FUNCTIONS[info.menuItemId];
    
    if(functionCalled){
      let functionReturn = functionCalled( isMasked );
      if( functionReturn ){
        chrome.tabs.sendMessage(tab.id, {retorno: functionReturn, id: 'change_value'});  
      }
      
    }
  });

});


