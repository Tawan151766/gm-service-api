import { AppDataSource } from '../config/database';
import { ProcurementPlanType } from '../entities/ProcurementPlanType';
import { CreateProcurementPlanTypeDto, UpdateProcurementPlanTypeDto } from '../dto/ProcurementPlanTypeDto';
import { AppError } from '../utils/AppError';

export class ProcurementPlanTypeService {
  private repository = AppDataSource.getRepository(ProcurementPlanType);

  async findAll(): Promise<ProcurementPlanType[]> {
    return await this.repository.find({
      relations: ['files']
    });
  }

  async findById(id: number): Promise<ProcurementPlanType> {
    const procurementPlanType = await this.repository.findOne({
      where: { id },
      relations: ['files']
    });

    if (!procurementPlanType) {
      throw new AppError('Procurement Plan Type not found', 404);
    }

    return procurementPlanType;
  }

  async create(createDto: CreateProcurementPlanTypeDto): Promise<ProcurementPlanType> {
    const procurementPlanType = this.repository.create(createDto);
    return await this.repository.save(procurementPlanType);
  }

  async update(id: number, updateDto: UpdateProcurementPlanTypeDto): Promise<ProcurementPlanType> {
    const procurementPlanType = await this.findById(id);
    
    Object.assign(procurementPlanType, updateDto);
    return await this.repository.save(procurementPlanType);
  }

  async delete(id: number): Promise<void> {
    const procurementPlanType = await this.findById(id);
    await this.repository.remove(procurementPlanType);
  }
}