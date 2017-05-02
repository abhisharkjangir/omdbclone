const { GenericError } = require('../constants/messages');

const GeneralRequest = (
    success = false,
    message = GenericError,
    data = {},
    errors = [GenericError]
) => ({ success, message, data, errors });

module.exports = GeneralRequest;
