import UserService from "../services/UserService.js";
import { ResponseError, ResponseSuccess } from "../utils/apiResponse.js";

class UserController {
  static getAllUsers = async (req, res) => {
    try {
      const users = await UserService.findAll();
      res.json(new ResponseSuccess(users, "User List"));
    } catch (error) {
      res.json(new ResponseError(error, "Something went Wrong"));
    }
  };

  static getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.findById(parseInt(id));
      res.json(new ResponseSuccess(user, "User Single"));
    } catch (error) {
      res.json(new ResponseError(error, "Something went Wrong"));
    }
  };
}

export default UserController;
