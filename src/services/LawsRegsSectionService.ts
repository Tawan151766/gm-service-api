import { AppDataSource } from '../config/database';
import { LawsRegsSection } from '../entities/LawsRegsSection';
import { CreateLawsRegsSectionDto, UpdateLawsRegsSectionDto } from '../dto/LawsRegsSectionDto';
import { AppError } from '../utils/AppError';

export class LawsRegsSectionService {
  private repository = AppDataSource.getRepository(LawsRegsSection);

  async findAll(): Promise<LawsRegsSection[]> {
    return await this.repository.find({
      relations: ['type', 'files']
    });
  }

  async findById(id: number): Promise<LawsRegsSection> {
    const section = await this.repository.findOne({
      where: { id },
      relations: ['type', 'files']
    });

    if (!section) {
      throw new AppError('Laws/Regulations Section not found', 404);
    }

    return section;
  }

  async findByTypeId(typeId: number): Promise<LawsRegsSection[]> {
    return await this.repository.find({
      where: { type_id: typeId },
      relations: ['type', 'files']
    });
  }

  async create(createDto: CreateLawsRegsSectionDto): Promise<LawsRegsSection> {
    const section = this.repository.create(createDto);
    return await this.repository.save(section);
  }

  async update(id: number, updateDto: UpdateLawsRegsSectionDto): Promise<LawsRegsSection> {
    const section = await this.findById(id);
    
    Object.assign(section, updateDto);
    return await this.repository.save(section);
  }

  async delete(id: number): Promise<void> {
    const section = await this.findById(id);
    await this.repository.remove(section);
  }
}