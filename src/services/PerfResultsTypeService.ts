import { AppDataSource } from '../config/database';
import { PerfResultsType } from '../entities/PerfResultsType';
import { CreatePerfResultsTypeDto, UpdatePerfResultsTypeDto } from '../dto/PerfResultsTypeDto';
import { AppError } from '../utils/AppError';

export class PerfResultsTypeService {
  private repository = AppDataSource.getRepository(PerfResultsType);

  async findAll(): Promise<PerfResultsType[]> {
    return await this.repository.find({
      relations: ['sections']
    });
  }

  async findById(id: number): Promise<PerfResultsType> {
    const perfResultsType = await this.repository.findOne({
      where: { id },
      relations: ['sections']
    });

    if (!perfResultsType) {
      throw new AppError('Performance Results Type not found', 404);
    }

    return perfResultsType;
  }

  async create(createDto: CreatePerfResultsTypeDto): Promise<PerfResultsType> {
    const perfResultsType = this.repository.create(createDto);
    return await this.repository.save(perfResultsType);
  }

  async update(id: number, updateDto: UpdatePerfResultsTypeDto): Promise<PerfResultsType> {
    const perfResultsType = await this.findById(id);
    
    Object.assign(perfResultsType, updateDto);
    return await this.repository.save(perfResultsType);
  }

  async delete(id: number): Promise<void> {
    const perfResultsType = await this.findById(id);
    await this.repository.remove(perfResultsType);
  }
}