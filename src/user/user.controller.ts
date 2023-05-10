import { Controller, Post, Body, Query, Get, Version, VERSION_NEUTRAL, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FeishuUserInfo } from './feishu/feishu.dto';
import { GetUserInfoDto } from './user.dto';

@ApiTags('用户')
@Controller({
  path: 'user',
  version: [VERSION_NEUTRAL]
})
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiOperation({
    summary: '获取用户信息',
  })
  @Post('getUserInfo')
  async getUserInfo(@Body() params: GetUserInfoDto) {
    const { feishuUnionId } = params;
    return await this.userService.getUserByFeishu(feishuUnionId);
  }
}