/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//          ==============
//          = AUTOPISTAS =
//          ==============

function disableLongitudcarril() {
  //CADA UNO DE LOS COMBOBOXES E INPUTS DE LA GEOMETRIA PARA SABER COMO DEHABILITAR ETC
  var carriles = PF("carriles").input[0].value;
  var ramalAnalizado = PF("ramal_analizado").input[0].value;
  var ramalAdyacenteArriba = PF("ramal_adyacente").input[0].value;
  var ramalAdyacenteAbajo = PF("ramal_adyacente_abajo").input[0].value;
  var aceleracion = document.getElementById("form:aceleracion_input");
  var aceleracionH = document.getElementById("form:aceleracion_hinput");
  var deceleracion = document.getElementById("form:deceleracion_input");
  var deceleracionH = document.getElementById("form:deceleracion_hinput");
  var distanciaArriba = document.getElementById("form:distanciaArriba_input");
  var distanciaArribaH = document.getElementById("form:distanciaArriba_hinput");
  var distanciaAbajo = document.getElementById("form:distanciaAbajo_input");
  var distanciaAbajoH = document.getElementById("form:distanciaAbajo_hinput");
  if (ramalAnalizado === "ENTRADA") {
    if (aceleracion.disabled === true) {
      aceleracion.disabled = false;
      aceleracion.style = "background: #fff";
      aceleracion.className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    }
    deceleracion.disabled = true;
    deceleracion.value = 0;
    deceleracionH.value = 0;
    deceleracion.style = "background: #d0d0d0";
    deceleracion.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    distanciaArriba.disabled = true;
    distanciaArriba.value = 0;
    distanciaArribaH.value = 0;
    distanciaArriba.style = "background: #d0d0d0";
    distanciaArriba.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    distanciaAbajo.disabled = true;
    distanciaAbajo.value = 0;
    distanciaAbajoH.value = 0;
    distanciaAbajo.style = "background: #d0d0d0";
    distanciaAbajo.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    if (carriles === "6" || carriles === undefined) {
      document.getElementById("form:imdARPorcentaje_input").disabled = false;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdARPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdAR_input").disabled = false;
      document.getElementById("form:imdAR_input").style = "background: #fff";
      document.getElementById("form:imdAR_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:intensidadARporc_input").disabled = false;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #fff";
      document.getElementById("form:intensidadARporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdABPorcentaje_input").disabled = false;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdABPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdAB_input").disabled = false;
      document.getElementById("form:imdAB_input").style = "background: #fff";
      document.getElementById("form:imdAB_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:intensidadABporc_input").disabled = false;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #fff";
      document.getElementById("form:intensidadABporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      if (carriles === "6") {
        const resultEcuacionRamalEntrada = getEcuacionRamalEntrada(
          ramalAdyacenteArriba,
          ramalAnalizado,
          ramalAdyacenteAbajo
        );
        if (
          resultEcuacionRamalEntrada.ecuacion1 && // ecuacion 1
          !resultEcuacionRamalEntrada.ecuacion2 &&
          !resultEcuacionRamalEntrada.ecuacion3
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdABPorcentaje_input").disabled = true;
          document.getElementById("form:imdABPorcentaje_input").value = 0;
          document.getElementById("form:imdABPorcentaje_hinput").value = 0;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = true;
          document.getElementById("form:imdAB_input").value = 0;
          document.getElementById("form:imdAB_hinput").value = 0;
          document.getElementById("form:imdAB_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadABporc_input").value = 0;
          document.getElementById("form:intensidadABporc_hinput").value = 0;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        }

        if (
          resultEcuacionRamalEntrada.ecuacion1 && // ecuacion 1  2
          resultEcuacionRamalEntrada.ecuacion2 &&
          !resultEcuacionRamalEntrada.ecuacion3
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdABPorcentaje_input").disabled = true;
          document.getElementById("form:imdABPorcentaje_input").value = 0;
          document.getElementById("form:imdABPorcentaje_hinput").value = 0;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = true;
          document.getElementById("form:imdAB_input").value = 0;
          document.getElementById("form:imdAB_hinput").value = 0;
          document.getElementById("form:imdAB_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadABporc_input").value = 0;
          document.getElementById("form:intensidadABporc_input").value = 0;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          distanciaArriba.disabled = false;
          distanciaArriba.style = "background: #fff";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaAbajo.disabled = true;
          distanciaAbajo.value = 0;
          distanciaAbajoH.value = 0;
          distanciaAbajo.style = "background: #d0d0d0";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        }

        if (
          resultEcuacionRamalEntrada.ecuacion1 && // ecuacion 1  3
          !resultEcuacionRamalEntrada.ecuacion2 &&
          resultEcuacionRamalEntrada.ecuacion3
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:imdABPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = false;
          document.getElementById("form:imdAB_input").style =
            "background: #fff";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #fff";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaArriba.disabled = true;
          distanciaArriba.value = 0;
          distanciaArribaH.value = 0;
          distanciaArriba.style = "background: #d0d0d0";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          distanciaAbajo.disabled = false;
          distanciaAbajo.style = "background: #fff";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        }

        if (
          resultEcuacionRamalEntrada.ecuacion1 && // ecuacion 1, 2  3
          resultEcuacionRamalEntrada.ecuacion2 &&
          resultEcuacionRamalEntrada.ecuacion3
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:imdABPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = false;
          document.getElementById("form:imdAB_input").style =
            "background: #fff";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #fff";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaArriba.disabled = false;
          distanciaArriba.style = "background: #fff";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaAbajo.disabled = false;
          distanciaAbajo.style = "background: #fff";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        }
      }

      //Enlazar con el metodo de java de tabla y calculo de ramal
    }
    if (carriles === "8" || carriles === "4") {
      document.getElementById("form:imdARPorcentaje_input").disabled = true;
      document.getElementById("form:imdARPorcentaje_input").value = 0;
      document.getElementById("form:imdARPorcentaje_hinput").value = 0;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdARPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdAR_input").disabled = true;
      document.getElementById("form:imdAR_input").value = 0;
      document.getElementById("form:imdAR_hinput").value = 0;
      document.getElementById("form:imdAR_input").style = "background: #d0d0d0";
      document.getElementById("form:imdAR_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:intensidadARporc_input").disabled = true;
      document.getElementById("form:intensidadARporc_input").value = 0;
      document.getElementById("form:intensidadARporc_hinput").value = 0;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #d0d0d0";
      document.getElementById("form:intensidadARporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdABPorcentaje_input").disabled = true;
      document.getElementById("form:imdABPorcentaje_input").value = 0;
      document.getElementById("form:imdABPorcentaje_hinput").value = 0;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdABPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdAB_input").disabled = true;
      document.getElementById("form:imdAB_input").value = 0;
      document.getElementById("form:imdAB_hinput").value = 0;
      document.getElementById("form:imdAB_input").style = "background: #d0d0d0";
      document.getElementById("form:imdAB_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:intensidadABporc_input").disabled = true;
      document.getElementById("form:intensidadABporc_input").value = 0;
      document.getElementById("form:intensidadABporc_hinput").value = 0;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #d0d0d0";
      document.getElementById("form:intensidadABporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    }
  } else if (ramalAnalizado === "SALIDA") {
    deceleracion.disabled = false;
    deceleracion.style = "background: #fff";
    deceleracion.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    aceleracion.disabled = true;
    aceleracion.value = 0;
    aceleracionH.value = 0;
    aceleracion.style = "background: #d0d0d0";
    aceleracion.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    distanciaArriba.disabled = true;
    distanciaArriba.value = 0;
    distanciaArribaH.value = 0;
    distanciaArriba.style = "background: #d0d0d0";
    distanciaArriba.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    distanciaAbajo.disabled = true;
    distanciaAbajo.value = 0;
    distanciaAbajoH.value = 0;
    distanciaAbajo.style = "background: #d0d0d0";
    distanciaAbajo.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    if (carriles === "6" || carriles === undefined) {
      document.getElementById("form:imdARPorcentaje_input").disabled = false;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdARPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdAR_input").disabled = false;
      document.getElementById("form:imdAR_input").style = "background: #fff";
      document.getElementById("form:imdAR_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:intensidadARporc_input").disabled = false;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #fff";
      document.getElementById("form:intensidadARporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdABPorcentaje_input").disabled = false;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdABPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:imdAB_input").disabled = false;
      document.getElementById("form:imdAB_input").style = "background: #fff";
      document.getElementById("form:imdAB_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      document.getElementById("form:intensidadABporc_input").disabled = false;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #fff";
      document.getElementById("form:intensidadABporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      if (carriles === "6") {
        const resultEcuacionRamalSalida = new getEcuacionRamalSalida(
          ramalAdyacenteArriba,
          ramalAnalizado,
          ramalAdyacenteAbajo
        );
        if (
          resultEcuacionRamalSalida.ecuacion5 && // ecuacion 5
          !resultEcuacionRamalSalida.ecuacion6 &&
          !resultEcuacionRamalSalida.ecuacion7
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdABPorcentaje_input").disabled = true;
          document.getElementById("form:imdABPorcentaje_input").value = 0;
          document.getElementById("form:imdABPorcentaje_hinput").value = 0;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = true;
          document.getElementById("form:imdAB_input").value = 0;
          document.getElementById("form:imdAB_hinput").value = 0;
          document.getElementById("form:imdAB_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadABporc_input").value = 0;
          document.getElementById("form:intensidadABporc_hinput").value = 0;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";

          distanciaArriba.disabled = true;
          distanciaArriba.value = 0;
          distanciaArribaH.value = 0;
          distanciaArriba.style = "background: #d0d0d0";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";

          distanciaAbajo.disabled = true;
          distanciaAbajo.value = 0;
          distanciaAbajoH.value = 0;
          distanciaAbajo.style = "background: #d0d0d0";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        }

        if (
          resultEcuacionRamalSalida.ecuacion5 && // ecuacion 5  6
          resultEcuacionRamalSalida.ecuacion6 &&
          !resultEcuacionRamalSalida.ecuacion7
        ) {
          document.getElementById(
            "form:imdARPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = false;
          document.getElementById("form:imdAR_input").style =
            "background: #fff";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #fff";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdABPorcentaje_input").disabled = true;
          document.getElementById("form:imdABPorcentaje_input").value = 0;
          document.getElementById("form:imdABPorcentaje_hinput").value = 0;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = true;
          document.getElementById("form:imdAB_input").value = 0;
          document.getElementById("form:imdAB_hinput").value = 0;
          document.getElementById("form:imdAB_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadABporc_input").value = 0;
          document.getElementById("form:intensidadABporc_hinput").value = 0;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";

          distanciaArriba.disabled = false;
          distanciaArriba.style = "background: #fff";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaAbajo.disabled = true;
          distanciaAbajo.value = 0;
          distanciaAbajoH.value = 0;
          distanciaAbajo.style = "background: #d0d0d0";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        }

        if (
          resultEcuacionRamalSalida.ecuacion5 && // ecuacion 7  5
          !resultEcuacionRamalSalida.ecuacion6 &&
          resultEcuacionRamalSalida.ecuacion7
        ) {
          document.getElementById("form:imdARPorcentaje_input").disabled = true;
          document.getElementById("form:imdARPorcentaje_input").value = 0;
          document.getElementById("form:imdARPorcentaje_hinput").value = 0;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = true;
          document.getElementById("form:imdAR_input").value = 0;
          document.getElementById("form:imdAR_hinput").value = 0;
          document.getElementById("form:imdAR_input").style =
            "background: #d0d0d0";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = true;
          document.getElementById("form:intensidadARporc_input").value = 0;
          document.getElementById("form:intensidadARporc_hinput").value = 0;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #d0d0d0";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
          document.getElementById(
            "form:imdABPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = false;
          document.getElementById("form:imdAB_input").style =
            "background: #fff";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadABporc_input").style =
            "background: #fff";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaArriba.disabled = true;
          distanciaArriba.value = 0;
          distanciaArribaH.value = 0;
          distanciaArriba.style = "background: #d0d0d0";
          distanciaArriba.style = "background: #d0d0d0";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";

          distanciaAbajo.disabled = false;
          distanciaAbajo.style = "background: #fff";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        }

        if (
          resultEcuacionRamalSalida.ecuacion5 && // ecuacion 5, 6  7
          resultEcuacionRamalSalida.ecuacion6 &&
          resultEcuacionRamalSalida.ecuacion7
        ) {
          document.getElementById(
            "form:imdARPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdARPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdARPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAR_input").disabled = false;
          document.getElementById("form:imdAR_input").style =
            "background: #fff";
          document.getElementById("form:imdAR_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadARporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadARporc_input").style =
            "background: #fff";
          document.getElementById("form:intensidadARporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:imdABPorcentaje_input"
          ).disabled = false;
          document.getElementById("form:imdABPorcentaje_input").style =
            "background: #fff";
          document.getElementById("form:imdABPorcentaje_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById("form:imdAB_input").disabled = false;
          document.getElementById("form:imdAB_input").style =
            "background: #fff";
          document.getElementById("form:imdAB_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          document.getElementById(
            "form:intensidadABporc_input"
          ).disabled = false;
          document.getElementById("form:intensidadABporc_input").style =
            "background:#fff";
          document.getElementById("form:intensidadABporc_input").className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaArriba.disabled = false;
          distanciaArriba.style = "background: #fff";
          distanciaArriba.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
          distanciaAbajo.disabled = false;
          distanciaAbajo.style = "background: #fff";
          distanciaAbajo.className =
            "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        }
      }
    }

    //Enlazar con el metodo de java de tabla y calculo de ramal

    if (carriles === "8" || carriles === "4") {
      document.getElementById("form:imdARPorcentaje_input").disabled = true;
      document.getElementById("form:imdARPorcentaje_input").value = 0;
      document.getElementById("form:imdARPorcentaje_hinput").value = 0;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdARPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdAR_input").disabled = true;
      document.getElementById("form:imdAR_input").value = 0;
      document.getElementById("form:imdAR_hinput").value = 0;
      document.getElementById("form:imdAR_input").style = "background: #d0d0d0";
      document.getElementById("form:imdAR_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:intensidadARporc_input").disabled = true;
      document.getElementById("form:intensidadARporc_input").value = 0;
      document.getElementById("form:intensidadARporc_hinput").value = 0;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #d0d0d0";
      document.getElementById("form:intensidadARporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdABPorcentaje_input").disabled = true;
      document.getElementById("form:imdABPorcentaje_input").value = 0;
      document.getElementById("form:imdABPorcentaje_hinput").value = 0;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdABPorcentaje_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:imdAB_input").disabled = true;
      document.getElementById("form:imdAB_input").value = 0;
      document.getElementById("form:imdAB_input").value = 0;
      document.getElementById("form:imdAB_input").style = "background: #d0d0d0";
      document.getElementById("form:imdAB_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      document.getElementById("form:intensidadABporc_input").disabled = true;
      document.getElementById("form:intensidadABporc_input").value = 0;
      document.getElementById("form:intensidadABporc_input").value = 0;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #d0d0d0";
      document.getElementById("form:intensidadABporc_input").className =
        "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
    }
  } else {
    deceleracion.disabled = false;
    deceleracion.style = "background: #fff";
    deceleracion.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    aceleracion.disabled = false;
    aceleracion.style = "background: #fff";
    aceleracion.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    distanciaArriba.disabled = false;
    distanciaArriba.style = "background: #fff";
    distanciaArriba.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    distanciaAbajo.disabled = false;
    distanciaAbajo.style = "background: #fff";
    distanciaAbajo.className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:imdARPorcentaje_input").disabled = false;
    document.getElementById("form:imdARPorcentaje_input").style =
      "background: #fff";
    document.getElementById("form:imdARPorcentaje_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:imdAR_input").disabled = false;
    document.getElementById("form:imdAR_input").style = "background: #fff";
    document.getElementById("form:imdAR_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:intensidadARporc_input").disabled = false;
    document.getElementById("form:intensidadARporc_input").style =
      "background: #fff";
    document.getElementById("form:intensidadARporc_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:imdABPorcentaje_input").disabled = false;
    document.getElementById("form:imdABPorcentaje_input").style =
      "background: #fff";
    document.getElementById("form:imdABPorcentaje_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:imdAB_input").disabled = false;
    document.getElementById("form:imdAB_input").style = "background: #fff";
    document.getElementById("form:imdAB_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
    document.getElementById("form:intensidadABporc_input").disabled = false;
    document.getElementById("form:intensidadABporc_input").style =
      "background: #fff";
    document.getElementById("form:intensidadABporc_input").className =
      "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
  }
}

function getEcuacionRamalEntrada(
  ramalAdyCorrArriba,
  ramalAnalizado,
  ramalAdyCorrAbajo
) {
  const resultEcuacionEntrada = new ResultEcuacionRamalEntrada(
    false,
    false,
    false
  );
  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
  }

  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
  }

  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
    resultEcuacionEntrada.setEcuacion3(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
    resultEcuacionEntrada.setEcuacion2(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
    resultEcuacionEntrada.setEcuacion3(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
    resultEcuacionEntrada.setEcuacion2(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "ENTRADA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionEntrada.setEcuacion1(true);
    resultEcuacionEntrada.setEcuacion2(true);
    resultEcuacionEntrada.setEcuacion3(true);
  }

  return resultEcuacionEntrada;
}

function getEcuacionRamalSalida(
  ramalAdyCorrArriba,
  ramalAnalizado,
  ramalAdyCorrAbajo
) {
  const resultEcuacionSalida = new ResultEcuacionRamalSalida(
    false,
    false,
    false
  );
  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
  }

  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
  }

  if (
    ramalAdyCorrArriba === "Selecciona un valor" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
    resultEcuacionSalida.setEcuacion7(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
    resultEcuacionSalida.setEcuacion6(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "Selecciona un valor"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
    resultEcuacionSalida.setEcuacion6(true);
  }

  if (
    ramalAdyCorrArriba === "ENTRADA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
    resultEcuacionSalida.setEcuacion6(true);
    resultEcuacionSalida.setEcuacion7(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "ENTRADA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
  }

  if (
    ramalAdyCorrArriba === "SALIDA" &&
    ramalAnalizado === "SALIDA" &&
    ramalAdyCorrAbajo === "SALIDA"
  ) {
    resultEcuacionSalida.setEcuacion5(true);
    resultEcuacionSalida.setEcuacion7(true);
  }

  return resultEcuacionSalida;
}

class ResultEcuacionRamalEntrada {
  constructor(ecuacion1, ecuacion2, ecuacion3) {
    this.setEcuacion1(ecuacion1);
    this.setEcuacion2(ecuacion2);
    this.setEcuacion3(ecuacion3);
  }

  setEcuacion1(value) {
    this.ecuacion1 = value;
  }

  setEcuacion2(value) {
    this.ecuacion2 = value;
  }

  setEcuacion3(value) {
    this.ecuacion3 = value;
  }
}

class ResultEcuacionRamalSalida {
  constructor(ecuacion5, ecuacion6, ecuacion7) {
    this.setEcuacion5(ecuacion5);
    this.setEcuacion6(ecuacion6);
    this.setEcuacion7(ecuacion7);
  }

  setEcuacion5(value) {
    this.ecuacion5 = value;
  }

  setEcuacion6(value) {
    this.ecuacion6 = value;
  }

  setEcuacion7(value) {
    this.ecuacion7 = value;
  }
}

function disableIntensidadA() {
  if (document.getElementById("form:intensidadAporc_hinput").value == 0) {
    if (
      document.getElementById("form:imdAPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imdA_hinput").value > 0
    ) {
      document.getElementById("form:intensidadAporc_input").disabled = true;

      document.getElementById("form:intensidadAporc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadAporc_input").disabled = false;
      document.getElementById("form:intensidadAporc_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdA() {
  if (
    document.getElementById("form:imdAPorcentaje_hinput").value == 0 &&
    document.getElementById("form:imdA_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadAporc_hinput").value > 0) {
      document.getElementById("form:imdAPorcentaje_input").disabled = true;
      document.getElementById("form:imdA_input").disabled = true;
      document.getElementById("form:imdAPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdA_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdAPorcentaje_input").disabled = false;
      document.getElementById("form:imdA_input").disabled = false;
      document.getElementById("form:imdAPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdA_input").style = "background: #fff";
    }
  }
}

function disableIntensidadD() {
  if (document.getElementById("form:intensidadDporc_hinput").value == 0) {
    if (
      document.getElementById("form:imdDPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imdD_hinput").value > 0
    ) {
      document.getElementById("form:intensidadDporc_input").disabled = true;
      document.getElementById("form:intensidadDporc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadDporc_input").disabled = false;
      document.getElementById("form:intensidadDporc_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdD() {
  if (
    document.getElementById("form:imdDPorcentaje_hinput").value == 0 &&
    document.getElementById("form:imdD_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadDporc_hinput").value > 0) {
      document.getElementById("form:imdDPorcentaje_input").disabled = true;
      document.getElementById("form:imdD_input").disabled = true;
      document.getElementById("form:imdDPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdD_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdDPorcentaje_input").disabled = false;
      document.getElementById("form:imdD_input").disabled = false;
      document.getElementById("form:imdDPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdD_input").style = "background: #fff";
    }
  }
}

function disableIntensidadR() {
  if (document.getElementById("form:intensidadRporc_hinput").value == 0) {
    if (
      document.getElementById("form:imdRPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imdR_hinput").value > 0
    ) {
      document.getElementById("form:intensidadRporc_input").disabled = true;
      document.getElementById("form:intensidadRporc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadRporc_input").disabled = false;
      document.getElementById("form:intensidadRporc_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdR() {
  if (
    document.getElementById("form:imdRPorcentaje_hinput").value == 0 &&
    document.getElementById("form:imdR_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadRporc_hinput").value > 0) {
      document.getElementById("form:imdRPorcentaje_input").disabled = true;
      document.getElementById("form:imdR_input").disabled = true;
      document.getElementById("form:imdRPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdR_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdRPorcentaje_input").disabled = false;
      document.getElementById("form:imdR_input").disabled = false;
      document.getElementById("form:imdRPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdR_input").style = "background: #fff";
    }
  }
}

function disableIntensidadAR() {
  if (document.getElementById("form:intensidadARporc_hinput").value == 0) {
    if (
      document.getElementById("form:imdARPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imdAR_hinput").value > 0
    ) {
      document.getElementById("form:intensidadARporc_input").disabled = true;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadARporc_input").disabled = false;
      document.getElementById("form:intensidadARporc_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdAR() {
  if (
    document.getElementById("form:imdARPorcentaje_hinput").value == 0 &&
    document.getElementById("form:imdAR_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadARporc_hinput").value > 0) {
      document.getElementById("form:imdARPorcentaje_input").disabled = true;
      document.getElementById("form:imdAR_input").disabled = true;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdAR_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdARPorcentaje_input").disabled = false;
      document.getElementById("form:imdAR_input").disabled = false;
      document.getElementById("form:imdARPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdAR_input").style = "background: #fff";
    }
  }
}

function disableIntensidadAB() {
  if (document.getElementById("form:intensidadABporc_hinput").value == 0) {
    if (
      document.getElementById("form:imdABPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imdAB_hinput").value > 0
    ) {
      document.getElementById("form:intensidadABporc_input").disabled = true;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadABporc_input").disabled = false;
      document.getElementById("form:intensidadABporc_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdAB() {
  if (
    document.getElementById("form:imdABPorcentaje_hinput").value == 0 &&
    document.getElementById("form:imdAB_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadABporc_hinput").value > 0) {
      document.getElementById("form:imdABPorcentaje_input").disabled = true;
      document.getElementById("form:imdAB_input").disabled = true;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdAB_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdABPorcentaje_input").disabled = false;
      document.getElementById("form:imdAB_input").disabled = false;
      document.getElementById("form:imdABPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imdAB_input").style = "background: #fff";
    }
  }
}
