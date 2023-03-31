import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { TestInterface } from '../test_mock/test.interface';
import { makeLogger } from 'ts-loader/dist/logger';
import { Events } from 'discord.js';

@Injectable()
export class ProjectService {

  @Inject('TestInterface')
  private testService: TestInterface;

  @Inject('discord-provider')
  private discordService;

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return `discord bot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
