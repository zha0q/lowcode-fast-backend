import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123, })
  id?: string;

  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'cookieboty@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  username: string;
}

export class GetUserInfoDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'xxxx', description: 'userId' })
  feishuUnionId: string;
}