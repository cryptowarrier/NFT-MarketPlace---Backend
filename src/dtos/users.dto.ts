import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public username: string;
  @IsString()
  public bio: string;
  @IsEmail()
  public email: string;
  @IsString()
  public twitter: string;
  @IsString()
  public instagram: string;
  @IsString()
  public discord: string;
  @IsString()
  public facebook: string;
  @IsString()
  public website: string;
  @IsString()
  public avatar: string;
  @IsString()
  public banner: string;
  @IsString()
  public wallet: string;
}
