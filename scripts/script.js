var nome = document.querySelector('#exampleInputName');
var user = {};

nome.title = 'titulo';
nome.alt = 'alt';
nome.value = "value";

// console.log(nome.title);
// console.dir(nome);


// var fields = document.querySelectorAll('#form-user-create [name]');
// // var fields = document.querySelectorAll('#form-user-create [id]');
// // var fields = document.querySelectorAll('#form-user-create [alt]');
// // var fields = document.querySelectorAll('#form-user-create [name=gender]');

// //console.log(fields);


// fields.forEach( (fields, index)=>{

//     //console.log(fields.id,fields.name,fields.value,index)


//     users[fields.name] = fields.value

// });


// console.log(users);



//var buttons = document.querySelectorAll("button");


// document.querySelectorAll("button").forEach((fields, index)=>{

//     //console.log(index, fields);

//     this.addEventListener("click",()=>{

//         console.log('clicou', index)

//     });


// });

function addLine(dataUser){

    console.log("addLine",dataUser);

    var tr = document.getElementById('table-users');

    tr.innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.password}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
        `;


}



function formData(idForm,idFields){
    
    var form = document.getElementById('form-user-create');

    form.addEventListener('submit',(event)=>{
        
        event.preventDefault();
        
        var fields = document.querySelectorAll(idFields);
    
        fields.forEach( (fields, index)=>{
    
            user[fields.name] = fields.value
    
        });
    

        var objectUser = new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
        
        addLine(objectUser);
    
    });

}


formData('form-user-create','#form-user-create [name]');

