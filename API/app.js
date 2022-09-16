var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var app = express();

app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prueba1",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion exitosa a la base de datos");
  }
});

app.get("/", function (req, res) {
  res.send("Ruta Inicio");
});

app.get("/api/propietarios", (req, res) => {
  connection.query("SELECT * FROM tblPropietario", (error, filas) => {
    if (error) {
      throw error;
    } else {
      console.log(filas);
      res.send(filas);
    }
  });
});

app.get("/api/propietarios/:propCod", (req, res) => {
  connection.query(
    "SELECT * FROM tblPropietario WHERE propCod=?",
    [req.params.id],
    (error, fila) => {
      if (error) {
        throw error;
      } else {
        console.log(fila);
        res.send(fila);
      }
    }
  );
});

app.post("/api/propietarios", (req, res) => {
  let data = {
    propCod: req.body.propCod,
    propTelefono: req.body.propTelefono,
    propTipoDocumento: req.body.propTipoDocumento,
    propDocumento: req.body.propDocumento,
    propNombre: req.body.propNombre,
    propApellido: req.body.propApellido,
    propEmail: req.body.propEmail,
    propFechaNac: req.body.propFechaNac,
    propEdad: req.body.propEdad,
  };
  let sql = "INSERT INTO tblPropietario SET ?";
  connection.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

app.put("/api/propietarios/:propCod", (req, res) => {
  let id = req.params.propCod;
  let Telefono = req.body.propTelefono;
  let TipoDocumento = req.body.propTipoDocumento;
  let Documento = req.body.propDocumento;
  let Nombre = req.body.propNombre;
  let Apellido = req.body.propApellido;
  let Email = req.body.propEmail;
  let FechaNac = req.body.propFechaNac;
  let Edad = req.body.propEdad;
  let sql =
    "UPDATE tblPropietario SET propTelefono = ?, propTipoDocumento = ?, propDocumento=?, propNombre=?, propApellido=?,propEmail=?,propFechaNac=?,propEdad=? WHERE propCod = ?";
  connection.query(sql, [
    Telefono,
    TipoDocumento,
    Documento,
    Nombre,
    Apellido,
    Email,
    FechaNac,
    Edad,
    id,
  ]),
    function (error, results) {
      if (error) {
        throw error;
      } else {
        res.send(results);
      }
    };
});

app.delete("/api/propietarios/:propCod", (req, res) => {
  connection.query(
    "DELETE FROM tblPropietario WHERE propCod = ?",
    [req.params.propCod],
    function (error, filas) {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

app.listen("3000", function () {
  console.log("servidor ok");
});
