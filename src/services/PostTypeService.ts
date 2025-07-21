import { AppDataSource } from '../config/database';
import { PostType } from '../entities/PostType';
import { CreatePostTypeDto, UpdatePostTypeDto } from '../dto/PostTypeDto';
import { AppError } from '../utils/AppError';

export class PostTypeService {
  private repository = AppDataSource.getRepository(PostType);

  async findAll(): Promise<PostType[]> {
    return await this.repository.find({
      relations: ['postDetails']
    });
  }

  async findById(id: number): Promise<PostType> {
    const postType = await this.repository.findOne({
      where: { id },
      relations: ['postDetails']
    });

    if (!postType) {
      throw new AppError('Post Type not found', 404);
    }

    return postType;
  }

  async create(createDto: CreatePostTypeDto): Promise<PostType> {
    const postType = this.repository.create(createDto);
    return await this.repository.save(postType);
  }

  async update(id: number, updateDto: UpdatePostTypeDto): Promise<PostType> {
    const postType = await this.findById(id);
    
    Object.assign(postType, updateDto);
    return await this.repository.save(postType);
  }

  async delete(id: number): Promise<void> {
    const postType = await this.findById(id);
    await this.repository.remove(postType);
  }
}