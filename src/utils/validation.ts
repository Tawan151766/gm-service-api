import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { AppError } from './AppError';

export async function validateDto<T extends object>(
  dtoClass: new () => T,
  data: any
): Promise<T> {
  const dto = plainToClass(dtoClass, data);
  const errors = await validate(dto);

  if (errors.length > 0) {
    const errorMessages = errors.map(error => 
      Object.values(error.constraints || {}).join(', ')
    ).join('; ');
    
    throw new AppError(`Validation failed: ${errorMessages}`, 400);
  }

  return dto;
}