import { FC } from 'react';
import styles from './CreateCarForm.module.css'

const ErrorMesage: FC<{ error: string }> = ({error}) => {
    if (!error)  return null
    
    return ( 
        error && (
        <p className={styles.err}>
            {error} is required
        </p>
        )
    )
}
 
export default ErrorMesage;