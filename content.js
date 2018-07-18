"use strict";
function getAjoutArgent()
{
    setContent("Formulaire ajout argent");
}

function getListeMatch()
{
    setContent("Formulaire pari sur match");
}


function getResultatMatch()
{
    setContent("Résultat");
}

function setContent(HtmlContent)
{
    var obj;
    obj = document.getElementById("content");
    obj.innerHTML = HtmlContent;    
}