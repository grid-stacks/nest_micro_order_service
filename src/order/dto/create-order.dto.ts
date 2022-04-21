import { IsNumber, Min } from 'class-validator';
import { CreateOrderRequest } from '../order.pb';

export class CreateOrderDto implements CreateOrderRequest {
  @IsNumber()
  public productId: number;

  @IsNumber()
  @Min(1)
  public quantity: number;

  @IsNumber()
  public userId: number;
}
