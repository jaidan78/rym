const validation = (data) => {

    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Ingresa un email válido.'
    }

    if (!data.email){
        errors.e2 = 'Ingresa un email.'
    }

    if (data.email.lenght > 35){
        errors.e3 = 'El email no debe ser mayor de 35 caracteres.'
    }

    if(!/\d+/.test(data.password)){
        errors.p1 = 'La contraseña debe tener al menos un número.'
    }

    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Debe tener entre 6 y 10 caracteres.'
    }

    return errors;
} 

export default validation;

