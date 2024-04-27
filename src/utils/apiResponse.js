export class ResponseSuccess {
  constructor(data, message = "Successfull!", status = 200) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}

export class ResponseError {
  constructor(error, message = "Unsuccessfull", status = 400) {
    this.message = message;
    this.status = status;
    this.error = error;
  }
}
