import { IssuebookService } from './issuebook.service';
import { CreateIssueBookDto } from './dto/issuebook.dto';
import { IssueBook } from './issuebook.schema';
import { AddbookService } from 'src/addbook/addbook.service';
export declare class IssuebookController {
    private issueBookService;
    private readonly addBookService;
    constructor(issueBookService: IssuebookService, addBookService: AddbookService);
    create(createBookIssueDto: CreateIssueBookDto): Promise<IssueBook>;
}
