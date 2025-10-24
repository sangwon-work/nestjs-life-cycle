import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction} from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
    use(req, res: Response, next: NextFunction) {
        /**
         * "컨트롤러 진입 전에 요청을 가로채서 공통 로직을 처리하고 싶을 때 사용"
         *
         * 언제 Middleware 를 사용하면 좋을까 ?
         * 1. 요청 전처리가 필요할 때
         * 예: req 객체에 공통 데이터를 추가하거나, 헤더를 검증해야 할 때
         * req.requestId = crypto.randomUUID();
         * -> 이렇게 하면 이후 Controller 나 service 에서 req.requestId를 공통적으로 사용할 수 있음
         *
         * middleware 를 사용해서 특정 모듈의 요청 로그를 별도로 기록 할 수 있다.
         */
        console.log('1. Logging middleware');
        console.log(`2. [${req.method}] ${req.originalUrl} from ${req.ip}`);
        req.requestId = crypto.randomUUID();
        next();
    }
}