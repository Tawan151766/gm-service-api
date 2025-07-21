import { AppDataSource } from '../config/database';
import { LawsRegsType } from '../entities/LawsRegsType';
import { CreateLawsRegsTypeDto, UpdateLawsRegsTypeDto } from '../dto/LawsRegsTypeDto';
import { AppError } from '../utils/AppError';

export class LawsRegsTypeService {
  private repository = AppDataSource.getRepository(LawsRegsType);

  async findAll(): Promise<LawsRegsType[]> {
    return await this.repository.find({
      relations: ['sections']
    });
  }

  async findById(id: number): Promise<LawsRegsType> {
    const lawsRegsType = await this.repository.findOne({
      where: { id },
      relations: ['sections']
    });

    if (!lawsRegsType) {
      throw new AppError('Laws/Regulations Type not found', 404);
    }

    return lawsRegsType;
  }

  async create(createDto: CreateLawsRegsTypeDto): Promise<LawsRegsType> {
    const lawsRegsType = this.repository.create(createDto);
    return await this.repository.save(lawsRegsType);
  }

  async update(id: number, updateDto: UpdateLawsRegsTypeDto): Promise<LawsRegsType> {
    const lawsRegsType = await this.findById(id);
    
    Object.assign(lawsRegsType, updateDto);
    return await this.repository.save(lawsRegsType);
  }

  async delete(id: number): Promise<void> {
    const lawsRegsType = await this.findById(id);
    await this.repository.remove(lawsRegsType);
  }
}