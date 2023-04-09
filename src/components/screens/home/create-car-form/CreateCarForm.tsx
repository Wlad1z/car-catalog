import React from 'react';
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form';
import ErrorMesage from './ErrorMessage';
import { useCreateCar } from './useCreateCar';
import { ICarData } from '../../../../types/car.interface';

const CreateCarForm = () => {     
    const {register, reset, handleSubmit, formState:{errors}} = useForm<ICarData>({
        mode: "onChange"
    })

    const {createCar} = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input placeholder='Name' 
                {...register('name',{required: "Name is required"})}
            />
            <ErrorMesage error={errors?.name?.message}/>
            <input placeholder='Price'
                {...register('price',{required: "Price is required"})}
            />
            <ErrorMesage error={errors?.price?.message}/>
            <input placeholder='Image'
                {...register('image',{required: "Image is required"})}
            />
            <ErrorMesage error={errors?.image?.message}/>
            <button className='btn'>Create</button>
        </form>
    );
}
 
export default CreateCarForm;