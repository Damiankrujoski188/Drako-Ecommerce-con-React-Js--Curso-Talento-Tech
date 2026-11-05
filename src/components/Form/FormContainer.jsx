import { useEffect, useState } from "react";
import { FormUI } from "./FormUI"
import { validateForm } from "./validateForm";

export const FormContainer = () => {
    const valoresInciales = {name : "", lastname : "", email : "", message : "",}
    
    const [formData, setFormData] = useState(valoresInciales);
    const [errors, setErrors] = useState({});
    const [enviado, setEnviado] = useState(false)


    useEffect(() => {
        if(enviado) {
            const timer = setTimeout(() => {
                setEnviado(false)
            }, 3000)

            return () => clearTimeout(timer);
        }
    }, [enviado])

    //Manejo
    const handleChange = (e) => {
        const {name, value} = e.target;
        
        const updatedData = {...formData, [name]: value };
        setFormData(updatedData);
        setEnviado(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm(formData);
        
        if(Object.keys(error).length > 0){
            setErrors(error);

        }else{
            setErrors({});
            console.log(errors);
            setFormData(valoresInciales);
            setEnviado(true)

        
        }
    }

    const resetForm = () => {
        setFormData(valoresInciales);
        setErrors({});
    }


    return (
        <>
            <FormUI 
                onChange = {handleChange} 
                onSubmit={handleSubmit} 
                onReset = {resetForm}
                errors = {errors} 
                formData = {formData} 
                enviado = {enviado}
            />
        </>
    );

}