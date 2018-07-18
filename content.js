"use strict";

function setContent(HtmlContent)
{
    var obj;
    obj = document.getElementById("content");
    obj.innerHTML = HtmlContent;    
}

function getAjoutArgent()
{
    var formulaire = "";
    formulaire = getFormulaireAjoutArgent();
    setContent(formulaire);
}

function getFormulaireAjoutArgent()
{
    return "Formulaire ajout Argent";
}

function getListeMatch()
{
    setContent("Formulaire pari sur match");
}


function getResultatMatch()
{
    setContent("Résultat");
}

