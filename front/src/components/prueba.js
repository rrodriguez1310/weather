generico() {
// res.json(" hola desde el api id;)");

const addRol = id => {
return new Promise((resolve, reject) => {
axios.get(`http://localhost:3000/` + id);
(function(err, rol) {
if (!err) {
resolve(rol);
} else {
reject(err);
}
});
});
};

addRol(req.params.id)
.then(responseRoles => {
return res.status(200).json(responseRoles);
})
.catch(e => {
console.log(e);
return res.status(403).json({ message: e.errmsg });
});
},