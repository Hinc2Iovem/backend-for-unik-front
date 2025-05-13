import {
  IsUUID,
  IsString,
  IsNumberString,
  IsEnum,
  IsOptional,
  IsDateString,
} from 'class-validator';

export enum TransactionType {
  EXPENDITURE = 'expenditure',
  INCOME = 'income',
}

export enum DischargeUnit {
  SEC = 'sec',
  MIN = 'min',
  HR = 'hr',
  D = 'd',
  M = 'm',
  Y = 'y',
}

export class CreateTransactionDto {
  walletId: number;

  userId: number;

  categoryId: number;

  @IsString()
  name: string;

  @IsNumberString()
  amount: string;

  @IsDateString()
  date: Date;

  @IsNumberString()
  balancePrior: string;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsOptional()
  @IsNumberString()
  dischargeTime?: string | null;

  @IsOptional()
  @IsEnum(DischargeUnit)
  dischargeUnit?: DischargeUnit;
}
