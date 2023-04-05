//Importar libreria para generar pdfs a treves de plantillas
const pdf = require('html-pdf');
const generarPDF = () => {
    //Se va a guadar el html
    const contenido = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      
      </style>
    


      <title>Document</title>
    </head>
  <body style="margin-top: 50px;">

    <div style="display: flex; flex-direction: column; margin: 0 auto; width: 500px; height: 550px; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;  ">
      
      <div style="width: 100%; height: 4%; border-bottom: 1px solid black; background-color: black; ">
          <h1 style="font-size: 14px; text-align: center;  color: white; padding-top: 3px; ">Pozo Chinanteco - 1EXP </h1> 
      </div>

      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 6%; border-bottom: 1px solid black;">
          <div style=" height: 100%; width: 50%;  border-right: 1px solid black; ">
              <p style=" font-size: 11px; line-height: 0px; padding-top: 8px;">Fecha de inspección: 15/Oct/22</p>
              <p style=" font-size: 11px; line-height: 0px; padding-top: 4px;">Hora de inspección: 15:44 </p>
          </div>

          <div style=" height: 100%; width: 50%; ">
              <p style=" font-size: 11px; line-height: 0px; padding-top: 8px;">Ubicación: X=335,786,201 Y=1,931,445.186</p>
              <p style=" font-size: 11px; line-height: 0px; padding-top: 4px;">Estado: <b>Sin fugas</b> </p>
          </div>
      </div>

      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 43%; border-bottom: 1px solid black;">
          <div style="height: 100%; width: 50%; border-right: 1px solid black; inset: 50%;  text-align: center; ">
            <img style="height: auto; width: 230px; padding-top: 40px; " src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="">
          </div>

          <div style=" height: 100%; width: 50%;  text-align: center;">
            <img style=" height: auto; width: 230px; padding-top: 40px;  " src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png " alt="" >
          </div>
      </div>

      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 4%; border-top: 1px solid black;">
          <div style=" height: 100%; width: 50%;  border-right: 1px solid black; background-color: black;">
              <p style=" font-size: 11px; text-align: center;  color: white; padding-top: 3px;">Imagen norma</p>
          </div>

          <div style=" height: 100%; width: 50%; background-color: black; ">
              <p style=" font-size: 11px; text-align: center;  color: white; padding-top: 3px;">Imagen infrarroja</p>
          </div>
      </div>

      <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; height: 42%; border-top: 1px solid black;">
          
          <div style=" height: 100%; width: 50%;  border-right: 1px solid black;  text-align: center; ">
          <img style=" height: auto; width: 230px; padding-top: 40px; " src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png " alt="" >  
          </div>

          <div style=" height: 100%; width: 50%; ">
            <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 60px;">Factores ambientales</p>
            <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 20px;">Velocidad del viento: 1 m/s</p>
            <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 5px;">Temperatura: </p>
            <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 5px;">31.9 °C</p>
            <p style=" text-align: center; font-size: 11px; line-height: 0px; padding-top: 15px;">Observación: Ninguna</p>  
          </div>
      </div>

    </div>

  </body>
  
  </html>
    `;

    const opciones = {
        "format": "A4", //A3, A4, A5, Legal, Letter 
        "orientation": "portrait",
        "border": {
            "top": ".8cm",
            "right": ".6cm",
            "bottom": ".6cm",
            "left": ".6cm",
        },
        childProcessOptions : {
          env : {
            OPENSSL_CONF : '/dev/null' ,
          } ,
        }
    }

    const directorio = "./public/files/constancia.pdf";

    pdf.create(contenido, opciones).toFile(directorio, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('archivo creado');
        }
    });
}

generarPDF();
