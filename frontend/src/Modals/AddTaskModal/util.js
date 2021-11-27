import * as Yup from 'yup';

export const initialValues = {
    content: '',
};

export const validationSchema = Yup.object().shape({
    content: Yup.string().required('Required').trim(),
});


export const validate = (validationSchema) => {
    return (values) => validationSchema.validate(values, {
        abortEarly: false,
    });
};