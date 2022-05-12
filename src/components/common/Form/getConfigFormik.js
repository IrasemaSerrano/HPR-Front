import * as Yup from 'yup';

function getConfigFormik(arr, onSubmit){
    const object = arr.reduce((acc,obj) =>{
        try{

            const objYup = getObjectYup(obj)
            acc.yup[obj.name] = objYup
            acc.initialValues[obj.name] = obj.initialValue || ''

        }catch(err){
            console.error('3rr0r', err.message)
        }
        finally{
            return acc
        }
    },{yup:{}, initialValues:{}})

    return {
        initialValues: object.initialValues,
        validationSchema: Yup.object(object.yup),
        onSubmit
      }
}

function getObjectYup(obj){
    let objectYup
    if(!obj.type) return new Error('Type undefined in '+obj.name)
    switch (obj.type) {
        case 'string':
            objectYup = Yup.string()
            break;
        case 'number':
            objectYup = Yup.number()
            break;
        case 'email':
            objectYup = Yup.string().email('Field must be a valid email')
            break;
        default:
            return new Error('Type not found in '+obj.name)
    }

    if(obj.typeError) objectYup = objectYup.typeError('The data type must be '+obj.type)
    
    if(obj.required) objectYup = objectYup.required('Field '+obj.name+' is required')

    if(obj.min) objectYup = objectYup.min(obj.min)

    return objectYup
}

export default getConfigFormik
