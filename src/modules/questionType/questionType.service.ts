import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class QuestionTypeService {
  private readonly test = [];

  async findAll() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}
