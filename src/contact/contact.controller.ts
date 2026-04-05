import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './create-contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    async sendContact(@Body() dto: CreateContactDto) {
        return this.contactService.sendContactEmail(dto);
    }
}