import { IsNotEmpty, IsString } from "class-validator"
import { IsStrongPassword } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    created: Date

    @IsNotEmpty()
    @IsStrongPassword({
        minSymbols: 4,
        minLowercase: 4,
        minUppercase: 1,
        minNumbers: 4,
        minLength: 8,
        
    },
    {
        message: 'Password must contain uppercase, lowercase, numbers, and special characters',
    })
    
    password: string;  
    
}
