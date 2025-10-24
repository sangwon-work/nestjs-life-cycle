import {Controller, Get, HttpException, HttpStatus, Req, Res, UseInterceptors} from '@nestjs/common';
import {TestInterceptor} from "../../core/interceptor/response/test.interceptor";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/list')
    @UseInterceptors(TestInterceptor)
    async getList(@Req() req) {
        console.log(`4. ${req.requestId}`);
        const {userlist} = this.userService.getUserList();
        console.log('userlist', userlist);
        let a = 1;
        if (a === 1) {
            throw new HttpException({ rescode: '9999', message: '구문오류'}, HttpStatus.FORBIDDEN);
        } else {
            return {rescode: '0000', message: '성공', data: { userlist: userlist }}; // 응답을 직접 설정
        }
    }
}
