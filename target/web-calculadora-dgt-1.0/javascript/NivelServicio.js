/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//      ================
//      =  AUTOPISTAS  =
//      ================

function disableInputVelocidadAutopistas() {
  if (
    document.getElementById("form:vlb_hinput").value == 0 &&
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    document.getElementById("form:vlb_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").style =
      "background: #fff";
    document.getElementById("form:vlb_input").style = "background: #fff";
    PF("anchura").enable();
    PF("obstaculos").enable();
    PF("enlaces").enable();
  } else if (document.getElementById("form:vlb_hinput").value == 0) {
    if (document.getElementById("form:velocidad_medida_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #d0d0d0";
      PF("anchura").disable();
      PF("obstaculos").disable();
      PF("enlaces").disable();
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #fff";
      document.getElementById("form:vlb_input").style = "background: #fff";
      PF("anchura").enable();
      PF("obstaculos").enable();
      PF("enlaces").enable();
    }
  } else if (
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    if (document.getElementById("form:vlb_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #d0d0d0";
    } else {
      console.log("Entra aqui");
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #fff";
      document.getElementById("form:vlb_input").style = "background: #fff";
    }
  }
}

//      ===================
//      =  CONV.ESTANDAR  =
//      ===================

function disableInputVelocidadEstandar() {
  if (
    document.getElementById("form:vlb_hinput").value == 0 &&
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    document.getElementById("form:vlb_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").style =
      "background: #fff";
    document.getElementById("form:vlb_input").style = "background: #fff";
    PF("anchura").enable();
    PF("anchura_arcen").enable();
    PF("accesos").enable();
  } else if (document.getElementById("form:vlb_hinput").value == 0) {
    if (document.getElementById("form:velocidad_medida_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #d0d0d0";
      PF("anchura_arcen").disable();
      PF("anchura").disable();
      PF("accesos").disable();
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #fff";
      PF("anchura").enable();
      PF("anchura_arcen").enable();
      PF("accesos").enable();
    }
  } else if (
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    if (document.getElementById("form:vlb_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #fff";
    }
  }
}

function radiobuttonTipoCarretera() {
  for (var i = 0; i < PF("tipoCarretera").inputs.length; i++) {
    if (PF("tipoCarretera").inputs[i].checked) {
      var valor = PF("tipoCarretera").inputs[i].value;

      if (valor == "Carretera de tipo II") {
        document.getElementById("form:vlb_input").disabled = true;
        document.getElementById("form:vlb_hinput").value = 0;
        document.getElementById("form:vlb_input").value = 0;
        document.getElementById("form:vlb_input").style = "background: #d0d0d0";

        document.getElementById("form:velocidad_medida_input").disabled = true;
        document.getElementById("form:velocidad_medida_input").value = 0;
        document.getElementById("form:velocidad_medida_hinput").value = 0;
        document.getElementById("form:velocidad_medida_input").style =
          "background: #d0d0d0";
        PF("anchura_arcen").disable();
        PF("anchura").disable();
        PF("accesos").disable();
        document.getElementById("form:velocidadMedia_input").disabled = true;
        document.getElementById("form:velocidadMedia_input").style =
          "background: #d0d0d0";
      } else {
        document.getElementById("form:vlb_input").disabled = false;
        document.getElementById("form:vlb_input").style = "background: #fff";

        document.getElementById("form:velocidad_medida_input").disabled = false;
        document.getElementById("form:velocidad_medida_input").style =
          "background: #fff";
        PF("anchura_arcen").enable();
        PF("anchura").enable();
        PF("accesos").enable();
        document.getElementById("form:velocidadMedia_input").disabled = false;
        document.getElementById("form:velocidadMedia_input").style =
          "background: #fff";
      }
    }
  }
}

//      ================
//      =  OTRAS VIAS  =
//      ================

function especificoRampa() {
  if (document.getElementById("form:rampa_hinput").value > 0) {
    document.getElementById("form:pendiente_input").disabled = true;
    document.getElementById("form:pendiente_input").value = 0;
    document.getElementById("form:pendiente_hinput").value = 0;
    document.getElementById("form:pendiente_input").style =
      "background: #d0d0d0";
  } else {
    document.getElementById("form:pendiente_input").disabled = false;
    document.getElementById("form:pendiente_input").style = "background: #fff";
  }

  if (document.getElementById("form:pendiente_hinput").value > 0) {
    document.getElementById("form:rampa_input").disabled = true;
    document.getElementById("form:rampa_hinput").value = 0;
    document.getElementById("form:rampa_input").value = 0;
    document.getElementById("form:rampa_input").style = "background: #d0d0d0";
  } else {
    document.getElementById("form:rampa_input").disabled = false;
    document.getElementById("form:rampa_input").style = "background: #fff";
  }
}

function especificoRampaSelect() {
  for (var i = 0; i < PF("especifico").inputs.length; i++) {
    if (PF("especifico").inputs[i].checked) {
      console.log(PF("especifico").inputs[i].value);
      var valor = PF("especifico").inputs[i].value;

      if (valor === "Si") {
        document.getElementById("form:pendiente_input").disabled = false;
        document.getElementById("form:pendiente_input").style =
          "background: #fff";
        document.getElementById("form:pendiente_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:rampa_input").disabled = false;
        document.getElementById("form:rampa_input").style = "background: #ff";
        document.getElementById("form:rampa_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:longitud_input").disabled = false;
        document.getElementById("form:longitud_input").style =
          "background: #fff";
        document.getElementById("form:longitud_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
      }

      if (valor === "No") {
        console.log("NO");
        document.getElementById("form:pendiente_input").disabled = true;
        document.getElementById("form:pendiente_hinput").value = 0;
        document.getElementById("form:pendiente_input").value = 0;
        document.getElementById("form:pendiente_input").style =
          "background: #d0d0d0";
        document.getElementById("form:pendiente_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:rampa_input").disabled = true;
        document.getElementById("form:rampa_hinput").value = 0;
        document.getElementById("form:rampa_input").value = 0;
        document.getElementById("form:rampa_input").style =
          "background: #d0d0d0";
        document.getElementById("form:rampa_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:longitud_input").disabled = true;
        document.getElementById("form:longitud_hinput").value = 0;
        document.getElementById("form:longitud_input").value = 0;
        document.getElementById("form:longitud_input").style =
          "background: #d0d0d0";
        document.getElementById("form:longitud_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      }
    }
  }
}

function disableInputVelocidadOtras() {
  if (
    document.getElementById("form:vlb_hinput").value == 0 &&
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    document.getElementById("form:vlb_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").style =
      "background: #fff";
    document.getElementById("form:vlb_input").style = "background: #fff";
    PF("anchura").enable();
    PF("obstaculos").enable();
    PF("accesos").enable();
    PF("mediana").enable();
  } else if (document.getElementById("form:vlb_hinput").value == 0) {
    if (document.getElementById("form:velocidad_medida_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #d0d0d0";
      PF("anchura").disable();
      PF("obstaculos").disable();
      PF("accesos").disable();
      PF("mediana").disable();
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #fff";
      PF("anchura").enable();
      PF("obstaculos").enable();
      PF("accesos").enable();
      PF("mediana").enable();
    }
  } else if (
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    if (document.getElementById("form:vlb_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #fff";
      PF("anchura").enable();
      PF("obstaculos").enable();
      PF("accesos").enable();
      PF("mediana").enable();
    }
  }
}

//      =====================
//      =  CONVDIRECCIONAL  =
//      =====================

function disableInputIntensidadDireccional() {
  if (document.getElementById("form:intensidadInput_hinput").value == 0) {
    if (
      document.getElementById("form:imdPorcentajeEstudiado_hinput").value > 0 ||
      document.getElementById("form:imdEstudiado_hinput").value > 0
    ) {
      document.getElementById("form:intensidadInput_input").disabled = true;
      document.getElementById("form:intensidadInput_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadInput_input").disabled = false;
      document.getElementById("form:intensidadInput_input").style =
        "background: #fff";
    }
  }
  if (
    document.getElementById("form:intensidadInputOpuesto_hinput").value == 0
  ) {
    if (
      document.getElementById("form:imdPorcentajeOpuesto_hinput").value > 0 ||
      document.getElementById("form:imdOpuesto_hinput").value > 0
    ) {
      document.getElementById(
        "form:intensidadInputOpuesto_input"
      ).disabled = true;
      document.getElementById("form:intensidadInputOpuesto_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById(
        "form:intensidadInputOpuesto_input"
      ).disabled = false;
      document.getElementById("form:intensidadInputOpuesto_input").style =
        "background: #fff";
    }
  }
}

function disableInputIntensidadDireccionalSoloOpuesto() {
  if (
    document.getElementById("form:intensidadInputOpuesto_hinput").value == 0
  ) {
    if (
      document.getElementById("form:imdPorcentajeOpuesto_hinput").value > 0 ||
      document.getElementById("form:imdOpuesto_hinput").value > 0
    ) {
      document.getElementById(
        "form:intensidadInputOpuesto_input"
      ).disabled = true;
      document.getElementById("form:intensidadInputOpuesto_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById(
        "form:intensidadInputOpuesto_input"
      ).disabled = false;
      document.getElementById("form:intensidadInputOpuesto_input").style =
        "background: #fff";
    }
  }
}

function disableInputVelocidadDireccional() {
  if (
    document.getElementById("form:vlb_hinput").value == 0 &&
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    document.getElementById("form:vlb_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").disabled = false;
    document.getElementById("form:velocidad_medida_input").style =
      "background: #fff";
    document.getElementById("form:vlb_input").style = "background: #fff";
    PF("anchura").enable();
    PF("anchura_arcen").enable();
    PF("accesos").enable();
  } else if (document.getElementById("form:vlb_hinput").value == 0) {
    if (document.getElementById("form:velocidad_medida_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #d0d0d0";
      PF("anchura_arcen").disable();
      PF("anchura").disable();
      PF("accesos").disable();
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:vlb_input").style = "background: #fff";
      PF("anchura").enable();
      PF("anchura_arcen").enable();
      PF("accesos").enable();
    }
  } else if (
    document.getElementById("form:velocidad_medida_hinput").value == 0
  ) {
    console.log("HOLA");
    if (document.getElementById("form:vlb_hinput").value > 0) {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = true;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:vlb_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").disabled = false;
      document.getElementById("form:velocidad_medida_input").style =
        "background: #fff";
    }
  }
}
function radiobuttonTipoCalculo() {
  for (var i = 0; i < PF("tipoCalculo").inputs.length; i++) {
    if (PF("tipoCalculo").inputs[i].checked) {
      var valor = PF("tipoCalculo").inputs[i].value;
      console.log(valor);
      if (valor === "Normal" || valor === "Pendientes especiales") {
        document.getElementById("form:velocidad_input").disabled = true;
        document.getElementById("form:velocidad_input").value = 0;
        document.getElementById("form:velocidad_hinput").value = 0;
        document.getElementById("form:velocidad_input").style =
          "background: #d0d0d0";
        document.getElementById("form:velocidad_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:camiones_input").disabled = true;
        document.getElementById("form:camiones_input").value = 0;
        document.getElementById("form:camiones_hinput").value = 0;
        document.getElementById("form:camiones_input").style =
          "background: #d0d0d0";
        document.getElementById("form:camiones_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:rampa_input").disabled = true;
        document.getElementById("form:rampa_input").value = 0;
        document.getElementById("form:rampa_hinput").value = 0;
        document.getElementById("form:rampa_input").style =
          "background: #d0d0d0";
        document.getElementById("form:rampa_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:longitud_input").disabled = true;
        document.getElementById("form:longitud_input").value = 0;
        document.getElementById("form:longitud_hinput").value = 0;
        document.getElementById("form:longitud_input").style =
          "background: #d0d0d0";
        document.getElementById("form:longitud_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      } else if (valor === "Rampas especiales") {
        document.getElementById("form:rampa_input").disabled = false;
        document.getElementById("form:rampa_input").style = "background: #fff";
        document.getElementById("form:rampa_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:longitud_input").disabled = false;
        document.getElementById("form:longitud_input").style =
          "background: #fff";
        document.getElementById("form:longitud_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:velocidad_input").disabled = true;
        document.getElementById("form:velocidad_hinput").disabled = true;
        document.getElementById("form:velocidad_hinput").value = 0;
        document.getElementById("form:velocidad_input").value = 0;
        document.getElementById("form:velocidad_input").style =
          "background: #d0d0d0";
        document.getElementById("form:velocidad_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:camiones_input").disabled = true;
        document.getElementById("form:camiones_hinput").disabled = true;
        document.getElementById("form:camiones_input").value = 0;
        document.getElementById("form:camiones_hinput").value = 0;
        document.getElementById("form:camiones_input").style =
          "background: #d0d0d0";
        document.getElementById("form:camiones_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      } else if (valor === "Pendientes excepcionales") {
        document.getElementById("form:velocidad_input").disabled = false;
        document.getElementById("form:velocidad_input").style =
          "background: #fff";
        document.getElementById("form:velocidad_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:camiones_input").disabled = false;
        document.getElementById("form:camiones_input").style =
          "background: #fff";
        document.getElementById("form:camiones_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled";
        document.getElementById("form:rampa_input").disabled = true;
        document.getElementById("form:rampa_input").value = 0;
        document.getElementById("form:rampa_hinput").value = 0;
        document.getElementById("form:rampa_input").style =
          "background: #d0d0d0";
        document.getElementById("form:rampa_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
        document.getElementById("form:longitud_input").disabled = true;
        document.getElementById("form:longitud_input").value = 0;
        document.getElementById("form:longitud_hinput").value = 0;
        document.getElementById("form:longitud_input").style =
          "background: #d0d0d0";
        document.getElementById("form:longitud_input").className =
          "ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled ui-state-filled";
      }
    }
  }
}

function disableInputIMDSoloOpuesto() {
  if (
    document.getElementById("form:imdOpuesto_hinput").value == 0 &&
    document.getElementById("form:imdPorcentajeOpuesto_hinput").value == 0
  ) {
    if (
      document.getElementById("form:intensidadInputOpuesto_hinput").value > 0
    ) {
      document.getElementById(
        "form:imdPorcentajeOpuesto_input"
      ).disabled = true;
      document.getElementById("form:imdOpuesto_input").disabled = true;
      document.getElementById("form:imdPorcentajeOpuesto_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdOpuesto_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById(
        "form:imdPorcentajeOpuesto_input"
      ).disabled = false;
      document.getElementById("form:imdOpuesto_input").disabled = false;
      document.getElementById("form:imdPorcentajeOpuesto_input").style =
        "background: #fff";
      document.getElementById("form:imdOpuesto_input").style =
        "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

//      ==========================
//      =  PARA TODOS LOS TIPOS  =
//      ==========================

function disableInputImd() {
  if (
    document.getElementById("form:imd_hinput").value == 0 &&
    document.getElementById("form:imdPorcentaje_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadInput_hinput").value > 0) {
      document.getElementById("form:imdPorcentaje_input").disabled = true;
      document.getElementById("form:imd_input").disabled = true;
      document.getElementById("form:imdPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imd_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imdPorcentaje_input").disabled = false;
      document.getElementById("form:imd_input").disabled = false;
      document.getElementById("form:imdPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imd_input").style = "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputImdEstudiado() {
  if (
    document.getElementById("form:imdEstudiado_hinput").value == 0 &&
    document.getElementById("form:imdPorcentajeEstudiado_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadInput_hinput").value > 0) {
      document.getElementById(
        "form:imdPorcentajeEstudiado_input"
      ).disabled = true;
      document.getElementById("form:imdEstudiado_input").disabled = true;
      document.getElementById("form:imdPorcentajeEstudiado_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imdEstudiado_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById(
        "form:imdPorcentajeEstudiado_input"
      ).disabled = false;
      document.getElementById("form:imdEstudiado_input").disabled = false;
      document.getElementById("form:imdPorcentajeEstudiado_input").style =
        "background: #fff";
      document.getElementById("form:imdEstudiado_input").style =
        "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputIntensidad() {
  if (document.getElementById("form:intensidadInput_hinput").value == 0) {
    if (
      document.getElementById("form:imdPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imd_hinput").value > 0
    ) {
      document.getElementById("form:intensidadInput_input").disabled = true;
      document.getElementById("form:intensidadInput_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadInput_input").disabled = false;
      document.getElementById("form:intensidadInput_input").style =
        "background: #fff";
    }
  }
}

function disableInputImd1T() {
  if (
    document.getElementById("form:imd1T_hinput").value == 0 &&
    document.getElementById("form:imd1TPorcentaje_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidad1TInput_hinput").value > 0) {
      document.getElementById("form:imd1TPorcentaje_input").disabled = true;
      document.getElementById("form:imd1T_input").disabled = true;
      document.getElementById("form:imd1TPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imd1T_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imd1TPorcentaje_input").disabled = false;
      document.getElementById("form:imd1T_input").disabled = false;
      document.getElementById("form:imd1TPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imd1T_input").style = "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputIntensidad1T() {
  if (document.getElementById("form:intensidad1TInput_hinput").value == 0) {
    if (
      document.getElementById("form:imd1TPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imd1T_hinput").value > 0
    ) {
      document.getElementById("form:intensidad1TInput_input").disabled = true;
      document.getElementById("form:intensidad1TInput_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidad1TInput_input").disabled = false;
      document.getElementById("form:intensidad1TInput_input").style =
        "background: #fff";
    }
  }
}
function disableInputImd1NT() {
  if (
    document.getElementById("form:imd1NT_hinput").value == 0 &&
    document.getElementById("form:imd1NTPorcentaje_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidad1NTInput_hinput").value > 0) {
      document.getElementById("form:imd1NTPorcentaje_input").disabled = true;
      document.getElementById("form:imd1NT_input").disabled = true;
      document.getElementById("form:imd1NTPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imd1NT_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:imd1NTPorcentaje_input").disabled = false;
      document.getElementById("form:imd1NT_input").disabled = false;
      document.getElementById("form:imd1NTPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imd1NT_input").style = "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputIntensidad1NT() {
  if (document.getElementById("form:intensidad1NTInput_hinput").value == 0) {
    if (
      document.getElementById("form:imd1NTPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imd1NT_hinput").value > 0
    ) {
      document.getElementById("form:intensidad1NTInput_input").disabled = true;
      document.getElementById("form:intensidad1NTInput_input").style =
        "background: #d0d0d0";
      document.getElementById("form:intensidad1NTInput_input").value = 0;
    } else {
      document.getElementById("form:intensidad1NTInput_input").disabled = false;
      document.getElementById("form:intensidad1NTInput_input").style =
        "background: #fff";
    }
  }
}

function disableInputImd2T() {
  if (
    document.getElementById("form:imd2T_hinput").value == 0 &&
    document.getElementById("form:imd2TPorcentaje_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidad2TInput_hinput").value > 0) {
      document.getElementById("form:imd2TPorcentaje_input").disabled = true;
      document.getElementById("form:imd2T_input").disabled = true;
      document.getElementById("form:imd2TPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imd2T_input").style = "background: #d0d0d0";
    } else {
      document.getElementById("form:imd2TPorcentaje_input").disabled = false;
      document.getElementById("form:imd2T_input").disabled = false;
      document.getElementById("form:imd2TPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imd2T_input").style = "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputIntensidad2T() {
  if (document.getElementById("form:intensidad2TInput_hinput").value == 0) {
    if (
      document.getElementById("form:imd2TPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imd2T_hinput").value > 0
    ) {
      document.getElementById("form:intensidad2TInput_input").disabled = true;
      document.getElementById("form:intensidad2TInput_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidad2TInput_input").disabled = false;
      document.getElementById("form:intensidad2TInput_input").style =
        "background: #fff";
    }
  }
}
function disableInputImd2NT() {
  if (
    document.getElementById("form:imd2NT_hinput").value == 0 &&
    document.getElementById("form:imd2NTPorcentaje_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidad2NTInput_hinput").value > 0) {
      document.getElementById("form:imd2NTPorcentaje_input").disabled = true;
      document.getElementById("form:imd2NT_input").disabled = true;
      document.getElementById("form:imd2NTPorcentaje_input").style =
        "background: #d0d0d0";
      document.getElementById("form:imd2NT_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:imd2NTPorcentaje_input").disabled = false;
      document.getElementById("form:imd2NT_input").disabled = false;
      document.getElementById("form:imd2NTPorcentaje_input").style =
        "background: #fff";
      document.getElementById("form:imd2NT_input").style = "background: #fff";
    }
    //Hacer el disable Intensidad (es decir el disable invertido)
  }
}

function disableInputIntensidad2NT() {
  if (document.getElementById("form:intensidad2NTInput_hinput").value == 0) {
    if (
      document.getElementById("form:imd2NTPorcentaje_hinput").value > 0 ||
      document.getElementById("form:imd2NT_hinput").value > 0
    ) {
      document.getElementById("form:intensidad2NTInput_input").disabled = true;
      document.getElementById("form:intensidad2NTInput_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidad2NTInput_input").disabled = false;
      document.getElementById("form:intensidad2NTInput_input").style =
        "background: #fff";
    }
  }
}

function disableInputIntensidadAnillo() {
  if (document.getElementById("form:intensidadA_hinput").value == 0) {
    if (
      document.getElementById("form:imdA_hinput").value > 0 ||
      document.getElementById("form:imdAPorc_hinput").value > 0
    ) {
      document.getElementById("form:intensidadA_input").disabled = true;
      document.getElementById("form:intensidadA_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadA_input").disabled = false;
      document.getElementById("form:intensidadA_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdAnillo() {
  if (
    document.getElementById("form:imdA_hinput").value == 0 ||
    document.getElementById("form:imdAPorc_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadA_hinput").value > 0) {
      document.getElementById("form:imdA_input").disabled = true;
      document.getElementById("form:imdA_input").style = "background: #d0d0d0";
      document.getElementById("form:imdAPorc_input").disabled = true;
      document.getElementById("form:imdAPorc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:imdA_input").disabled = false;
      document.getElementById("form:imdA_input").style = "background: #fff";
      document.getElementById("form:imdAPorc_input").disabled = false;
      document.getElementById("form:imdAPorc_input").style = "background: #fff";
    }
  }
}

function disableInputIntensidadSalida() {
  if (document.getElementById("form:intensidadS_hinput").value == 0) {
    if (
      document.getElementById("form:imdS_hinput").value > 0 ||
      document.getElementById("form:imdSPorc_hinput").value > 0
    ) {
      document.getElementById("form:intensidadS_input").disabled = true;
      document.getElementById("form:intensidadS_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadS_input").disabled = false;
      document.getElementById("form:intensidadS_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdSalida() {
  if (
    document.getElementById("form:imdS_hinput").value == 0 ||
    document.getElementById("form:imdSPorc_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadS_hinput").value > 0) {
      document.getElementById("form:imdS_input").disabled = true;
      document.getElementById("form:imdS_input").style = "background: #d0d0d0";
      document.getElementById("form:imdSPorc_input").disabled = true;
      document.getElementById("form:imdSPorc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:imdS_input").disabled = false;
      document.getElementById("form:imdS_input").style = "background: #fff";
      document.getElementById("form:imdSPorc_input").disabled = false;
      document.getElementById("form:imdSPorc_input").style = "background: #fff";
    }
  }
}

function disableInputIntensidadEntrada() {
  if (document.getElementById("form:intensidadE_hinput").value == 0) {
    if (
      document.getElementById("form:imdE_hinput").value > 0 ||
      document.getElementById("form:imdEPorc_hinput").value > 0
    ) {
      document.getElementById("form:intensidadE_input").disabled = true;
      document.getElementById("form:intensidadE_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:intensidadE_input").disabled = false;
      document.getElementById("form:intensidadE_input").style =
        "background: #fff";
    }
  }
}

function disableInputImdEntrada() {
  if (
    document.getElementById("form:imdE_hinput").value == 0 ||
    document.getElementById("form:imdEPorc_hinput").value == 0
  ) {
    if (document.getElementById("form:intensidadE_hinput").value > 0) {
      document.getElementById("form:imdE_input").disabled = true;
      document.getElementById("form:imdE_input").style = "background: #d0d0d0";
      document.getElementById("form:imdEPorc_input").disabled = true;
      document.getElementById("form:imdEPorc_input").style =
        "background: #d0d0d0";
    } else {
      document.getElementById("form:imdE_input").disabled = false;
      document.getElementById("form:imdE_input").style = "background: #fff";
      document.getElementById("form:imdEPorc_input").disabled = false;
      document.getElementById("form:imdEPorc_input").style = "background: #fff";
    }
  }
}
