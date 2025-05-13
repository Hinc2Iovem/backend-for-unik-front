import { Inject, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './wallets.model';
import { PROVIDERS } from 'src/const/PROVIDERS';

@Injectable()
export class WalletsService {
  constructor(
    @Inject(PROVIDERS.WALLETS)
    private walletRepository: typeof Wallet,
  ) {}

  async create(dto: CreateWalletDto) {
    return this.walletRepository.create(dto);
  }

  async findByUserId(userId: number) {
    return this.walletRepository.findAll({ where: { userId } });
  }
}
