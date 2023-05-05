"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const AuthRepository_1 = __importDefault(require("../repositories/AuthRepository"));
class AuthController {
    static async handleLogin(req, res) {
        const { username, password } = req.body;
        const foundUsers = await AuthRepository_1.default.findUser(username);
        if (!foundUsers.length) {
            return res.json({ code: 404, msg: `Wrong username or password!` });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, foundUsers[0].password.trim());
        if (!isValidPassword)
            return res.json({ code: 403, msg: `Wrong username or password!` });
        // session, cookie, ...?
        return res.json({ code: 200, username: username });
    }
    static async handleRegister(req, res) {
        const { username, password } = req.body;
        const foundUsers = await AuthRepository_1.default.findUser(username);
        if (foundUsers.length)
            return res.json({ code: 403, msg: `Wrong username or password!` });
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = await AuthRepository_1.default.handleRegister({
            username: username, password: hashedPassword
        });
        res.json({ code: 200, newUser: newUser.username });
    }
}
exports.default = AuthController;
