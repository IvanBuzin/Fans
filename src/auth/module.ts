import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./service";

@Module({
  imports: [
    JwtModule.register({
      secret: "your-secret-key",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
