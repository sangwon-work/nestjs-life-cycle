import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {UserController} from "./user.controller";
import {LoggingMiddleware} from "../../core/middlewares/Logging.middleware";
import {UserService} from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule implements NestModule {
    configure(middlewareExam: MiddlewareConsumer) {
        middlewareExam
            .apply(LoggingMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.GET });
    }
}