
import { CustomLink } from '../../components/CustomLink';
import styles from './not-found-page.module.css';
export const NotFoundPage = () => {
    return (
        <div className={styles.content}>
            <p className="text text_type_main-large">
                404
            </p>
            <p className="text text_type_main-medium mt-7">
                Такой страницы не существует
            </p>
            <CustomLink to='/' className='mt-10'>
                На главную страницу
            </CustomLink>
        </div>
    )
}