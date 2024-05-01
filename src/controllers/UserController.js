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
  
  static createUser = async(req,res) => {
    try {
      const {name, email} = req.body;
      console.log(req.body);
      const userData = {
        name,
        email
      };
      const newUser = await UserService.store(userData);
      res.json(new ResponseSuccess(newUser, "User Created Successfully!"))
    } catch (error) {
      res.json(new ResponseError(error, "Something went Wrong"));
    }
  }
  
  static updateUser = async(req,res) => {
    try {
      const {name, email} = req.body;
      const {id} = req.params;
      const userData = {
        name,
        email
      };
      console.log(userData);
      const newUser = await UserService.update(parseInt(id),userData);
      res.json(new ResponseSuccess(newUser, "User Updated Successfully!"))
    } catch (error) {
      res.json(new ResponseError(error, "Something went Wrong"));
    }
  }

  static deleteUser = async(req,res) => {
    try {
      const {id} = req.params;
      const deletedUser = await UserService.delete(parseInt(id));
      res.json(new ResponseSuccess(deletedUser, "User Deleted Successfully!"))
    } catch (error) {
      res.json(new ResponseError(error, "Something went wrong"));
    }
  }

}

export default UserController;
