class ErrorModel { 
    constructor(id, httpCode, message) {
        this._id = id;
        this._httptCode = httpCode;
        this._message = message;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get httpCode() {
        return this._httptCode;
    }
    set httpCode(httpCode) {
        this._httptCode = httpCode;
    }
    get message() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
    toJSON() {
        return {
            id: this._id,
            httpCode: this._httptCode,
            message: this._message
        }
    }
}

module.exports = {
    ErrorModel
}