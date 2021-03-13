import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { VerifyMobileDTO } from './verify.dto';

export type IVerifyMobileDTO = VerifyMobileDTO;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() dto: VerifyMobileDTO): string {
    return this.appService.getHello();
  }
}
