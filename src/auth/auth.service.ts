import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByMail(email);
        if (user === null) {
            throw new NotFoundException('Veuillez écrire un Email existant.')
        }
        const isMatch = await bcrypt.compare(pass, user.password);

        if (isMatch) {
            const { password, ...result } = user;
            return result
        }
        return null;
    }

    async login(user: User) {
        const payload = { email: user.email, sub: user.id };
        return {
            message: 'login successfull',
            data: { access_token: this.jwtService.sign(payload), ...user },
        }
    }
}
