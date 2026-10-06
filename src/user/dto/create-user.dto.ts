import { IsNotEmpty, IsOptional, IsString, MaxLength, maxLength } from "class-validator"
import { IsStrongPassword } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly name: string

 

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
    
    readonly password: string;  



    @IsOptional()
    readonly createdAt?: string;

    
}
