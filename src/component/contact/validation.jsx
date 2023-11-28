

export default function validation(values){

    const errors = {};

    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.Name===""){
  errors.Name="ce champ est obligatoire";
  console.log(values.Name)

    }
    else{
        console.log(values.Name)
    }
  
    
    if (values.Email===""){
        errors. Email="ce champ est obligatoire";
        
    } else if(!email_pattern.test(values.Email)){
        errors.Email="cette adresse email est invalide"
        console.log(values.Email)
    }

    if(values.Message===""){
        errors.Message="ce champ est obligatoire"
       
    }
    else{
        console.log(values.Message)
    }

    return errors;

}
