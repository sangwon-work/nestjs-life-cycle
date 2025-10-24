import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class TestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        /**
         * handle() 은 "응답 이후에 실행" 되는게 아니라,
         * "컨트롤러를 실행시키기 위해 반드시 호출해야 하는 메서드" 입니다.
         * 그 이후에 오는 pipe() 가 응답을 가공하거나 후처리하는 단계입니다.
         */
        // 1. 요청 전 + 응답 후 둘다 interceptor 하고 싶은 경우
        const now = Date.now();

        console.log(`3. before date ${now}`);

        return next.handle();

        // 2. 요청 전만 interceptor 하고 싶은 경우
        // const now = Date.now();
        //
        // console.log(`3. before date ${now}`);
        //
        // return next.handle();
    }
}