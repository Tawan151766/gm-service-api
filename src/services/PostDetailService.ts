import { AppDataSource } from '../config/database';
import { PostDetail } from '../entities/PostDetail';
import { CreatePostDetailDto, UpdatePostDetailDto } from '../dto/PostDetailDto';
import { AppError } from '../utils/AppError';

export class PostDetailService {
  private repository = AppDataSource.getRepository(PostDetail);

  async findAll(): Promise<PostDetail[]> {
    return await this.repository.find({
      relations: ['postType', 'photos', 'pdfs', 'videos']
    });
  }

  async findById(id: number): Promise<PostDetail> {
    const postDetail = await this.repository.findOne({
      where: { id },
      relations: ['postType', 'photos', 'pdfs', 'videos']
    });

    if (!postDetail) {
      throw new AppError('Post Detail not found', 404);
    }

    return postDetail;
  }

  async findByTypeId(typeId: number): Promise<PostDetail[]> {
    return await this.repository.find({
      where: { post_type_id: typeId },
      relations: ['postType', 'photos', 'pdfs', 'videos']
    });
  }

  async create(createDto: CreatePostDetailDto): Promise<PostDetail> {
    const postDetail = this.repository.create(createDto);
    return await this.repository.save(postDetail);
  }

  async update(id: number, updateDto: UpdatePostDetailDto): Promise<PostDetail> {
    const postDetail = await this.findById(id);
    
    Object.assign(postDetail, updateDto);
    return await this.repository.save(postDetail);
  }

  async delete(id: number): Promise<void> {
    const postDetail = await this.findById(id);
    await this.repository.remove(postDetail);
  }
}