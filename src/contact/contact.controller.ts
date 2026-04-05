import { Body, Controller, Post } from '@nestjs/common';
import { CreateContactDto } from './create-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    return await this.contactService.sendContactEmail(dto);
  }
}