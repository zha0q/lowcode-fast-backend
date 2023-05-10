import { In, Like, Raw, MongoRepository, ObjectID } from 'typeorm';
import { Injectable, Inject, Request } from '@nestjs/common';
import { User } from './user.mongo.entity';
import { FeishuUserInfo } from './feishu/feishu.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>,
  ) {}

  createOrSave(user) {
    return this.userRepository.save(user);
  }

  async createOrUpdateByFeishu(feishuUserInfo: FeishuUserInfo) {
    return await this.userRepository.save(feishuUserInfo);
  }

  async getUserByFeishu(feishuUnionId: string) {
    return await this.userRepository.findOne({
      where: {
        feishuUnionId,
      },
    });
  }
}
