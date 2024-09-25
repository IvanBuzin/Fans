// import { Controller, Post, Body, Get, Param } from "@nestjs/common";
// import { UserService } from "./user.service";
// import { User } from "./user.model";

// @Controller("api/v1")
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post("add-user")
//   async addUser(
//     @Body("name") name: string,
//     @Body("email") email: string,
//     @Body("phone") phone: string
//   ): Promise<User> {
//     return this.userService.addUser(name, email, phone);
//   }

//   @Get("get-user/:id")
//   async getUser(@Param("id") id: number): Promise<User> {
//     return this.userService.getUserById(id);
//   }
// }
import { UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/jwt.guard";

@Controller("api/v1")
@UseGuards(JwtGuard)
export class UserController {
  // Маршрути з авторизацією
}
