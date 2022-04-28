import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteDto {
    @ApiProperty() // Decorator that makes this property visible in Swagger
    readonly title:     string;
    @ApiProperty()
    readonly author:    string;
}

