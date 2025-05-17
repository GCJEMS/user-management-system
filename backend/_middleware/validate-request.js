module.expert = validateRequest;

function validateRequest(req, next, schema) {
    const  option = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, option);
    if (error) {
        next('validate error: ' + error.details.map(x => x.message).join(', '));
    } else {
        req.body = value; 
        next();
    
    }
}
    