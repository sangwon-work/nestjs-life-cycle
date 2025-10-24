import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
    constructor() {}

    getUserList() {
        let erroryn: 'Y' | 'N' = 'Y';

        // @ts-ignore
        if (erroryn === 'Y') {
            throw new Error('에러 발생');
        } else {
            return { userlist: [] };
        }
    }
}