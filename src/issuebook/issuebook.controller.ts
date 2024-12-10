import { Body, Controller, Post } from '@nestjs/common';
import { IssuebookService } from './issuebook.service';
import { CreateIssueBookDto } from './dto/issuebook.dto';
import { IssueBook } from './issuebook.schema';
import { AddbookService } from 'src/addbook/addbook.service';

@Controller('issuebook')
export class IssuebookController {
    constructor(private issueBookService:IssuebookService,private readonly addBookService:AddbookService){}

    @Post('/student')
    async create(@Body() createBookIssueDto:CreateIssueBookDto):Promise<IssueBook>{
        this.addBookService.decrementCopies(createBookIssueDto.bookId);
        return this.issueBookService.create(createBookIssueDto);
    }
}
