import { CartItem, CustomerDetails } from '@g7/shared-types';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CartItemDto implements CartItem {
  @IsString()
  productSlug!: string;

  @IsString()
  variantId!: string;

  @Type(() => Number)
  @IsNumber()
  quantity!: number;
}

export class CustomerDetailsDto implements CustomerDetails {
  @IsEmail()
  email!: string;

  @IsString()
  name!: string;

  @IsString()
  line1!: string;

  @IsOptional()
  @IsString()
  line2?: string;

  @IsString()
  city!: string;

  @IsString()
  postcode!: string;

  @IsString()
  countryCode!: string;
}

export class CheckoutSessionDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  cart!: CartItemDto[];

  @ValidateNested()
  @Type(() => CustomerDetailsDto)
  customer!: CustomerDetailsDto;
}
