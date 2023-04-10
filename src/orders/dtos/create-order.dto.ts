/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Min, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Min(0)
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
